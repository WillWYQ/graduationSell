import type { SiteConfig } from "@/lib/config/types";

// ⚠️ This file lives in content/ — it is the ONLY TypeScript file sellers ever edit.
// All values must be static, serialisable constants. No Node.js APIs (fs, path, process.env).
// Seller coordinates and contact handles are intentionally public (embedded in the static bundle).

export const siteConfig: SiteConfig = {
  // ── Identity ─────────────────────────────────────────────────────────────
  name: "UsedExchange",
  tagline: "YQ's College Graduation Sell",
  logo: "/logo.svg",

  // ── Deployment ───────────────────────────────────────────────────────────
  deploymentMode: "static",
  baseUrl: "https://graduationsell.willsleep.dev",

  // ── Image Storage ─────────────────────────────────────────────────────────
  imageStorage: {
    provider: "cloudflare-r2",
    // "cloudflare-r2" → upload to Cloudflare R2 (recommended, zero egress cost)
    //                   set CF_R2_* env vars in .env.local
    // "vercel-blob"   → upload to Vercel Blob CDN; set BLOB_READ_WRITE_TOKEN
    // "local"         → copy to public/items/ (local dev and self-hosted builds)
  },

  // ── Seller Location ───────────────────────────────────────────────────────
  // Used for distance-based price tier resolution.
  // Find coords: maps.google.com → right-click → "What's here?"
  // These are embedded in the built site and visible in page source.
  location: {
    lat: 39.4667,
    lng: -87.4139,
    label: "Terre Haute, IN",
  },

  // ── Content Defaults ──────────────────────────────────────────────────────
  currency: "USD",
  recentlyListedCount: 6,
  soldItemRetentionDays: 3,
  soldArchiveDisplayLimit: 200,
  measurementUnit: "metric",

  

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    reveal_behavior: "click",
    platforms: [
      { type: "email", value: "medal_pulses.71@icloud.com" },
      { type: "wechat", qr_image: "/contact/wechat-qr.JPG", label: "WeChat" },
      { type: "facebook", value: "https://www.facebook.com/profile.php?id=100090821215189" },
      { type: "venmo", value: "WillWYQ" },
      { type: "zelle", qr_image: "/contact/zelle.JPG", label: "Zelle" },
      { type: "linkedin", value: "yueqiaowang" },
    ],
  },

  // ── Home Page ─────────────────────────────────────────────────────────────
  hero: {
    cta_label: "Browse Items",
    cta_href: "#categories",
  },

  // ── SEO ───────────────────────────────────────────────────────────────────
  meta: {
    description: "YQ's College Graduation Sell — quality second-hand items from a 3BR home in Terre Haute, IN.",
    twitterHandle: "",
  },

  // ── UI Component Slots ────────────────────────────────────────────────────
  // See DESIGN.md §18 for the full list of options per slot.
  ui: {
    background: "shooting-stars",
    itemGrid: "bento-grid",
    gallery: "apple-cards-carousel",
    itemCard: "card-spotlight",
    priceFilterStrategy: "logarithmic",
  },

  // ── Analytics ─────────────────────────────────────────────────────────────
  analytics: {
    vercel: false,
    speedInsights: false,
  },

  // ── Full-Text Search ──────────────────────────────────────────────────────
  search: {
    enabled: true,
    placeholder: "Search items...",
  },

  // ── Sitemap ───────────────────────────────────────────────────────────────
  sitemap: {
    enabled: true,
  },

  // ── Internationalisation ──────────────────────────────────────────────────
  // To add a language:
  //   1. Add its code to availableLocales (e.g. "zh", "ja", "ko").
  //   2. Add a matching entry under translations with every key translated.
  //   3. Run /translate-items to batch-fill name_zh / description_zh in item.json.
  //
  // The build will fail (check-config) if a locale is listed in availableLocales
  // but its translations entry is missing or has incomplete keys.
  i18n: {
    defaultLocale: "en",
    availableLocales: ["en", "zh"],
    showLocaleSwitcher: true,
    translations: {
      en: {
        // ── Navigation ──────────────────────────────────────────────────────
        home: "Home",
        about: "About",
        browseAll: "Browse All",

        // ── Section headings ────────────────────────────────────────────────
        recentlyListed: "Recently Listed",
        recentlyViewed: "Recently Viewed",
        categoriesHeading: "Browse by Category",

        // ── Contact ─────────────────────────────────────────────────────────
        contactSeller: "Contact Seller",
        itemSold: "Item sold",
        preferredPayment: "Preferred payment",

        // ── Make-offer form ─────────────────────────────────────────────────
        makeOffer: "Make an Offer",
        yourOffer: "Your offer",
        send: "Send",
        belowMinimumOffer:
          "That offer is below the minimum we can accept. Please try a higher amount.",

        // ── Share button ────────────────────────────────────────────────────
        share: "Share",
        copied: "Copied!",
        linkCopied: "Link copied!",

        // ── Item metadata labels ─────────────────────────────────────────────
        brand: "Brand",
        model: "Model",
        age: "Age",
        color: "Color",
        dimensions: "Dimensions",
        weight: "Weight",
        originalSource: "Original Source",
        originalPrice: "Original Price",

        // ── Condition badge labels ───────────────────────────────────────────
        conditionNew: "New",
        conditionLikeNew: "Like New",
        conditionGood: "Good",
        conditionFair: "Fair",
        conditionForParts: "For Parts",

        // ── Status badge labels ──────────────────────────────────────────────
        statusAvailable: "Available",
        statusPending: "Pending",
        statusReserved: "Reserved",
        statusSold: "Sold",
        statusDraft: "Draft",

        // ── Filter / sort bar ────────────────────────────────────────────────
        filterShowSold: "Show sold",
        filterPrice: "Price",
        filterPriceBucketAll: "All prices",
        filterPriceIncludesOutliers: "+ items outside range",
        sortBy: "Sort by",
        sortNewestFirst: "Newest first",
        sortPriceLow: "Price: low → high",
        sortPriceHigh: "Price: high → low",
        sortConditionBest: "Condition: best first",

        // ── Freshness label ──────────────────────────────────────────────────
        listed: "Listed",

        // ── Page titles and banners ──────────────────────────────────────────
        soldBanner: "This item has been sold",
        soldArchiveTitle: "Sold Archive",

        // ── Condition guide panel ────────────────────────────────────────────
        conditionGuideTitle: "Condition Guide",
        conditionNewDesc: "Unopened, unused. Original packaging intact.",
        conditionLikeNewDesc: "Used briefly. No visible wear. May be without original box.",
        conditionGoodDesc: "Normal signs of use. Fully functional. Minor cosmetic marks.",
        conditionFairDesc: "Visible wear or light damage. Works as expected.",
        conditionForPartsDesc: "Not fully functional. Sold as-is for repair or parts.",

        // ── Location / distance price bar ────────────────────────────────────
        detectingLocation: "Detecting location…",
        fromSeller: "from seller",
        locationDetected: "Location detected",
        enterManually: "Enter manually",
        distanceManualLabel: "(manual)",
        distanceUnit: "mi",
        distanceInputLabel: "Distance in miles",
        apply: "Apply",
        pricesAtPickupRate: "Prices shown at pickup rate",
        enterDistance: "Enter distance",
        edit: "Edit",
        clear: "Clear",

        // ── Pricing table ────────────────────────────────────────────────────
        contactForPrice: "Contact seller for pricing details.",
        contactForPricingShort: "Contact seller for pricing",
        pricingLabelHeader: "Label",
        pricingDistanceHeader: "Distance",
        pricingPriceHeader: "Price",
        pickup: "Pickup",
        obo: "OBO",
        hidePricingTiers: "Hide pricing tiers",
        viewAllPricingTiers: "View all pricing tiers",

        // ── Shipping estimator ────────────────────────────────────────────────
        shippingEstimateLabel: "Estimated shipping",
        shippingZipPlaceholder: "ZIP code",
        shippingCalculating: "Calculating shipping…",
        shippingUnavailable: "Shipping estimate unavailable",
        shippingIncludedBySeller: "Free shipping (included by seller)",
        shippingEstimateSuffix: "shipping",

        // ── Mobile nav drawer ────────────────────────────────────────────────
        menuOpen: "Open menu",
        menuClose: "Close menu",

        // ── Newly Listed page ────────────────────────────────────────────────
        newlyListed: "Newly Listed",
        newlyListedSinceLastVisit: "Since Last Visit",
        newlyListedToday: "Today",
        newlyListedThisWeek: "This Week",
        newlyListedFirstVisit: "Welcome! Everything here is new to you.",
        newlyListedNoneInPeriod: "No new items in this period.",
      },

      zh: {
        // ── Navigation ──────────────────────────────────────────────────────
        home: "首页",
        about: "关于",
        browseAll: "浏览全部",

        // ── Section headings ────────────────────────────────────────────────
        recentlyListed: "最新上架",
        recentlyViewed: "最近浏览",
        categoriesHeading: "按分类浏览",

        // ── Contact ─────────────────────────────────────────────────────────
        contactSeller: "联系卖家",
        itemSold: "已售出",
        preferredPayment: "偏好付款方式",

        // ── Make-offer form ─────────────────────────────────────────────────
        makeOffer: "出价",
        yourOffer: "您的出价",
        send: "发送",
        belowMinimumOffer: "出价低于最低可接受价格，请提高金额。",

        // ── Share button ────────────────────────────────────────────────────
        share: "分享",
        copied: "已复制！",
        linkCopied: "链接已复制！",

        // ── Item metadata labels ─────────────────────────────────────────────
        brand: "品牌",
        model: "型号",
        age: "使用年限",
        color: "颜色",
        dimensions: "尺寸",
        weight: "重量",
        originalSource: "购买来源",
        originalPrice: "原价",

        // ── Condition badge labels ───────────────────────────────────────────
        conditionNew: "全新",
        conditionLikeNew: "几乎全新",
        conditionGood: "良好",
        conditionFair: "一般",
        conditionForParts: "仅供拆件",

        // ── Status badge labels ──────────────────────────────────────────────
        statusAvailable: "在售",
        statusPending: "待确认",
        statusReserved: "已保留",
        statusSold: "已售出",
        statusDraft: "草稿",

        // ── Filter / sort bar ────────────────────────────────────────────────
        filterShowSold: "显示已售",
        filterPrice: "价格",
        sortBy: "排序方式",
        sortNewestFirst: "最新上架",
        sortPriceLow: "价格：从低到高",
        sortPriceHigh: "价格：从高到低",
        sortConditionBest: "成色：最好优先",

        // ── Freshness label ──────────────────────────────────────────────────
        listed: "上架",

        // ── Page titles and banners ──────────────────────────────────────────
        soldBanner: "此商品已售出",
        soldArchiveTitle: "已售出记录",

        // ── Condition guide panel ────────────────────────────────────────────
        conditionGuideTitle: "成色说明",
        conditionNewDesc: "未拆封，全新未使用。原包装完整。",
        conditionLikeNewDesc: "使用时间短，无明显磨损，可能没有原装包装。",
        conditionGoodDesc: "正常使用痕迹，功能完好，轻微外观瑕疵。",
        conditionFairDesc: "明显磨损或轻微损伤，功能正常。",
        conditionForPartsDesc: "功能不完整，原样出售，供维修或拆件使用。",

        // ── Location / distance price bar ────────────────────────────────────
        detectingLocation: "正在检测位置…",
        fromSeller: "距卖家",
        locationDetected: "已检测到位置",
        enterManually: "手动输入",
        distanceManualLabel: "（手动）",
        distanceUnit: "英里",
        distanceInputLabel: "距离（英里）",
        apply: "应用",
        pricesAtPickupRate: "显示自取价格",
        enterDistance: "输入距离",
        edit: "编辑",
        clear: "清除",

        // ── Pricing table ────────────────────────────────────────────────────
        contactForPrice: "请联系卖家咨询价格。",
        contactForPricingShort: "请联系卖家咨询价格",
        pricingLabelHeader: "项目",
        pricingDistanceHeader: "距离",
        pricingPriceHeader: "价格",
        pickup: "自取",
        obo: "可议价",
        hidePricingTiers: "隐藏价目表",
        viewAllPricingTiers: "查看所有价目",

        // ── Shipping estimator ────────────────────────────────────────────────
        shippingEstimateLabel: "预估运费",
        shippingZipPlaceholder: "邮政编码",
        shippingCalculating: "正在计算运费…",
        shippingUnavailable: "无法估算运费",
        shippingIncludedBySeller: "免运费（卖家承担）",
        shippingEstimateSuffix: "运费",

        // ── Mobile nav drawer ────────────────────────────────────────────────
        menuOpen: "打开菜单",
        menuClose: "关闭菜单",

        // ── Newly Listed page ────────────────────────────────────────────────
        newlyListed: "最新上架",
        newlyListedSinceLastVisit: "自上次访问以来",
        newlyListedToday: "今天",
        newlyListedThisWeek: "本周",
        newlyListedFirstVisit: "欢迎！这里所有商品对您来说都是新的。",
        newlyListedNoneInPeriod: "该时段没有新商品。",
      },
    },
  },
};
