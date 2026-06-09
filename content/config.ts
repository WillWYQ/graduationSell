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
    itemGrid:   "focus-cards",
    gallery:    "apple-cards-carousel",
    itemCard:   "wobble-card",
  },

  // ── Dark Mode ─────────────────────────────────────────────────────────────
  darkMode: "media",

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
  // Add "zh" to availableLocales to enable the LocaleSwitcher.
  // Run /translate-items to batch-fill name_zh / description_zh in item.json.
  i18n: {
    defaultLocale: "en",
    availableLocales: ["en", "zh"],
    showLocaleSwitcher: true,
    strings: {
      heroTagline:      "YQ 的毕业大甩卖",
      recentlyListed:   "最新上架",
      browseAll:        "浏览全部",
      makeOffer:        "出价",
      contactSeller:    "联系卖家",
      soldBanner:       "已售出",
      soldArchiveTitle: "近期售出",
    },
  },
};
