import type { SourceTypes } from "../types/sourceTypes";

// The ~100 most widely known networks, best known first. Consumers use it to
// put flagship networks forward (landing banner, FAQ rows) instead of the API's
// alphabetical order. Seeded from maigret's popularity rank, then adjusted by
// hand for brand recognition. Reordering is a one-line move: the rank is the
// position, so no numbers to renumber.
export const RANKED_NETWORKS = [
  "facebook",
  "youtube",
  "instagram",
  "whatsapp",
  "x",
  "tiktok",
  "linkedin",
  "reddit",
  "google",
  "apple",
  "microsoft",
  "amazon",
  "telegram",
  "snapchat",
  "pinterest",
  "discord",
  "spotify",
  "twitch",
  "github",
  "paypal",
  "ebay",
  "threads",
  "wikipedia",
  "vk",
  "steam",
  "roblox",
  "tumblr",
  "quora",
  "medium",
  "soundcloud",
  "vimeo",
  "dropbox",
  "adobe",
  "imdb",
  "aliexpress",
  "skype",
  "bluesky",
  "mastodon",
  "weibo",
  "okru",
  "mailru",
  "yandex",
  "dailymotion",
  "flickr",
  "wordpress",
  "blogspot",
  "minecraft",
  "chess",
  "duolingo",
  "strava",
  "airbnb",
  "tinder",
  "tripadvisor",
  "line",
  "viber",
  "bilibili",
  "onlyfans",
  "etsy",
  "shopify",
  "kick",
  "notion",
  "yelp",
  "imgur",
  "giphy",
  "vinted",
  "deezer",
  "patreon",
  "garmin",
  "venmo",
  "cashapp",
  "gofundme",
  "goodreads",
  "trello",
  "ninegag",
  "fiverr",
  "upwork",
  "substack",
  "douban",
  "protonmail",
  "deviantart",
  "behance",
  "letterboxd",
  "lastfm",
  "myanimelist",
  "stackoverflow",
  "artstation",
  "dribbble",
  "kofi",
  "gravatar",
  "gitlab",
  "docker",
  "huggingface",
  "xing",
  "kaggle",
  "leetcode",
  "npm",
  "hackernews",
  "pagesjaunes",
  "copainsdavant",
  "viadeo",
] as const satisfies readonly SourceTypes[];

const RANKS: ReadonlyMap<string, number> = new Map(
  RANKED_NETWORKS.map((key, index) => [key, index + 1]),
);

/** 1 for the best-known network, undefined when the network is not ranked. */
export const getNetworkRank = (key: string): number | undefined =>
  RANKS.get(key);

/**
 * Ranked networks first, in rank order, then the others in their original
 * order. Returns a new array.
 */
export const sortByRank = <T extends string>(keys: readonly T[]): T[] =>
  keys
    .map((key, index) => ({ key, index, rank: RANKS.get(key) ?? Infinity }))
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .map(({ key }) => key);
