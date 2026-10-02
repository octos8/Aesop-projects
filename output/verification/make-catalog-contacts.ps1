Add-Type -AssemblyName System.Drawing
$taskRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../..'))
$productSpecs = Get-Content -LiteralPath (Join-Path $taskRoot 'output/imagegen/sunlit-style-products.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$font = New-Object System.Drawing.Font 'Arial', 13
$detailContacts = @()
$reviewContacts = @()
foreach ($productSpec in $productSpecs) {
    $panelFiles = @(1..4 | ForEach-Object {
        if ($productSpec.id.StartsWith('forest-veil-') -and ($_ -eq 1 -or $_ -eq 3)) {
            Join-Path $taskRoot "img/buy-info/$($productSpec.id)-$_.png"
        } else {
            Join-Path $taskRoot "img/buy-info/catalog/$($productSpec.id)-$_.png"
        }
    })
    $allPanelsReady = @($panelFiles | Where-Object { Test-Path -LiteralPath $_ }).Count -eq 4
    if ($allPanelsReady) {
        $detailBitmap = New-Object System.Drawing.Bitmap 1720, 1060
        $detailCanvas = [System.Drawing.Graphics]::FromImage($detailBitmap)
        $detailCanvas.Clear([System.Drawing.Color]::White)
        $detailCanvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        for ($slot=0; $slot -lt 4; $slot++) {
            $panelImage = [System.Drawing.Image]::FromFile($panelFiles[$slot])
            $ratio = [Math]::Min(426 / $panelImage.Width, 1028 / $panelImage.Height)
            $drawWidth = [int]($panelImage.Width * $ratio)
            $drawHeight = [int]($panelImage.Height * $ratio)
            $drawLeft = [int]($slot * 430 + (430 - $drawWidth) / 2)
            $detailCanvas.DrawString("$($productSpec.id) / $($slot+1)", $font, [System.Drawing.Brushes]::Black, ($slot*430), 2)
            $detailCanvas.DrawImage($panelImage, $drawLeft, 30, $drawWidth, $drawHeight)
            $panelImage.Dispose()
        }
        $detailContactPath = Join-Path $taskRoot "output/verification/$($productSpec.id)-sunlit-details.png"
        $detailBitmap.Save($detailContactPath)
        $detailCanvas.Dispose()
        $detailBitmap.Dispose()
        $detailContacts += $productSpec.id
    }
    $reviewFiles = @(1..3 | ForEach-Object { Join-Path $taskRoot "img/reviews/catalog/$($productSpec.id)-$_.png" })
    $allReviewsReady = @($reviewFiles | Where-Object { Test-Path -LiteralPath $_ }).Count -eq 3
    if ($allReviewsReady) {
        $reviewBitmap = New-Object System.Drawing.Bitmap 1200, 460
        $reviewCanvas = [System.Drawing.Graphics]::FromImage($reviewBitmap)
        $reviewCanvas.Clear([System.Drawing.Color]::White)
        $reviewCanvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        for ($photoSlot=0; $photoSlot -lt 3; $photoSlot++) {
            $reviewImage = [System.Drawing.Image]::FromFile($reviewFiles[$photoSlot])
            $reviewRatio = [Math]::Min(396 / $reviewImage.Width, 420 / $reviewImage.Height)
            $reviewWidth = [int]($reviewImage.Width * $reviewRatio)
            $reviewHeight = [int]($reviewImage.Height * $reviewRatio)
            $reviewLeft = [int]($photoSlot * 400 + (400 - $reviewWidth) / 2)
            $reviewCanvas.DrawString("$($productSpec.id) / $($photoSlot+1)", $font, [System.Drawing.Brushes]::Black, ($photoSlot*400), 2)
            $reviewCanvas.DrawImage($reviewImage, $reviewLeft, 30, $reviewWidth, $reviewHeight)
            $reviewImage.Dispose()
        }
        $reviewContactPath = Join-Path $taskRoot "output/verification/$($productSpec.id)-sunlit-reviews.png"
        $reviewBitmap.Save($reviewContactPath)
        $reviewCanvas.Dispose()
        $reviewBitmap.Dispose()
        $reviewContacts += $productSpec.id
    }
}
$font.Dispose()
@{ detailContacts = $detailContacts; reviewContacts = $reviewContacts } | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $taskRoot 'output/verification/sunlit-contact-index.json') -Encoding UTF8
Write-Output "Details ready: $($detailContacts.Count) / 37; reviews ready: $($reviewContacts.Count) / 37"
