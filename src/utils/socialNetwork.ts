import { SourceTypes } from "../types/sourceTypes";

type socialNetworkType = {
  [key in SourceTypes]: { color: string; name?: string };
};

export const socialNetworks: socialNetworkType = {
  facebook: { color: "#4267B2" },
  twitter: { color: "#1DA1F2" },
  instagram: { color: "#E1306C" },
  telegram: { color: "#088CCE" },
  whatsapp: { color: "#24CC63" },
  skype: { color: "#08B1F1" },
  github: { color: "#161414" },
  gravatar: { color: "#1C85B5" },
  snapchat: { color: "#d8d511" },
  youtube: { color: "#FF0000" },
  reddit: { color: "#FF4500" },
  pinterest: { color: "#E60023" },
  xbox: { color: "#107C10" },
  playstation: { color: "#003087" },
  mastodon: { color: "#595AFF" },
  gitlab: { color: "#FCA121" },
  steam: { color: "#000000" },
  kaggle: { color: "#20BEFF" },
  trello: { color: "#0079BF" },
  docker: { color: "#2496ED" },
  twitch: { color: "#6441A5" },
  medium: { color: "#000000" },
  flickr: { color: "#ff0084" },
  google: { color: "#4285F4" },
  signal: { color: "#3770E4" },
  imgur: { color: "#2CCF96" },
  discord: { color: "#7289DA" },
  paypal: { color: "#003087" },
  quora: { color: "#B92B27" },
  periscope: { color: "#3AA1F3" },
  giphy: { color: "#F16063" },
  disqus: { color: "#2E9FFF" },
  patreon: { color: "#F96854" },
  spotify: { color: "#1DB954" },
  askfm: { color: "#FF6600" },
  duolingo: { color: "#58CC02" },
  airbnb: { color: "#FF5A5F" },
  foursquare: { color: "#F94877" },
  strava: { color: "#FC4C02" },
  tumblr: { color: "#001935" },
  etsy: { color: "#F16521" },
  fitbit: { color: "#00B0B9" },
  garmin: { color: "#007CC3" },
  notion: { color: "#000000" },
  runkeeper: { color: "#485CC7" },
  keybase: { color: "#33A0FF" },
  runtastic: { color: "#F24E4E" },
  substack: { color: "#FF6719" },
  yandex: { color: "#FC3F1D" },
  picsart: { color: "#C209C1" },
  taringa: { color: "#005DAB" },
  shotgun: { color: "#ffffff" },
  weward: { color: "#FF703F" },
  locket: { color: "#F9B309" },
  life360: { color: "#8652FF" },
  clubhouse: { color: "#FFE450" },
  eyecon: { color: "#0943B2" },
  apple: { color: "##666666" },
  mocospace: { color: "#C40309" },
  teams: { color: "#5A5DB2" },
  onedrive: { color: "#097CD5" },
  goodreads: { color: "#824707" },
  monopolygo: { color: "#FB2F1A" },
  scrabblego: { color: "#DEB357" },
  dehashed: { color: "#000000" },
  cavalier: { color: "#FDCD4E" },
  imvu: { color: "#ffffff" },
  sellix: { color: "#000000" },
  vivino: { color: "#AA1329" },
  whoxy: { color: "#ED8727" },

  myspace: { color: "#000000", name: "MySpace" },
  bereal: { color: "#000000", name: "BeReal" },
  rocketreach: { color: "#FF3B3F", name: "RocketReach" },
  bibleapp: { color: "#A4332E", name: "BibleApp" },
  whatsmyname: { color: "#000000", name: "WhatsMyName" },
  myfitnesspal: { color: "#00A087", name: "MyFitnessPal" },
  protonmail: { color: "#8B89CC", name: "ProtonMail" },
  linkedin: { color: "#087BB7", name: "LinkedIn" },
  vk: { color: "#4C75A3", name: "VK" },
  tiktok: { color: "#000000", name: "TikTok" },
  virustotal: { color: "#FF4B2B", name: "Virus Total" },
  nikerunningclub: { color: "#F05033", name: "Nike Running Club" },
  aboutme: { color: "#0872b4", name: "About.me" },
  chess: { color: "#a2d060", name: "Chess.com" },
  pagesjaunes: { color: "#FFDE07", name: "Pages Jaunes" },
  copaindavant: { color: "#e41129", name: "Copain d'avant" },
  hibp: { color: "#000000", name: "HIBP" },
  imageshack: { color: "#00A4EF", name: "ImageShack" },
  okru: { color: "#FF7700", name: "OK.ru" },
  touchtunes: { color: "#7463D4", name: "TouchTunes" },
  x: { color: "#000000", name: "X" },
};
