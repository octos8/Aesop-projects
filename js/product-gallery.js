// 제품별 제형과 분위기를 표현하는 연출 사진입니다.
const productGalleries = {
    "forest-veil-perfume": [
        { src: "./img/product-gallery/forest-veil-perfume-2.png", alt: "포레스트 베일 오 드 퍼퓸의 맑은 향 분위기" },
        { src: "./img/product-gallery/forest-veil-perfume-3.png", alt: "시더 우드와 무화과 잎의 향 분위기" },
        { src: "./img/product-gallery/forest-veil-perfume-4.png", alt: "포레스트 베일 오 드 퍼퓸 보태니컬 연출 사진" }
    ],
    "forest-veil-hand-wash": [
        { src: "./img/product-gallery/forest-veil-hand-wash-2.png", alt: "포레스트 베일 핸드 워시의 젤 제형" },
        { src: "./img/product-gallery/forest-veil-hand-wash-3.png", alt: "시더 우드와 무화과 잎의 차분한 분위기" },
        { src: "./img/product-gallery/forest-veil-hand-wash-4.png", alt: "포레스트 베일 핸드 워시로 손을 씻는 장면" }
    ],
    "forest-veil-body-lotion": [
        { src: "./img/product-gallery/forest-veil-body-lotion-2.png", alt: "포레스트 베일 바디 로션의 부드러운 로션 제형" },
        { src: "./img/product-gallery/forest-veil-body-lotion-3.png", alt: "시더 우드와 무화과 잎의 자연스러운 분위기" },
        { src: "./img/product-gallery/forest-veil-body-lotion-4.png", alt: "포레스트 베일 바디 로션을 팔에 바르는 장면" }
    ],
    "forest-veil-hand-cream": [
        { src: "./img/product-gallery/forest-veil-hand-cream-2.png", alt: "포레스트 베일 핸드 크림의 부드러운 크림 제형" },
        { src: "./img/product-gallery/forest-veil-hand-cream-3.png", alt: "시더 우드와 무화과 잎의 보태니컬 향 분위기" },
        { src: "./img/product-gallery/forest-veil-hand-cream-4.png", alt: "포레스트 베일 핸드 크림을 손에 바르는 사용 장면" }
    ],
    "forest-cleanser": [
        { src: "./img/product-gallery/forest-cleanser-2-v2.png", alt: "포레스트 캄 바디 클렌저 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/forest-cleanser-3-v2.png", alt: "포레스트 캄 바디 클렌저 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/forest-cleanser-4-v2.png", alt: "포레스트 캄 바디 클렌저 사용 분위기 연출 사진" }
    ],
    "forest-balm": [
        { src: "./img/product-gallery/forest-balm-2-v2.png", alt: "포레스트 캄 바디 밤 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/forest-balm-3-v2.png", alt: "포레스트 캄 바디 밤 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/forest-balm-4-v2.png", alt: "포레스트 캄 바디 밤 사용 분위기 연출 사진" }
    ],
    "forest-hand-wash": [
        { src: "./img/product-gallery/forest-hand-wash-2-v2.png", alt: "포레스트 캄 핸드 워시 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/forest-hand-wash-3-v2.png", alt: "포레스트 캄 핸드 워시 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/forest-hand-wash-4-v2.png", alt: "포레스트 캄 핸드 워시 사용 분위기 연출 사진" }
    ],
    "forest-serum": [
        { src: "./img/product-gallery/forest-serum-2-v2.png", alt: "포레스트 캄 라디언스 세럼 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/forest-serum-3-v2.png", alt: "포레스트 캄 라디언스 세럼 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/forest-serum-4-v2.png", alt: "포레스트 캄 라디언스 세럼 사용 분위기 연출 사진" }
    ],
    "forest-set": [
        { src: "./img/product-gallery/forest-set-2-v2.png", alt: "포레스트 캄 에센셜 세트 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/forest-set-3-v2.png", alt: "포레스트 캄 에센셜 세트 제형과 소재 연출 사진" },
        { src: "./img/product-gallery/forest-set-4-v2.png", alt: "포레스트 캄 에센셜 세트 사용 공간 연출 사진" }
    ],
    "citrus-oil": [
        { src: "./img/product-gallery/citrus-oil-2.png", alt: "시트러스 바디오일 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/citrus-oil-3.png", alt: "시트러스 바디오일 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/citrus-oil-4.png", alt: "시트러스 바디오일 사용 분위기 연출 사진" }
    ],
    "citrus-hand-wash": [
        { src: "./img/product-gallery/citrus-hand-wash-2.png", alt: "시트러스 아로마틱 핸드 워시 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/citrus-hand-wash-3.png", alt: "시트러스 아로마틱 핸드 워시 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/citrus-hand-wash-4.png", alt: "시트러스 아로마틱 핸드 워시 사용 분위기 연출 사진" }
    ],
    "citrus-serum": [
        { src: "./img/product-gallery/citrus-serum-2.png", alt: "시트러스 퓨어 래디언스 세럼 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/citrus-serum-3.png", alt: "시트러스 퓨어 래디언스 세럼 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/citrus-serum-4.png", alt: "시트러스 퓨어 래디언스 세럼 사용 분위기 연출 사진" }
    ],
    "citrus-balm": [
        { src: "./img/product-gallery/citrus-balm-2.png", alt: "시트러스 린드 바디 밤 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/citrus-balm-3.png", alt: "시트러스 린드 바디 밤 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/citrus-balm-4.png", alt: "시트러스 린드 바디 밤 사용 분위기 연출 사진" }
    ],
    "citrus-set": [
        { src: "./img/product-gallery/citrus-set-2.png", alt: "시트러스 가든 에센셜 세트 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/citrus-set-3.png", alt: "시트러스 가든 에센셜 세트 제형과 소재 연출 사진" },
        { src: "./img/product-gallery/citrus-set-4.png", alt: "시트러스 가든 에센셜 세트 사용 공간 연출 사진" }
    ],
    "relaxing-balm": [
        { src: "./img/product-gallery/relaxing-balm-2.png", alt: "이스트로스 바디 밤 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/relaxing-balm-3.png", alt: "이스트로스 바디 밤 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/relaxing-balm-4.png", alt: "이스트로스 바디 밤 사용 분위기 연출 사진" }
    ],
    "relaxing-spray": [
        { src: "./img/product-gallery/relaxing-spray-2.png", alt: "이스트로스 룸 스프레이 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/relaxing-spray-3.png", alt: "이스트로스 룸 스프레이 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/relaxing-spray-4.png", alt: "이스트로스 룸 스프레이 사용 분위기 연출 사진" }
    ],
    "relaxing-candle": [
        { src: "./img/product-gallery/relaxing-candle-2.png", alt: "이스트로스 캔들 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/relaxing-candle-3.png", alt: "이스트로스 캔들 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/relaxing-candle-4.png", alt: "이스트로스 캔들 사용 분위기 연출 사진" }
    ],
    "relaxing-diffuser": [
        { src: "./img/product-gallery/relaxing-diffuser-2.png", alt: "이스트로스 룸 디퓨저 제형 또는 소재 연출 사진" },
        { src: "./img/product-gallery/relaxing-diffuser-3.png", alt: "이스트로스 룸 디퓨저 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/relaxing-diffuser-4.png", alt: "이스트로스 룸 디퓨저 사용 분위기 연출 사진" }
    ],
    "relaxing-set": [
        { src: "./img/product-gallery/relaxing-set-2.png", alt: "릴렉싱 에센셜 세트 보태니컬 분위기 연출 사진" },
        { src: "./img/product-gallery/relaxing-set-3.png", alt: "릴렉싱 에센셜 세트 제형과 소재 연출 사진" },
        { src: "./img/product-gallery/relaxing-set-4.png", alt: "릴렉싱 에센셜 세트 사용 공간 연출 사진" }
    ],
    "reverence-hand-wash": [
        {
            "src": "./img/product-gallery/reverence-hand-wash-2.png",
            "alt": "레버런스 아로마틱 핸드 워시 젤 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/reverence-hand-wash-3.png",
            "alt": "레버런스 아로마틱 핸드 워시 베르가못 연출 이미지"
        },
        {
            "src": "./img/product-gallery/reverence-hand-wash-4.png",
            "alt": "레버런스 아로마틱 핸드 워시 베티버 연출 이미지"
        }
    ],
    "fable-serum": [
        {
            "src": "./img/product-gallery/fable-serum-2.png",
            "alt": "페이블 페이셜 세럼 세럼 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/fable-serum-3.png",
            "alt": "페이블 페이셜 세럼 촉촉한 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/fable-serum-4.png",
            "alt": "페이블 페이셜 세럼 빛과 수분 연출 이미지"
        }
    ],
    "purifying-cleanser": [
        {
            "src": "./img/product-gallery/purifying-cleanser-2.png",
            "alt": "퓨리파잉 페이셜 클렌저 젤 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/purifying-cleanser-3.png",
            "alt": "퓨리파잉 페이셜 클렌저 초록 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/purifying-cleanser-4.png",
            "alt": "퓨리파잉 페이셜 클렌저 클렌징 거품 연출 이미지"
        }
    ],
    "tacit-perfume": [
        {
            "src": "./img/product-gallery/tacit-perfume-2.png",
            "alt": "테싯 오 드 퍼퓸 향수의 빛 연출 이미지"
        },
        {
            "src": "./img/product-gallery/tacit-perfume-3.png",
            "alt": "테싯 오 드 퍼퓸 바질과 시트러스 연출 이미지"
        },
        {
            "src": "./img/product-gallery/tacit-perfume-4.png",
            "alt": "테싯 오 드 퍼퓸 베티버와 껍질 연출 이미지"
        }
    ],
    "balancing-shampoo": [
        {
            "src": "./img/product-gallery/balancing-shampoo-2.png",
            "alt": "밸런싱 샴푸 샴푸 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/balancing-shampoo-3.png",
            "alt": "밸런싱 샴푸 산뜻한 허브 연출 이미지"
        },
        {
            "src": "./img/product-gallery/balancing-shampoo-4.png",
            "alt": "밸런싱 샴푸 거품과 물 연출 이미지"
        }
    ],
    "immediate-mist": [
        {
            "src": "./img/product-gallery/immediate-mist-2.png",
            "alt": "이미디에이트 모이스처 페이셜 미스트 미스트 물방울 연출 이미지"
        },
        {
            "src": "./img/product-gallery/immediate-mist-3.png",
            "alt": "이미디에이트 모이스처 페이셜 미스트 이슬 맺힌 잎 연출 이미지"
        },
        {
            "src": "./img/product-gallery/immediate-mist-4.png",
            "alt": "이미디에이트 모이스처 페이셜 미스트 수분의 빛 연출 이미지"
        }
    ],
    "parsley-cream": [
        {
            "src": "./img/product-gallery/parsley-cream-2.png",
            "alt": "파슬리 페이셜 하이드레이팅 크림 크림 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/parsley-cream-3.png",
            "alt": "파슬리 페이셜 하이드레이팅 크림 파슬리 연출 이미지"
        },
        {
            "src": "./img/product-gallery/parsley-cream-4.png",
            "alt": "파슬리 페이셜 하이드레이팅 크림 촉촉한 식물 연출 이미지"
        }
    ],
    "new-1": [
        {
            "src": "./img/product-gallery/new-1-2.png",
            "alt": "미네랄 배스 솔트 소금 결정 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-1-3.png",
            "alt": "미네랄 배스 솔트 미네랄과 돌 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-1-4.png",
            "alt": "미네랄 배스 솔트 욕조의 물결 연출 이미지"
        }
    ],
    "new-2": [
        {
            "src": "./img/product-gallery/new-2-2.png",
            "alt": "아로마틱 필로우 미스트 미스트 물방울 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-2-3.png",
            "alt": "아로마틱 필로우 미스트 차분한 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-2-4.png",
            "alt": "아로마틱 필로우 미스트 린넨 베개 연출 이미지"
        }
    ],
    "new-3": [
        {
            "src": "./img/product-gallery/new-3-2.png",
            "alt": "솔리드 퍼퓸 밤 퍼퓸 밤 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-3-3.png",
            "alt": "솔리드 퍼퓸 밤 우디한 분위기 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-3-4.png",
            "alt": "솔리드 퍼퓸 밤 따뜻한 향의 분위기 연출 이미지"
        }
    ],
    "new-4": [
        {
            "src": "./img/product-gallery/new-4-2.png",
            "alt": "카밍 바디 오일 오일 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-4-3.png",
            "alt": "카밍 바디 오일 차분한 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-4-4.png",
            "alt": "카밍 바디 오일 오일의 빛 연출 이미지"
        }
    ],
    "new-6": [
        {
            "src": "./img/product-gallery/new-6-2.png",
            "alt": "모닝 듀 하이드레이팅 페이셜 미스트 미스트 물방울 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-6-3.png",
            "alt": "모닝 듀 하이드레이팅 페이셜 미스트 아침 이슬 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-6-4.png",
            "alt": "모닝 듀 하이드레이팅 페이셜 미스트 수분과 그림자 연출 이미지"
        }
    ],
    "new-7": [
        {
            "src": "./img/product-gallery/new-7-2.png",
            "alt": "퍼스트 라이트 비타민 페이셜 세럼 세럼 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-7-3.png",
            "alt": "퍼스트 라이트 비타민 페이셜 세럼 시트러스 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-7-4.png",
            "alt": "퍼스트 라이트 비타민 페이셜 세럼 아침의 빛 연출 이미지"
        }
    ],
    "new-8": [
        {
            "src": "./img/product-gallery/new-8-2.png",
            "alt": "시트러스 어웨이크닝 바디 클렌저 젤 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-8-3.png",
            "alt": "시트러스 어웨이크닝 바디 클렌저 시트러스 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-8-4.png",
            "alt": "시트러스 어웨이크닝 바디 클렌저 거품과 껍질 연출 이미지"
        }
    ],
    "new-9": [
        {
            "src": "./img/product-gallery/new-9-2.png",
            "alt": "셀레네 펄스 포인트 롤온 오일 물방울 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-9-3.png",
            "alt": "셀레네 펄스 포인트 롤온 우디한 분위기 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-9-4.png",
            "alt": "셀레네 펄스 포인트 롤온 밤의 분위기 연출 이미지"
        }
    ],
    "new-10": [
        {
            "src": "./img/product-gallery/new-10-2.png",
            "alt": "힙노스 미네랄 배스 솔트 소금 결정 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-10-3.png",
            "alt": "힙노스 미네랄 배스 솔트 소금과 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-10-4.png",
            "alt": "힙노스 미네랄 배스 솔트 차분한 물결 연출 이미지"
        }
    ],
    "new-11": [
        {
            "src": "./img/product-gallery/new-11-2.png",
            "alt": "솜누스 필로우 앤 린넨 미스트 미스트 물방울 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-11-3.png",
            "alt": "솜누스 필로우 앤 린넨 미스트 차분한 식물 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-11-4.png",
            "alt": "솜누스 필로우 앤 린넨 미스트 린넨과 그림자 연출 이미지"
        }
    ],
    "new-12": [
        {
            "src": "./img/product-gallery/new-12-2.png",
            "alt": "베스퍼 오버나이트 바디 밤 밤 제형 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-12-3.png",
            "alt": "베스퍼 오버나이트 바디 밤 우디한 분위기 연출 이미지"
        },
        {
            "src": "./img/product-gallery/new-12-4.png",
            "alt": "베스퍼 오버나이트 바디 밤 크림과 린넨 연출 이미지"
        }
    ],
    "new-5": [
        {
            "src": "./img/buy-info/cream.jpg",
            "alt": "크림 제형 연출 이미지"
        },
        {
            "src": "./img/buy-info/orenge.jpg",
            "alt": "오렌지 연출 이미지"
        },
        {
            "src": "./img/buy-info/tree.jpg",
            "alt": "우디한 분위기 연출 이미지"
        }
    ]
};
