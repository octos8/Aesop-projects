/* 선릿을 제외한 모든 제품의 상세 이미지 네 장을 연결합니다. */
(() => {
    const panels = {
  "new-1": [
    {
      "src": "./img/buy-info/catalog/new-1-1.png?v=20261002-all-details",
      "alt": "미네랄 배스 솔트 제품 소개",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/new-1-2.png?v=20261002-all-details",
      "alt": "미네랄 배스 솔트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1910
    },
    {
      "src": "./img/buy-info/catalog/new-1-3.png?v=20261002-all-details",
      "alt": "미네랄 배스 솔트 제품 특징, 제형과 사용 방법",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/new-1-4.png?v=20261002-all-details",
      "alt": "미네랄 배스 솔트 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "new-2": [
    {
      "src": "./img/buy-info/catalog/new-2-1.png?v=20261002-all-details",
      "alt": "아로마틱 필로우 미스트 제품 소개",
      "width": 897,
      "height": 1753
    },
    {
      "src": "./img/buy-info/catalog/new-2-2.png?v=20261002-all-details",
      "alt": "아로마틱 필로우 미스트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-2-3.png?v=20261002-all-details",
      "alt": "아로마틱 필로우 미스트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-2-4.png?v=20261002-all-details",
      "alt": "아로마틱 필로우 미스트 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "new-3": [
    {
      "src": "./img/buy-info/catalog/new-3-1.png?v=20261002-all-details",
      "alt": "솔리드 퍼퓸 밤 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-3-2.png?v=20261002-all-details",
      "alt": "솔리드 퍼퓸 밤 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-3-3.png?v=20261002-all-details",
      "alt": "솔리드 퍼퓸 밤 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-3-4.png?v=20261002-all-details",
      "alt": "솔리드 퍼퓸 밤 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "new-4": [
    {
      "src": "./img/buy-info/catalog/new-4-1.png?v=20261002-all-details",
      "alt": "카밍 바디 오일 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-4-2.png?v=20261002-all-details",
      "alt": "카밍 바디 오일 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-4-3.png?v=20261002-all-details",
      "alt": "카밍 바디 오일 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-4-4.png?v=20261002-all-details",
      "alt": "카밍 바디 오일 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "new-6": [
    {
      "src": "./img/buy-info/catalog/new-6-1.png?v=20261002-all-details",
      "alt": "모닝 듀 하이드레이팅 페이셜 미스트 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-6-2.png?v=20261002-all-details",
      "alt": "모닝 듀 하이드레이팅 페이셜 미스트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-6-3.png?v=20261002-all-details",
      "alt": "모닝 듀 하이드레이팅 페이셜 미스트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-6-4.png?v=20261002-all-details",
      "alt": "모닝 듀 하이드레이팅 페이셜 미스트 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "new-7": [
    {
      "src": "./img/buy-info/catalog/new-7-1.png?v=20261002-all-details",
      "alt": "퍼스트 라이트 비타민 페이셜 세럼 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-7-2.png?v=20261002-all-details",
      "alt": "퍼스트 라이트 비타민 페이셜 세럼 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-7-3.png?v=20261002-all-details",
      "alt": "퍼스트 라이트 비타민 페이셜 세럼 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-7-4.png?v=20261002-all-details",
      "alt": "퍼스트 라이트 비타민 페이셜 세럼 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "new-8": [
    {
      "src": "./img/buy-info/catalog/new-8-1.png?v=20261002-all-details",
      "alt": "시트러스 어웨이크닝 바디 클렌저 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-8-2.png?v=20261002-all-details",
      "alt": "시트러스 어웨이크닝 바디 클렌저 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-8-3.png?v=20261002-all-details",
      "alt": "시트러스 어웨이크닝 바디 클렌저 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-8-4.png?v=20261002-all-details",
      "alt": "시트러스 어웨이크닝 바디 클렌저 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "new-9": [
    {
      "src": "./img/buy-info/catalog/new-9-1.png?v=20261002-all-details",
      "alt": "셀레네 펄스 포인트 롤온 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-9-2.png?v=20261002-all-details",
      "alt": "셀레네 펄스 포인트 롤온 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-9-3.png?v=20261002-all-details",
      "alt": "셀레네 펄스 포인트 롤온 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-9-4.png?v=20261002-all-details",
      "alt": "셀레네 펄스 포인트 롤온 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "new-10": [
    {
      "src": "./img/buy-info/catalog/new-10-1.png?v=20261002-all-details",
      "alt": "힙노스 미네랄 배스 솔트 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-10-2.png?v=20261002-all-details",
      "alt": "힙노스 미네랄 배스 솔트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-10-3.png?v=20261002-all-details",
      "alt": "힙노스 미네랄 배스 솔트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-10-4.png?v=20261002-all-details",
      "alt": "힙노스 미네랄 배스 솔트 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "new-11": [
    {
      "src": "./img/buy-info/catalog/new-11-1.png?v=20261002-all-details",
      "alt": "솜누스 필로우 앤 린넨 미스트 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-11-2.png?v=20261002-all-details",
      "alt": "솜누스 필로우 앤 린넨 미스트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-11-3.png?v=20261002-all-details",
      "alt": "솜누스 필로우 앤 린넨 미스트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-11-4.png?v=20261002-all-details",
      "alt": "솜누스 필로우 앤 린넨 미스트 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "new-12": [
    {
      "src": "./img/buy-info/catalog/new-12-1.png?v=20261002-all-details",
      "alt": "베스퍼 오버나이트 바디 밤 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/new-12-2.png?v=20261002-all-details",
      "alt": "베스퍼 오버나이트 바디 밤 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-12-3.png?v=20261002-all-details",
      "alt": "베스퍼 오버나이트 바디 밤 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/new-12-4.png?v=20261002-all-details",
      "alt": "베스퍼 오버나이트 바디 밤 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "reverence-hand-wash": [
    {
      "src": "./img/buy-info/catalog/reverence-hand-wash-1.png?v=20261002-all-details",
      "alt": "레버런스 아로마틱 핸드 워시 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/reverence-hand-wash-2.png?v=20261002-all-details",
      "alt": "레버런스 아로마틱 핸드 워시 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/reverence-hand-wash-3.png?v=20261002-all-details",
      "alt": "레버런스 아로마틱 핸드 워시 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/reverence-hand-wash-4.png?v=20261002-all-details",
      "alt": "레버런스 아로마틱 핸드 워시 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "fable-serum": [
    {
      "src": "./img/buy-info/catalog/fable-serum-1.png?v=20261002-all-details",
      "alt": "페이블 페이셜 세럼 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/fable-serum-2.png?v=20261002-all-details",
      "alt": "페이블 페이셜 세럼 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/fable-serum-3.png?v=20261002-all-details",
      "alt": "페이블 페이셜 세럼 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/fable-serum-4.png?v=20261002-all-details",
      "alt": "페이블 페이셜 세럼 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "purifying-cleanser": [
    {
      "src": "./img/buy-info/catalog/purifying-cleanser-1.png?v=20261002-all-details",
      "alt": "퓨리파잉 페이셜 클렌저 제품 소개",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/purifying-cleanser-2.png?v=20261002-all-details",
      "alt": "퓨리파잉 페이셜 클렌저 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/purifying-cleanser-3.png?v=20261002-all-details",
      "alt": "퓨리파잉 페이셜 클렌저 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1910
    },
    {
      "src": "./img/buy-info/catalog/purifying-cleanser-4.png?v=20261002-all-details",
      "alt": "퓨리파잉 페이셜 클렌저 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "tacit-perfume": [
    {
      "src": "./img/buy-info/catalog/tacit-perfume-1.png?v=20261002-all-details",
      "alt": "테싯 오 드 퍼퓸 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/tacit-perfume-2.png?v=20261002-all-details",
      "alt": "테싯 오 드 퍼퓸 사용 장면과 케어 리추얼",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/tacit-perfume-3.png?v=20261002-all-details",
      "alt": "테싯 오 드 퍼퓸 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/tacit-perfume-4.png?v=20261002-all-details",
      "alt": "테싯 오 드 퍼퓸 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "balancing-shampoo": [
    {
      "src": "./img/buy-info/catalog/balancing-shampoo-1.png?v=20261002-all-details",
      "alt": "밸런싱 샴푸 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/balancing-shampoo-2.png?v=20261002-all-details",
      "alt": "밸런싱 샴푸 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/balancing-shampoo-3.png?v=20261002-all-details",
      "alt": "밸런싱 샴푸 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/balancing-shampoo-4.png?v=20261002-all-details",
      "alt": "밸런싱 샴푸 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "immediate-mist": [
    {
      "src": "./img/buy-info/catalog/immediate-mist-1.png?v=20261002-all-details",
      "alt": "이미디에이트 모이스처 페이셜 미스트 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/immediate-mist-2.png?v=20261002-all-details",
      "alt": "이미디에이트 모이스처 페이셜 미스트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/immediate-mist-3.png?v=20261002-all-details",
      "alt": "이미디에이트 모이스처 페이셜 미스트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/immediate-mist-4.png?v=20261002-all-details",
      "alt": "이미디에이트 모이스처 페이셜 미스트 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1912
    }
  ],
  "parsley-cream": [
    {
      "src": "./img/buy-info/catalog/parsley-cream-1.png?v=20261002-all-details",
      "alt": "파슬리 페이셜 하이드레이팅 크림 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/parsley-cream-2.png?v=20261002-all-details",
      "alt": "파슬리 페이셜 하이드레이팅 크림 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/parsley-cream-3.png?v=20261002-all-details",
      "alt": "파슬리 페이셜 하이드레이팅 크림 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/parsley-cream-4.png?v=20261002-all-details",
      "alt": "파슬리 페이셜 하이드레이팅 크림 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-cleanser": [
    {
      "src": "./img/buy-info/catalog/forest-cleanser-1.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 클렌저 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-cleanser-2.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 클렌저 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-cleanser-3.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 클렌저 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-cleanser-4.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 클렌저 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "forest-balm": [
    {
      "src": "./img/buy-info/catalog/forest-balm-1.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 밤 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-balm-2.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 밤 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-balm-3.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 밤 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-balm-4.png?v=20261002-all-details",
      "alt": "포레스트 캄 바디 밤 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-hand-wash": [
    {
      "src": "./img/buy-info/catalog/forest-hand-wash-1.png?v=20261002-all-details",
      "alt": "포레스트 캄 핸드 워시 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-hand-wash-2.png?v=20261002-all-details",
      "alt": "포레스트 캄 핸드 워시 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-hand-wash-3.png?v=20261002-all-details",
      "alt": "포레스트 캄 핸드 워시 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-hand-wash-4.png?v=20261002-all-details",
      "alt": "포레스트 캄 핸드 워시 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1910
    }
  ],
  "forest-serum": [
    {
      "src": "./img/buy-info/catalog/forest-serum-1.png?v=20261002-all-details",
      "alt": "포레스트 캄 라디언스 세럼 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-serum-2.png?v=20261002-all-details",
      "alt": "포레스트 캄 라디언스 세럼 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-serum-3.png?v=20261002-all-details",
      "alt": "포레스트 캄 라디언스 세럼 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-serum-4.png?v=20261002-all-details",
      "alt": "포레스트 캄 라디언스 세럼 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1912
    }
  ],
  "forest-set": [
    {
      "src": "./img/buy-info/catalog/forest-set-1.png?v=20261002-all-details",
      "alt": "포레스트 캄 에센셜 세트 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-set-2.png?v=20261002-all-details",
      "alt": "포레스트 캄 에센셜 세트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-set-3.png?v=20261002-all-details",
      "alt": "포레스트 캄 에센셜 세트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-set-4.png?v=20261002-all-details",
      "alt": "포레스트 캄 에센셜 세트 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "citrus-oil": [
    {
      "src": "./img/buy-info/catalog/citrus-oil-1.png?v=20261002-all-details",
      "alt": "시트러스 바디오일 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-oil-2.png?v=20261002-all-details",
      "alt": "시트러스 바디오일 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-oil-3.png?v=20261002-all-details",
      "alt": "시트러스 바디오일 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-oil-4.png?v=20261002-all-details",
      "alt": "시트러스 바디오일 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "citrus-hand-wash": [
    {
      "src": "./img/buy-info/catalog/citrus-hand-wash-1.png?v=20261002-all-details",
      "alt": "시트러스 아로마틱 핸드 워시 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-hand-wash-2.png?v=20261002-all-details",
      "alt": "시트러스 아로마틱 핸드 워시 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-hand-wash-3.png?v=20261002-all-details",
      "alt": "시트러스 아로마틱 핸드 워시 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-hand-wash-4.png?v=20261002-all-details",
      "alt": "시트러스 아로마틱 핸드 워시 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "citrus-serum": [
    {
      "src": "./img/buy-info/catalog/citrus-serum-1.png?v=20261002-all-details",
      "alt": "시트러스 퓨어 래디언스 세럼 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-serum-2.png?v=20261002-all-details",
      "alt": "시트러스 퓨어 래디언스 세럼 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-serum-3.png?v=20261002-all-details",
      "alt": "시트러스 퓨어 래디언스 세럼 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-serum-4.png?v=20261002-all-details",
      "alt": "시트러스 퓨어 래디언스 세럼 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "citrus-balm": [
    {
      "src": "./img/buy-info/catalog/citrus-balm-1.png?v=20261002-all-details",
      "alt": "시트러스 린드 바디 밤 제품 소개",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/citrus-balm-2.png?v=20261002-all-details",
      "alt": "시트러스 린드 바디 밤 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-balm-3.png?v=20261002-all-details",
      "alt": "시트러스 린드 바디 밤 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-balm-4.png?v=20261002-all-details",
      "alt": "시트러스 린드 바디 밤 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "citrus-set": [
    {
      "src": "./img/buy-info/catalog/citrus-set-1.png?v=20261002-all-details",
      "alt": "시트러스 가든 에센셜 세트 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/citrus-set-2.png?v=20261002-all-details",
      "alt": "시트러스 가든 에센셜 세트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-set-3.png?v=20261002-all-details",
      "alt": "시트러스 가든 에센셜 세트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/citrus-set-4.png?v=20261002-all-details",
      "alt": "시트러스 가든 에센셜 세트 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "relaxing-balm": [
    {
      "src": "./img/buy-info/catalog/relaxing-balm-1.png?v=20261002-all-details",
      "alt": "이스트로스 바디 밤 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-balm-2.png?v=20261002-all-details",
      "alt": "이스트로스 바디 밤 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-balm-3.png?v=20261002-all-details",
      "alt": "이스트로스 바디 밤 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-balm-4.png?v=20261002-all-details",
      "alt": "이스트로스 바디 밤 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "relaxing-spray": [
    {
      "src": "./img/buy-info/catalog/relaxing-spray-1.png?v=20261002-all-details",
      "alt": "이스트로스 룸 스프레이 제품 소개",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/catalog/relaxing-spray-2.png?v=20261002-all-details",
      "alt": "이스트로스 룸 스프레이 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-spray-3.png?v=20261002-all-details",
      "alt": "이스트로스 룸 스프레이 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-spray-4.png?v=20261002-all-details",
      "alt": "이스트로스 룸 스프레이 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "relaxing-candle": [
    {
      "src": "./img/buy-info/catalog/relaxing-candle-1.png?v=20261002-all-details",
      "alt": "이스트로스 캔들 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-candle-2.png?v=20261002-all-details",
      "alt": "이스트로스 캔들 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-candle-3.png?v=20261002-all-details",
      "alt": "이스트로스 캔들 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-candle-4.png?v=20261002-all-details",
      "alt": "이스트로스 캔들 함께 사용하는 제품 안내",
      "width": 897,
      "height": 1752
    }
  ],
  "relaxing-diffuser": [
    {
      "src": "./img/buy-info/catalog/relaxing-diffuser-1.png?v=20261002-all-details",
      "alt": "이스트로스 룸 디퓨저 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-diffuser-2.png?v=20261002-all-details",
      "alt": "이스트로스 룸 디퓨저 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/relaxing-diffuser-3.png?v=20261002-all-details",
      "alt": "이스트로스 룸 디퓨저 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-diffuser-4.png?v=20261002-all-details",
      "alt": "이스트로스 룸 디퓨저 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "relaxing-set": [
    {
      "src": "./img/buy-info/catalog/relaxing-set-1.png?v=20261002-all-details",
      "alt": "릴렉싱 에센셜 세트 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/relaxing-set-2.png?v=20261002-all-details",
      "alt": "릴렉싱 에센셜 세트 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-set-3.png?v=20261002-all-details",
      "alt": "릴렉싱 에센셜 세트 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/relaxing-set-4.png?v=20261002-all-details",
      "alt": "릴렉싱 에센셜 세트 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-veil-perfume": [
    {
      "src": "./img/buy-info/forest-veil-perfume-1.png?v=20261002-all-details",
      "alt": "포레스트 베일 오 드 퍼퓸 제품 소개",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-perfume-2.png?v=20261002-all-details",
      "alt": "포레스트 베일 오 드 퍼퓸 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/forest-veil-perfume-3.png?v=20261002-all-details",
      "alt": "포레스트 베일 오 드 퍼퓸 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-perfume-4.png?v=20261002-all-details",
      "alt": "포레스트 베일 오 드 퍼퓸 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-veil-hand-wash": [
    {
      "src": "./img/buy-info/forest-veil-hand-wash-1.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 워시 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-hand-wash-2.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 워시 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/forest-veil-hand-wash-3.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 워시 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-hand-wash-4.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 워시 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-veil-body-lotion": [
    {
      "src": "./img/buy-info/forest-veil-body-lotion-1.png?v=20261002-all-details",
      "alt": "포레스트 베일 바디 로션 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-body-lotion-2.png?v=20261002-all-details",
      "alt": "포레스트 베일 바디 로션 사용 장면과 케어 리추얼",
      "width": 897,
      "height": 1752
    },
    {
      "src": "./img/buy-info/forest-veil-body-lotion-3.png?v=20261002-all-details",
      "alt": "포레스트 베일 바디 로션 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-body-lotion-4.png?v=20261002-all-details",
      "alt": "포레스트 베일 바디 로션 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ],
  "forest-veil-hand-cream": [
    {
      "src": "./img/buy-info/forest-veil-hand-cream-1.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 크림 제품 소개",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-hand-cream-2.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 크림 사용 장면과 케어 리추얼",
      "width": 823,
      "height": 1911
    },
    {
      "src": "./img/buy-info/forest-veil-hand-cream-3.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 크림 제품 특징, 제형과 사용 방법",
      "width": 823,
      "height": 1912
    },
    {
      "src": "./img/buy-info/catalog/forest-veil-hand-cream-4.png?v=20261002-all-details",
      "alt": "포레스트 베일 핸드 크림 함께 사용하는 제품 안내",
      "width": 823,
      "height": 1911
    }
  ]
};
    window.productDetailPanels = panels;
    window.renderProductStory = product => {
        if (!product || product.id === "new-5") return;
        const entries = panels[product.id];
        if (!entries) return;
        const story = document.querySelector(".product-story-images");
        if (!story) return;
        story.classList.remove("catalog-story");
        document.body.classList.remove("has-catalog-story");
        document.body.classList.add("has-catalog-detail-images");
        story.replaceChildren(...entries.map(panel => {
            const image = document.createElement("img");
            Object.assign(image, {src: panel.src, alt: panel.alt, width: panel.width, height: panel.height, loading: "lazy", decoding: "async"});
            return image;
        }));
    };
})();
