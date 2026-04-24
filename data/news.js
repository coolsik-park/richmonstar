// 뉴스 데이터 (다국어 지원)
const newsData = [
    {
        id: "news-1",
        year: 2026,
        month: 2,
        day: 2,
        // Korean
        date_ko: "2026년 02월 02일",
        title_ko: "한국 오피스 이전",
        content_ko: [
            "리치몬스타 서울 오피스가 보다 나은 업무 환경을 위해 새로운 공간으로 이전했습니다.",
            "클라이언트와의 협업 및 글로벌 파트너십 강화를 위한 인프라를 한층 더 강화했습니다."
        ],
        // Japanese
        date_ja: "2026年02月02日",
        title_ja: "韓国オフィス移転",
        content_ja: [
            "リッチモンスター韓国オフィスが、より良い業務環境のため新オフィスへ移転しました。",
            "クライアントとの協業およびグローバルパートナーシップ強化のためのインフラを一層拡充しました。"
        ],
        // English
        date_en: "Feb 2, 2026",
        title_en: "Korea Office Relocation",
        content_en: [
            "RychmonstaR has relocated its Seoul office to a new space for a better working environment.",
            "The new office further strengthens our infrastructure for client collaboration and global partnerships."
        ]
    },
    {
        id: "news-2",
        year: 2026,
        month: 1,
        day: 1,
        // Korean
        date_ko: "2026년 01월 01일",
        title_ko: "일본 오피스 오픈",
        content_ko: [
            "리치몬스타 일본 도쿄 오피스를 공식 오픈했습니다.",
            "일본 내 파트너사 및 클라이언트와의 긴밀한 협업을 위한 거점 역할을 하게 됩니다."
        ],
        // Japanese
        date_ja: "2026年01月01日",
        title_ja: "日本オフィスオープン",
        content_ja: [
            "リッチモンスターは東京オフィスを正式にオープンしました。",
            "日本国内のパートナーおよびクライアントとの連携拠点として機能します。"
        ],
        // English
        date_en: "Jan 1, 2026",
        title_en: "Japan Office Opened",
        content_en: [
            "RychmonstaR has officially opened its Tokyo office.",
            "The new hub will enable closer collaboration with partners and clients in the Japanese market."
        ]
    },
    {
        id: "news-3",
        year: 2025,
        month: 12,
        day: 15,
        // Korean
        date_ko: "2025년 12월 15일",
        title_ko: "M&A전문 일본법인 리안파트너스와 업무제휴",
        content_ko: [
            "리치몬스타는 일본 M&A 전문 법인 리안파트너스와 전략적 업무 제휴를 체결했습니다.",
            "양사는 글로벌 M&A 및 투자 프로젝트에서 긴밀히 협력할 예정입니다."
        ],
        // Japanese
        date_ja: "2025年12月15日",
        title_ja: "日本M&A専門法人リアンパートナーズと業務提携",
        content_ja: [
            "リッチモンスターは、日本のM&A専門法人リアンパートナーズと戦略的業務提携を締結しました。",
            "両社はグローバルM&Aおよび投資プロジェクトにおいて緊密に協力していきます。"
        ],
        // English
        date_en: "Dec 15, 2025",
        title_en: "Strategic Partnership with Lian Partners (Japan)",
        content_en: [
            "RychmonstaR has entered into a strategic partnership with Lian Partners, a Japan-based M&A specialist.",
            "The two companies will closely collaborate on global M&A and investment projects."
        ]
    },
    {
        id: "news-4",
        year: 2023,
        month: 1,
        day: 1,
        // Korean
        date_ko: "2023년 01월 01일",
        title_ko: "디지털하츠에 사업매각",
        content_ko: [
            "리치몬스타는 일부 사업 부문을 일본 디지털하츠 그룹에 매각했습니다.",
            "이번 거래를 통해 핵심 역량에 더욱 집중할 수 있는 기반을 마련했습니다."
        ],
        // Japanese
        date_ja: "2023年01月01日",
        title_ja: "デジタルハーツへの事業売却",
        content_ja: [
            "リッチモンスターは一部事業を日本のデジタルハーツグループへ売却しました。",
            "本取引により、コアコンピタンスに一層集中できる体制を整えました。"
        ],
        // English
        date_en: "Jan 1, 2023",
        title_en: "Business Transfer to Digital Hearts",
        content_en: [
            "RychmonstaR has transferred part of its business to Japan's Digital Hearts Group.",
            "This transaction allows the company to focus more on its core competencies."
        ]
    }
];
