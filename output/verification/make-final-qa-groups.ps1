Add-Type -AssemblyName System.Drawing
$qaRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../..'))
$manifest = Get-Content -LiteralPath (Join-Path $qaRoot 'output/verification/catalog-final-manifest.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$productIds = @($manifest.panels.PSObject.Properties.Name)
$qaFont = New-Object System.Drawing.Font 'Arial',13
$detailGroups = @()
$reviewGroups = @()
foreach ($productId in $productIds) {
    $reviewBitmap = New-Object System.Drawing.Bitmap 1200,460
    $reviewCanvas = [System.Drawing.Graphics]::FromImage($reviewBitmap)
    $reviewCanvas.Clear([System.Drawing.Color]::White)
    $reviewCanvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $photos = @($manifest.reviewPhotos.$productId)
    for ($slot=0; $slot -lt 3; $slot++) {
        $reviewPhoto = [System.Drawing.Image]::FromFile((Join-Path $qaRoot $photos[$slot]))
        $ratio = [Math]::Min(396 / $reviewPhoto.Width,420 / $reviewPhoto.Height)
        $photoWidth = [int]($reviewPhoto.Width * $ratio)
        $photoHeight = [int]($reviewPhoto.Height * $ratio)
        $photoLeft = [int]($slot*400+(400-$photoWidth)/2)
        $reviewCanvas.DrawString("$productId / $($slot+1)",$qaFont,[System.Drawing.Brushes]::Black,($slot*400),2)
        $reviewCanvas.DrawImage($reviewPhoto,$photoLeft,30,$photoWidth,$photoHeight)
        $reviewPhoto.Dispose()
    }
    $reviewBitmap.Save((Join-Path $qaRoot "output/verification/$productId-final-reviews.png"))
    $reviewCanvas.Dispose()
    $reviewBitmap.Dispose()
}
for ($start=0; $start -lt $productIds.Count; $start+=6) {
    $groupNumber = [int]($start/6)+1
    $detailBitmap = New-Object System.Drawing.Bitmap 1720,1590
    $detailCanvas = [System.Drawing.Graphics]::FromImage($detailBitmap)
    $detailCanvas.Clear([System.Drawing.Color]::White)
    $detailCanvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $reviewBitmap = New-Object System.Drawing.Bitmap 1200,690
    $reviewCanvas = [System.Drawing.Graphics]::FromImage($reviewBitmap)
    $reviewCanvas.Clear([System.Drawing.Color]::White)
    $reviewCanvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $groupIds = @()
    for ($tile=0; $tile -lt 6 -and $start+$tile -lt $productIds.Count; $tile++) {
        $productId = $productIds[$start+$tile]
        $groupIds += $productId
        $column = $tile % 2
        $row = [int][Math]::Floor($tile/2)
        $detailContact = [System.Drawing.Image]::FromFile((Join-Path $qaRoot "output/verification/$productId-sunlit-details.png"))
        $detailCanvas.DrawImage($detailContact,($column*860),($row*530),860,530)
        $detailContact.Dispose()
        $reviewContact = [System.Drawing.Image]::FromFile((Join-Path $qaRoot "output/verification/$productId-final-reviews.png"))
        $reviewCanvas.DrawImage($reviewContact,($column*600),($row*230),600,230)
        $reviewContact.Dispose()
    }
    $detailCanvas.Dispose()
    $detailBitmap.Save((Join-Path $qaRoot "output/verification/final-details-group-$groupNumber.png"))
    $detailBitmap.Dispose()
    $reviewCanvas.Dispose()
    $reviewBitmap.Save((Join-Path $qaRoot "output/verification/final-reviews-group-$groupNumber.png"))
    $reviewBitmap.Dispose()
    $detailGroups += @{group=$groupNumber;ids=$groupIds}
    $reviewGroups += @{group=$groupNumber;ids=$groupIds}
}
$qaFont.Dispose()
@{detailGroups=$detailGroups;reviewGroups=$reviewGroups} | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $qaRoot 'output/verification/final-qa-groups.json') -Encoding UTF8
Write-Output "Grouped all $($productIds.Count) product stories and review photos."
