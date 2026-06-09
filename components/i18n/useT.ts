"use client";

import { useLocale } from "./useLocale";

const EN = {
  home: "Home",
  about: "About",
  browseAll: "Browse All",
  recentlyListed: "Recently Listed",
  makeOffer: "Make an Offer",
  contactSeller: "Contact Seller",
  soldBanner: "Sold",
  soldArchiveTitle: "Recently Sold",
  brand: "Brand",
  model: "Model",
  age: "Age",
  color: "Color",
  dimensions: "Dimensions",
  weight: "Weight",
  originalSource: "Original Source",
  originalPrice: "Original Price",
  itemSold: "Item sold",
  preferredPayment: "Preferred payment",
  share: "Share",
  copied: "Copied!",
  linkCopied: "Link copied!",
  recentlyViewed: "Recently Viewed",
  conditionNew: "New",
  conditionLikeNew: "Like New",
  conditionGood: "Good",
  conditionFair: "Fair",
  conditionForParts: "For Parts",
  yourOffer: "Your offer",
  send: "Send",
  belowMinimumOffer: "That offer is below the minimum we can accept. Please try a higher amount.",
};

const ZH: typeof EN = {
  home: "首页",
  about: "关于",
  browseAll: "浏览全部",
  recentlyListed: "最新上架",
  makeOffer: "出价",
  contactSeller: "联系卖家",
  soldBanner: "已售出",
  soldArchiveTitle: "近期售出",
  brand: "品牌",
  model: "型号",
  age: "使用年限",
  color: "颜色",
  dimensions: "尺寸",
  weight: "重量",
  originalSource: "购买渠道",
  originalPrice: "原价",
  itemSold: "已售出",
  preferredPayment: "推荐支付方式",
  share: "分享",
  copied: "已复制！",
  linkCopied: "链接已复制！",
  recentlyViewed: "最近浏览",
  conditionNew: "全新",
  conditionLikeNew: "近全新",
  conditionGood: "良好",
  conditionFair: "一般",
  conditionForParts: "零件用",
  yourOffer: "您的出价",
  send: "发送",
  belowMinimumOffer: "出价低于最低接受价，请提高金额。",
};

const DICTS: Record<string, typeof EN> = { en: EN, zh: ZH };

export function useT(): typeof EN {
  const { locale } = useLocale();
  return DICTS[locale] ?? EN;
}
