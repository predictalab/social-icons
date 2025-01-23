type socialNetworkType = Record<
  string,
  {
    color: string;
    name?: string;
    category:
      | "social"
      | "messaging_app"
      | "video_platform"
      | "adult"
      | "streaming"
      | "gaming"
      | "sport"
      | "ecommerce"
      | "finance"
      | "dating"
      | "other"
      | "programming"
      | "hacking"
      | "bot"
      | "search_engine"
      | "images-search-engine"
      | "paste";
  }
>;

export const socialNetworks: socialNetworkType = {
  facebook: { color: "#4267B2", category: "social" },
  twitter: { color: "#1DA1F2", category: "social" },
  instagram: { color: "#E1306C", category: "social" },
  telegram: { color: "#088CCE", category: "messaging_app" },
  whatsapp: { color: "#24CC63", category: "messaging_app" },
  skype: { color: "#08B1F1", category: "messaging_app" },
  github: { color: "#161414", category: "programming" },
  gravatar: { color: "#1C85B5", category: "social" },
  snapchat: { color: "#d8d511", category: "messaging_app" },
  youtube: { color: "#FF0000", category: "video_platform" },
  reddit: { color: "#FF4500", category: "social" },
  pinterest: { color: "#E60023", category: "social" },
  xbox: { color: "#107C10", category: "gaming" },
  playstation: { color: "#003087", category: "gaming" },
  mastodon: { color: "#595AFF", category: "social" },
  gitlab: { color: "#FCA121", category: "programming" },
  steam: { color: "#1D487A", category: "gaming" },
  kaggle: { color: "#20BEFF", category: "social" },
  trello: { color: "#0079BF", category: "social" },
  docker: { color: "#2496ED", category: "programming" },
  twitch: { color: "#6441A5", category: "streaming" },
  medium: { color: "#000000", category: "social" },
  flickr: { color: "#ff0084", category: "social" },
  google: { color: "#4285F4", category: "social" },
  signal: { color: "#3770E4", category: "messaging_app" },
  imgur: { color: "#2CCF96", category: "social" },
  discord: { color: "#7289DA", category: "messaging_app" },
  paypal: { color: "#003087", category: "finance" },
  quora: { color: "#B92B27", category: "social" },
  periscope: { color: "#3AA1F3", category: "social" },
  giphy: { color: "#F16063", category: "social" },
  disqus: { color: "#2E9FFF", category: "social" },
  patreon: { color: "#F96854", category: "social" },
  spotify: { color: "#1DB954", category: "streaming" },
  askfm: { color: "#FF6600", category: "social" },
  duolingo: { color: "#58CC02", category: "social" },
  airbnb: { color: "#FF5A5F", category: "social" },
  foursquare: { color: "#F94877", category: "social" },
  strava: { color: "#FC4C02", category: "sport" },
  tumblr: { color: "#001935", category: "social" },
  etsy: { color: "#F16521", category: "ecommerce" },
  fitbit: { color: "#00B0B9", category: "sport" },
  garmin: { color: "#007CC3", category: "sport" },
  notion: { color: "#000000", category: "social" },
  runkeeper: { color: "#34B2BD", category: "sport" },
  keybase: { color: "#33A0FF", category: "messaging_app" },
  runtastic: { color: "#F24E4E", category: "sport" },
  substack: { color: "#FF6719", category: "social" },
  yandex: { color: "#FC3F1D", category: "social" },
  picsart: { color: "#C209C1", category: "social" },
  taringa: { color: "#005DAB", category: "social" },
  shotgun: { color: "#433E6A", category: "social" },
  weward: { color: "#FF703F", category: "social" },
  locket: { color: "#F9B309", category: "social" },
  life360: { color: "#8652FF", category: "social" },
  clubhouse: { color: "#FFE450", category: "social" },
  eyecon: { color: "#0943B2", category: "messaging_app" },
  apple: { color: "#666666", category: "social" },
  mocospace: { color: "#C40309", category: "social" },
  teams: { color: "#5A5DB2", category: "messaging_app" },
  onedrive: { color: "#097CD5", category: "social" },
  goodreads: { color: "#824707", category: "social" },
  monopolygo: { color: "#FB2F1A", category: "gaming" },
  scrabblego: { color: "#DEB357", category: "gaming" },
  dehashed: { color: "#000000", category: "other" },
  imvu: { color: "#000000", category: "social" },
  sellix: { color: "#000000", category: "social" },
  vivino: { color: "#AA1329", category: "social" },
  whoxy: { color: "#ED8727", category: "other" },
  dropbox: { color: "#0062FF", category: "social" },
  holehe: { color: "#FF5822", category: "other" },
  foap: { color: "#60BEB9", category: "social" },
  rumble: { color: "#79A847", category: "video_platform" },
  wise: { color: "#1DBBFF", category: "finance" },
  plex: { color: "#ECB118", category: "streaming" },
  uber: { color: "#000000", category: "ecommerce" },
  box: { color: "#0061D5", category: "social" },
  mapstr: { color: "#FFB133", category: "social" },
  truecaller: { color: "#004AFF", category: "messaging_app" },
  giftful: { color: "#00BE83", category: "social" },
  pandora: { color: "#8427FC", category: "streaming" },
  pappers: { color: "#0f46a8", category: "social" },
  partiful: { color: "#000000", category: "social" },
  hudsonrock: { color: "#FDCD4E", name: "Hudson Rock", category: "other" },
  myspace: { color: "#000000", name: "MySpace", category: "social" },
  bereal: { color: "#000000", name: "BeReal", category: "social" },
  rocketreach: {
    color: "#FF3B3F",
    name: "Rocket Reach",
    category: "search_engine",
  },
  bibleapp: { color: "#A4332E", name: "BibleApp", category: "social" },
  whatsmyname: { color: "#000000", name: "WhatsMyName", category: "other" },
  wmn: { color: "#000000", name: "WhatsMyName", category: "other" },
  myfitnesspal: {
    color: "#0C8CC3",
    name: "MyFitnessPal",
    category: "sport",
  },
  protonmail: {
    color: "#8B89CC",
    name: "ProtonMail",
    category: "messaging_app",
  },
  linkedin: { color: "#087BB7", name: "LinkedIn", category: "social" },
  vk: { color: "#4C75A3", name: "VK", category: "social" },
  tiktok: { color: "#000000", name: "TikTok", category: "video_platform" },
  virustotal: { color: "#FF4B2B", name: "Virus Total", category: "social" },
  nikerunningclub: {
    color: "#F05033",
    name: "Nike Running Club",
    category: "sport", //
  },
  aboutme: { color: "#0872b4", name: "About.me", category: "social" },
  chess: { color: "#a2d060", name: "Chess.com", category: "gaming" },
  pagesjaunes: { color: "#FFDE07", name: "Pages Jaunes", category: "social" },
  copainsdavant: {
    color: "#e41129",
    name: "Copains d’avant",
    category: "social",
  },
  hibp: { color: "#000000", name: "HIBP", category: "other" },
  imageshack: { color: "#DDAE3A", name: "ImageShack", category: "social" },
  okru: { color: "#FF7700", name: "OK.ru", category: "social" },
  touchtunes: { color: "#7463D4", name: "TouchTunes", category: "social" },
  x: { color: "#000000", name: "X", category: "social" },
  isharing: { color: "#FF8150", name: "iSharing", category: "social" },
  leboncoin: { color: "#FF7421", name: "LeBonCoin", category: "ecommerce" },
  rakutendrive: { color: "#083099", name: "Rakuten Drive", category: "social" },
  beatstars: { color: "#ED170C", name: "Beat Stars", category: "social" },
  khanacademy: { color: "#18BF96", name: "Khan Academy", category: "social" },
  imapp: { color: "#EB9921", name: "iMapp", category: "social" },
  walkietalkie: {
    color: "#F7C90F",
    name: "Walkie Talkie",
    category: "messaging_app",
  },
  marcopolo: {
    color: "#FF4D00",
    name: "Marco Polo",
    category: "messaging_app",
  },
  truthsocial: { color: "#5051EC", name: "Truth Social", category: "social" },
  tvtime: { color: "#EFBF4E", name: "TV Time", category: "social" },
  qq: { color: "#1F1F1F", name: "QQ", category: "messaging_app" },
  beerbuddy: { color: "#fea233", name: "Beer Buddy", category: "social" },
  mewe: { color: "#b8d500", name: "MeWe", category: "social" },
  rutube: { color: "#333333", category: "video_platform", name: "RuTube" },
  vimeo: { color: "#1AB7EA", category: "video_platform" },
  dailymotion: {
    color: "#0066DC",
    category: "video_platform",
    name: "Dailymotion",
  },
  bitchute: { color: "#ef4138", category: "video_platform" },
  kick: { color: "#52E367", category: "video_platform" },
  odysee: { color: "#ff5512", category: "video_platform" },
  youku: { color: "#fd507f", category: "video_platform", name: "YouKu" },
  younow: { color: "#44C049", category: "video_platform", name: "YouNow" },
  xvideos: { color: "#FF0000", category: "adult", name: "XVideos" },
  pornhub: { color: "#FF9900", category: "adult", name: "PornHub" },
  chaturbate: { color: "#f8992a", category: "adult" },
  onlyfans: { color: "#1DA1F2", category: "adult", name: "OnlyFans" },
  livejasmin: { color: "#cb181c", category: "adult", name: "LiveJasmin" },
  youporn: { color: "#ea5f95", category: "adult", name: "YouPorn" },
  redtube: { color: "#FF0000", category: "adult", name: "RedTube" },
  bluesky: { color: "#00A7E4", category: "social", name: "BlueSky" },
  weibo: { color: "#E6162D", category: "social" },
  qzone: { color: "#FECE00", category: "social", name: "QZone" },
  dread: { color: "#9d5cb4", category: "social" },
  wechat: { color: "#7BB32E", category: "messaging_app" },
  messenger: { color: "#0078FF", category: "messaging_app" },
  line: { color: "#00C300", category: "messaging_app" },
  jabber: { color: "#FF7800", category: "messaging_app" },
  matrix: { color: "#000000", category: "messaging_app" },
  pastebin: { color: "#02458E", category: "other" },
  gist: { color: "#161414", category: "programming" },
  leakbase: { color: "#1b1c15", category: "hacking", name: "LeakBase" },
  raidforums: { color: "#88748f", category: "hacking", name: "RaidForums" },
  hackforums: { color: "#282828", category: "hacking", name: "HackForums" },
  guiadohacker: {
    color: "#2970e5",
    category: "hacking",
    name: "Guia do Hacker",
  },
  breached: { color: "#7a48f6", category: "hacking" },
  breachforums: { color: "#7a48f6", category: "hacking", name: "BreachForums" },
  xss: { color: "#252c33", category: "hacking" },
  nulled: { color: "#81abc9", category: "hacking" },
  friendfinder: { color: "#f37b28", category: "dating", name: "FriendFinder" },
  tinder: { color: "#FF6B6B", category: "dating" },
  meetic: { color: "#ff1b83", category: "dating" },
  happn: { color: "#1d8bb7", category: "dating" },
  okcupid: { color: "#f851b9", category: "dating" },
  bumble: { color: "#fdc834", category: "dating" },
  nintendo_network: {
    color: "#E60012",
    category: "gaming",
    name: "Nintendo Network",
  },
  psn: { color: "#003087", category: "gaming", name: "PSN" },
  tgbot1: { color: "#1d51d1", category: "bot", name: "Homebot-1" },
  clearweb: { color: "#aaa", category: "search_engine", name: "Clear web" },
  darkweb: { color: "#000000", category: "search_engine", name: "Dark web" },
  viadeo: { color: "#ee7657", category: "social" },
  deezer: { color: "#7c2ec1", category: "streaming" },
  applemusic: { color: "#fc465b", category: "streaming", name: "Apple Music" },
  amazonmusic: {
    color: "#54d1de",
    category: "streaming",
    name: "Amazon Music",
  },
  audiomack: { color: "#f38a19", category: "streaming" },
  soundcloud: { color: "#f87d1c", category: "streaming" },
  bandcamp: { color: "#2aa3c5", category: "streaming" },
  shodan: { color: "#dc424e", category: "search_engine" },
  whiteintel: { color: "#4EA1DE", category: "other", name: "White Intel" },
  ipinfo: { color: "#066BA4", category: "other", name: "IP Info" },
  threads: { color: "#0A0A0A", category: "social" },
  typing: { color: "#59A7E7", category: "social" },
  gowish: { color: "#039BBF", category: "social", name: "GoWish" },
  bikemap: { color: "#0B73E8", category: "social", name: "BikeMap" },
  sleeper: { color: "#223353", category: "social" },
  thefork: { color: "#01675B", category: "social", name: "The Fork" },
  polarsteps: { color: "#DE2B52", category: "social" },
  facecheckid: {
    color: "#047FC5",
    category: "images-search-engine",
    name: "FaceCheck ID",
  },
  crackedio: { color: "#036B8E", category: "hacking", name: "Cracked.io" },
  psbdmp: { color: "#262557", category: "paste", name: "PSBDMP" },
};
