import { Icon } from "@iconify/react";
import LocalIcon from "./LocalIcon";
import { socialNetworks } from "../utils/socialNetwork";
import { SourceTypes } from "../types/sourceTypes";
import { ReactNode } from "react";

type PropsTypes = { source?: string };

/**
 * @param source Req. a string containing the social network label, ex : 'facebook', 'twitter', etc
 */

const SocialIcons = ({ source }: PropsTypes): ReactNode | null => {
  let icon: null | ReactNode = null;

  if (!source) return icon;

  switch (source as SourceTypes) {
    case "facebook":
      icon = <Icon icon="simple-icons:facebook" color={socialNetworks.facebook.color} />;
      break;
    case "twitter":
      icon = <Icon icon="fa6-brands:twitter" color={socialNetworks.twitter.color} />;
      break;
    case "x":
      icon = <Icon icon="simple-icons:x" color={socialNetworks.x.color} />;
      break;
    case "instagram":
      icon = <Icon icon="simple-icons:instagram" color={socialNetworks.instagram.color} />;
      break;
    case "telegram":
      icon = <Icon icon="simple-icons:telegram" color={socialNetworks.telegram.color} />;
      break;
    case "linkedin":
      icon = <Icon icon="simple-icons:linkedin" color={socialNetworks.linkedin.color} />;
      break;
    case "whatsapp":
      icon = <Icon icon="simple-icons:whatsapp" color={socialNetworks.whatsapp.color} />;
      break;
    case "skype":
      icon = <Icon icon="simple-icons:skype" color={socialNetworks.skype.color} />;
      break;
    case "github":
    case "gist":
      icon = <Icon icon="simple-icons:github" color={socialNetworks.github.color} />;
      break;
    case "gravatar":
      icon = <Icon icon="simple-icons:gravatar" color={socialNetworks.gravatar.color} />;
      break;
    case "snapchat":
      icon = <Icon icon="simple-icons:snapchat" color={socialNetworks.snapchat.color} />;
      break;
    case "youtube":
      icon = <Icon icon="simple-icons:youtube" color={socialNetworks.youtube.color} />;
      break;
    case "myspace":
      icon = <Icon icon="simple-icons:myspace" color={socialNetworks.myspace.color} />;
      break;
    case "reddit":
      icon = <Icon icon="simple-icons:reddit" color={socialNetworks.reddit.color} />;
      break;
    case "imgur":
      icon = <Icon icon="simple-icons:imgur" color={socialNetworks.imgur.color} />;
      break;
    case "pinterest":
      icon = <Icon icon="simple-icons:pinterest" color={socialNetworks.pinterest.color} />;
      break;
    case "xbox":
      icon = <Icon icon="simple-icons:xbox" color={socialNetworks.xbox.color} />;
      break;
    case "playstation":
    case "psn":
      icon = <Icon icon="simple-icons:playstation" color={socialNetworks.playstation.color} />;
      break;
    case "mastodon":
      icon = <Icon icon="simple-icons:mastodon" color={socialNetworks.mastodon.color} />;
      break;
    case "vk":
      icon = <Icon icon="simple-icons:vk" color={socialNetworks.vk.color} />;
      break;
    case "gitlab":
      icon = <Icon icon="simple-icons:gitlab" color={socialNetworks.gitlab.color} />;
      break;
    case "steam":
      icon = <Icon icon="simple-icons:steam" color={socialNetworks.steam.color} />;
      break;
    case "kaggle":
      icon = <Icon icon="simple-icons:kaggle" color={socialNetworks.kaggle.color} />;
      break;
    case "trello":
      icon = <Icon icon="simple-icons:trello" color={socialNetworks.trello.color} />;
      break;
    case "docker":
      icon = <Icon icon="simple-icons:docker" color={socialNetworks.docker.color} />;
      break;
    case "twitch":
      icon = <Icon icon="simple-icons:twitch" color={socialNetworks.twitch.color} />;
      break;
    case "medium":
      icon = <Icon icon="simple-icons:medium" color={socialNetworks.medium.color} />;
      break;
    case "flickr":
      icon = <Icon icon="simple-icons:flickr" color={socialNetworks.flickr.color} />;
      break;
    case "google":
      icon = <Icon icon="simple-icons:google" color={socialNetworks.google.color} />;
      break;
    case "signal":
      icon = <Icon icon="simple-icons:signal" color={socialNetworks.signal.color} />;
      break;
    case "tiktok":
      icon = <Icon icon="simple-icons:tiktok" color={socialNetworks.tiktok.color} />;
      break;
    case "discord":
      icon = <Icon icon="simple-icons:discord" color={socialNetworks.discord.color} />;
      break;
    case "paypal":
      icon = <Icon icon="simple-icons:paypal" color={socialNetworks.paypal.color} />;
      break;
    case "quora":
      icon = <Icon icon="simple-icons:quora" color={socialNetworks.quora.color} />;
      break;
    case "periscope":
      icon = <Icon icon="fa-brands:periscope" color={socialNetworks.periscope.color} />;
      break;
    case "giphy":
      icon = <Icon icon="simple-icons:giphy" color={socialNetworks.giphy.color} />;
      break;
    case "disqus":
      icon = <Icon icon="simple-icons:disqus" color={socialNetworks.disqus.color} />;
      break;
    case "patreon":
      icon = <Icon icon="simple-icons:patreon" color={socialNetworks.patreon.color} />;
      break;
    case "virustotal":
      icon = <Icon icon="simple-icons:virustotal" color={socialNetworks.virustotal.color} />;
      break;
    case "spotify":
      icon = <Icon icon="simple-icons:spotify" color={socialNetworks.spotify.color} />;
      break;
    case "askfm":
      icon = <Icon icon="simple-icons:askfm" color={socialNetworks.askfm.color} />;
      break;
    case "duolingo":
      icon = <Icon icon="simple-icons:duolingo" color={socialNetworks.duolingo.color} />;
      break;
    case "airbnb":
      icon = <Icon icon="simple-icons:airbnb" color={socialNetworks.airbnb.color} />;
      break;
    case "foursquare":
      icon = <Icon icon="simple-icons:foursquare" color={socialNetworks.foursquare.color} />;
      break;
    case "strava":
      icon = <Icon icon="simple-icons:strava" color={socialNetworks.strava.color} />;
      break;
    case "aboutme":
      icon = <Icon icon="simple-icons:aboutdotme" color={socialNetworks.aboutme.color} />;
      break;
    case "chess":
      icon = <Icon icon="simple-icons:chessdotcom" color={socialNetworks.chess.color} />;
      break;
    case "hibp":
      icon = <Icon icon="simple-icons:haveibeenpwned" color={socialNetworks.hibp.color} />;
      break;
    case "tumblr":
      icon = <Icon icon="simple-icons:tumblr" color={socialNetworks.tumblr.color} />;
      break;
    case "etsy":
      icon = <Icon icon="simple-icons:etsy" color={socialNetworks.etsy.color} />;
      break;
    case "fitbit":
      icon = <Icon icon="simple-icons:fitbit" color={socialNetworks.fitbit.color} />;
      break;
    case "nikerunningclub":
      icon = <Icon icon="simple-icons:nike" color={socialNetworks.nikerunningclub.color} />;
      break;
    case "notion":
      icon = <Icon icon="simple-icons:notion" color={socialNetworks.notion.color} />;
      break;
    case "keybase":
      icon = <Icon icon="simple-icons:keybase" color={socialNetworks.keybase.color} />;
      break;
    case "runtastic":
      icon = <Icon icon="simple-icons:adidas" color={socialNetworks.runtastic.color} />;
      break;
    case "substack":
      icon = <Icon icon="simple-icons:substack" color={socialNetworks.substack.color} />;
      break;
    case "picsart":
      icon = <Icon icon="simple-icons:picsart" color={socialNetworks.picsart.color} />;
      break;
    case "apple":
      icon = <Icon icon="simple-icons:apple" color={socialNetworks.apple.color} />;
      break;
    case "teams":
      icon = <Icon icon="simple-icons:microsoftteams" color={socialNetworks.teams.color} />;
      break;
    case "onedrive":
      icon = <Icon icon="simple-icons:microsoftonedrive" color={socialNetworks.onedrive.color} />;
      break;
    case "bereal":
      icon = <Icon icon="simple-icons:bereal" color={socialNetworks.bereal.color} />;
      break;
    case "dehashed":
      icon = <Icon icon="mdi:pound" color={socialNetworks.dehashed.color} />;
      break;
    case "rocketreach":
      icon = <Icon icon="mdi:rocket-launch" color={socialNetworks.rocketreach.color} />;
      break;
    case "dropbox":
      icon = <Icon icon="simple-icons:dropbox" color={socialNetworks.dropbox.color} />;
      break;
    case "foap":
      icon = <Icon icon="mdi:camera" color={socialNetworks.foap.color} />;
      break;
    case "rumble":
      icon = <Icon icon="simple-icons:rumble" color={socialNetworks.rumble.color} />;
      break;
    case "wise":
      icon = <Icon icon="simple-icons:wise" color={socialNetworks.wise.color} />;
      break;
    case "plex":
      icon = <Icon icon="simple-icons:plex" color={socialNetworks.plex.color} />;
      break;
    case "uber":
      icon = <Icon icon="simple-icons:uber" color={socialNetworks.uber.color} />;
      break;
    case "rakutendrive":
      icon = <Icon icon="simple-icons:rakuten" color={socialNetworks.rakutendrive.color} />;
      break;
    case "khanacademy":
      icon = <Icon icon="simple-icons:khanacademy" color={socialNetworks.khanacademy.color} />;
      break;
    case "box":
      icon = <Icon icon="simple-icons:box" color={socialNetworks.box.color} />;
      break;
    case "tvtime":
      icon = <Icon icon="simple-icons:tvtime" color={socialNetworks.tvtime.color} />;
      break;
    case "pandora":
      icon = <Icon icon="simple-icons:pandora" color={socialNetworks.pandora.color} />;
      break;
    case "mewe":
      icon = <Icon icon="simple-icons:mewe" color={socialNetworks.mewe.color} />;
      break;
    case "bluesky":
      icon = <Icon icon="simple-icons:bluesky" color={socialNetworks.bluesky.color} />;
      break;
    case "qzone":
      icon = <Icon icon="simple-icons:qzone" color={socialNetworks.qzone.color} />;
      break;
    case "tinder":
      icon = <Icon icon="simple-icons:tinder" color={socialNetworks.tinder.color} />;
      break;
    case "weibo":
      icon = <Icon icon="simple-icons:sinaweibo" color={socialNetworks.weibo.color} />;
      break;
    case "jabber":
      icon = <Icon icon="simple-icons:xmpp" color={socialNetworks.jabber.color} />;
      break;
    case "line":
      icon = <Icon icon="simple-icons:line" color={socialNetworks.line.color} />;
      break;
    case "wechat":
      icon = <Icon icon="simple-icons:wechat" color={socialNetworks.wechat.color} />;
      break;
    case "matrix":
      icon = <Icon icon="simple-icons:matrix" color={socialNetworks.matrix.color} />;
      break;
    case "messenger":
      icon = <Icon icon="simple-icons:messenger" color={socialNetworks.messenger.color} />;
      break;
    case "pastebin":
      icon = <Icon icon="simple-icons:pastebin" color={socialNetworks.pastebin.color} />;
      break;
    case "vimeo":
      icon = <Icon icon="simple-icons:vimeo" color={socialNetworks.vimeo.color} />;
      break;
    case "dailymotion":
      icon = <Icon icon="simple-icons:dailymotion" color={socialNetworks.dailymotion.color} />;
      break;
    case "kick":
      icon = <Icon icon="simple-icons:kick" color={socialNetworks.kick.color} />;
      break;
    case "odysee":
      icon = <Icon icon="simple-icons:odysee" color={socialNetworks.odysee.color} />;
      break;
    case "nintendo_network":
      icon = <Icon icon="simple-icons:nintendo" color={socialNetworks.nintendo_network.color} />;
      break;
    case "roblox":
      icon = <Icon icon="simple-icons:roblox" color={socialNetworks.roblox.color} />;
      break;
    case "tgbot1":
      icon = <Icon icon="mdi:robot" color={socialNetworks.tgbot1.color} />;
      break;
    case "clearweb":
      icon = <Icon icon="mdi:web" color={socialNetworks.clearweb.color} />;
      break;
    case "darkweb":
      icon = <Icon icon="mdi:web" color={socialNetworks.darkweb.color} />;
      break;
    case "viadeo":
      icon = <Icon icon="simple-icons:viadeo" color={socialNetworks.viadeo.color} />;
      break;
    case "deezer":
      icon = <Icon icon="simple-icons:deezer" color={socialNetworks.deezer.color} />;
      break;
    case "applemusic":
      icon = <Icon icon="simple-icons:applemusic" color={socialNetworks.applemusic.color} />;
      break;
    case "amazonmusic":
      icon = <Icon icon="simple-icons:amazonmusic" color={socialNetworks.amazonmusic.color} />;
      break;
    case "audiomack":
      icon = <Icon icon="simple-icons:audiomack" color={socialNetworks.audiomack.color} />;
      break;
    case "soundcloud":
      icon = <Icon icon="simple-icons:soundcloud" color={socialNetworks.soundcloud.color} />;
      break;
    case "bandcamp":
      icon = <Icon icon="simple-icons:bandcamp" color={socialNetworks.bandcamp.color} />;
      break;
    case "okcupid":
      icon = <Icon icon="simple-icons:okcupid" color={socialNetworks.okcupid.color} />;
      break;
    case "bumble":
      icon = <Icon icon="tabler:brand-bumble" color={socialNetworks.bumble.color} />;
      break;
    case "threads":
      icon = <Icon icon="simple-icons:threads" color={socialNetworks.threads.color} />;
      break;
    case "bikemap":
      icon = <Icon icon="mdi:bicycle" color={socialNetworks.bikemap.color} />;
      break;
    case "polarsteps":
      icon = <Icon icon="mdi:compass-outline" color={socialNetworks.polarsteps.color} />;
      break;
    case "telemetry":
      icon = <Icon icon="mdi:send-outline" color={socialNetworks.telemetry.color} />;
      break;
    case "vinted":
      icon = <Icon icon="simple-icons:vinted" color={socialNetworks.vinted.color} />;
      break;
    case "replit":
      icon = <Icon icon="simple-icons:replit" color={socialNetworks.replit.color} />;
      break;
    case "mapmyrun":
      icon = <Icon icon="mdi:run" color={socialNetworks.mapmyrun.color} />;
      break;
    case "komoot":
      icon = <Icon icon="simple-icons:komoot" color={socialNetworks.komoot.color} />;
      break;
    case "microsoft":
      icon = <Icon icon="simple-icons:microsoft" color={socialNetworks.microsoft.color} />;
      break;
    case "cashapp":
      icon = <Icon icon="simple-icons:cashapp" color={socialNetworks.cashapp.color} />;
      break;
    case "revolut":
      icon = <Icon icon="simple-icons:revolut" color={socialNetworks.revolut.color} />;
      break;
    case "mailru":
      icon = <Icon icon="simple-icons:maildotru" color={socialNetworks.mailru.color} />;
      break;
    case "newyorktimes":
      icon = <Icon icon="simple-icons:newyorktimes" color={socialNetworks.newyorktimes.color} />;
      break;
    case "venmo":
      icon = <Icon icon="simple-icons:venmo" color={socialNetworks.venmo.color} />;
      break;
    case "yelp":
      icon = <Icon icon="simple-icons:yelp" color={socialNetworks.yelp.color} />;
      break;
    case "indigo":
      icon = <Icon icon="simple-icons:indigo" color={socialNetworks.indigo.color} />;
      break;
    case "lidl":
      icon = <Icon icon="simple-icons:lidl" color={socialNetworks.lidl.color} />;
      break;
    case "adobe":
      icon = <Icon icon="simple-icons:adobe" color={socialNetworks.adobe.color} />;
      break;
    case "bandlab":
      icon = <Icon icon="simple-icons:bandlab" color={socialNetworks.bandlab.color} />;
      break;
    case "castbox":
      icon = <Icon icon="simple-icons:castbox" color={socialNetworks.castbox.color} />;
      break;
    case "coda":
      icon = <Icon icon="simple-icons:coda" color={socialNetworks.coda.color} />;
      break;
    case "doordash":
      icon = <Icon icon="simple-icons:doordash" color={socialNetworks.doordash.color} />;
      break;
    case "ebay":
      icon = <Icon icon="simple-icons:ebay" color={socialNetworks.ebay.color} />;
      break;
    case "groupme":
      icon = <Icon icon="simple-icons:groupme" color={socialNetworks.groupme.color} />;
      break;
    case "napster":
      icon = <Icon icon="simple-icons:napster" color={socialNetworks.napster.color} />;
      break;
    case "paytm":
      icon = <Icon icon="simple-icons:paytm" color={socialNetworks.paytm.color} />;
      break;
    case "pinetwork":
      icon = <Icon icon="simple-icons:pinetwork" color={socialNetworks.pinetwork.color} />;
      break;
    case "sololearn":
      icon = <Icon icon="simple-icons:sololearn" color={socialNetworks.sololearn.color} />;
      break;
    case "untappd":
      icon = <Icon icon="simple-icons:untappd" color={socialNetworks.untappd.color} />;
      break;
    case "vsco":
      icon = <Icon icon="simple-icons:vsco" color={socialNetworks.vsco.color} />;
      break;
    case "w3schools":
      icon = <Icon icon="simple-icons:w3schools" color={socialNetworks.w3schools.color} />;
      break;
    case "zapier":
      icon = <Icon icon="simple-icons:zapier" color={socialNetworks.zapier.color} />;
      break;
    case "twilio":
      icon = <Icon icon="simple-icons:twilio" color={socialNetworks.twilio.color} />;
      break;
    case "baidu":
      icon = <Icon icon="simple-icons:baidu" color={socialNetworks.baidu.color} />;
      break;

    case "protonmail":
      icon = <Icon icon="simple-icons:protonmail" color={socialNetworks.protonmail.color} />;
      break;
    case "sellix":
      icon = <LocalIcon file="sellix.svg" alt="Sellix" />;
      break;
    case "vivino":
      icon = <Icon icon="simple-icons:vivino" color={socialNetworks.vivino.color} />;
      break;
    case "myfitnesspal":
      icon = <LocalIcon file="myfitnesspal.png" alt="MyFitnessPal" />;
      break;
    case "whatsmyname":
    case "wmn":
      icon = <LocalIcon file="whatsmyname.jpg" alt="WhatsMyName" />;
      break;
    case "yandex":
      icon = <LocalIcon file="yandex.png" alt="Yandex" />;
      break;
    case "imageshack":
      icon = <LocalIcon file="imageshack.png" alt="Imageshack" />;
      break;
    case "taringa":
      icon = <LocalIcon file="taringa.png" alt="Taringa" />;
      break;
    case "shotgun":
      icon = <LocalIcon file="shotgun.png" alt="Shotgun" />;
      break;
    case "weward":
      icon = <LocalIcon file="weward.png" alt="Weward" />;
      break;
    case "life360":
      icon = <LocalIcon file="life360.png" alt="Life360" />;
      break;
    case "okru":
      icon = <LocalIcon file="okru.png" alt="Okru" />;
      break;
    case "clubhouse":
      icon = <Icon icon="simple-icons:clubhouse" color={socialNetworks.clubhouse.color} />;
      break;
    case "eyecon":
      icon = <LocalIcon file="eyecon.svg" alt="Eyecon" />;
      break;
    case "locket":
      icon = <LocalIcon file="locket.png" alt="Locket" />;
      break;
    case "touchtunes":
      icon = <LocalIcon file="touchtunes.png" alt="Touchtunes" />;
      break;
    case "mocospace":
      icon = <LocalIcon file="mocospace.png" alt="Mocospace" />;
      break;
    case "whoxy":
      icon = <LocalIcon file="whoxy.png" alt="Whoxy" />;
      break;
    case "runkeeper":
      icon = <Icon icon="simple-icons:runkeeper" color={socialNetworks.runkeeper.color} />;
      break;
    case "garmin":
      icon = <Icon icon="simple-icons:garmin" color={socialNetworks.garmin.color} />;
      break;
    case "bibleapp":
      icon = <LocalIcon file="bible.png" alt="BibleApp" />;
      break;
    case "goodreads":
      icon = <Icon icon="simple-icons:goodreads" color={socialNetworks.goodreads.color} />;
      break;
    case "monopolygo":
      icon = <LocalIcon file="monopolygo.png" alt="MonopolyGo" />;
      break;
    case "scrabblego":
      icon = <LocalIcon file="scrabblego.png" alt="ScrabbleGo" />;
      break;
    case "hudsonrock":
      icon = <LocalIcon file="hudsonrock.png" alt="Cavalier" />;
      break;
    case "opensanctions":
      icon = <LocalIcon file="opensanctions.png" alt="OpenSanctions" />;
      break;
    case "imvu":
      icon = <LocalIcon file="imvu.png" alt="IMVU" />;
      break;
    case "pagesjaunes":
      icon = <LocalIcon file="pagesjaunes.svg" alt="Pages Jaunes" />;
      break;
    case "copainsdavant":
      icon = <LocalIcon file="copainsdavant.svg" alt="Copains d'avant" />;
      break;
    case "holehe":
      icon = <LocalIcon file="holehe.svg" alt="Holehe" />;
      break;
    case "isharing":
      icon = <LocalIcon file="isharing.svg" alt="iSharing" />;
      break;
    case "leboncoin":
      icon = <LocalIcon file="leboncoin.svg" alt="LeBonCoin" />;
      break;
    case "beatstars":
      icon = <Icon icon="simple-icons:beatstars" color={socialNetworks.beatstars.color} />;
      break;
    case "imapp":
      icon = <LocalIcon file="imapp.svg" alt="iMapp" />;
      break;
    case "mapstr":
      icon = <LocalIcon file="mapstr.png" alt="Mapstr" />;
      break;
    case "walkietalkie":
      icon = <LocalIcon file="walkietalkie.svg" alt="Walkie Talkie" />;
      break;
    case "marcopolo":
      icon = <LocalIcon file="marcopolo.svg" alt="Marco Polo" />;
      break;
    case "truecaller":
      icon = <LocalIcon file="truecaller.png" alt="Truecaller" />;
      break;
    case "truthsocial":
      icon = <LocalIcon file="truthsocial.svg" alt="Truth Social" />;
      break;
    case "qq":
      icon = <Icon icon="simple-icons:tencentqq" color={socialNetworks.qq.color} />;
      break;
    case "beerbuddy":
      icon = <LocalIcon file="beerbuddy.svg" alt="Beer Buddy" />;
      break;
    case "giftful":
      icon = <LocalIcon file="giftful.svg" alt="Giftful" />;
      break;
    case "pappers":
      icon = <LocalIcon file="pappers.svg" alt="Pappers" />;
      break;
    case "partiful":
      icon = <LocalIcon file="partiful.svg" alt="Partiful" />;
      break;
    case "dread":
      icon = <LocalIcon file="dread.svg" alt="Dread" />;
      break;
    case "friendfinder":
      icon = <LocalIcon file="friendfinder.svg" alt="FriendFinder" />;
      break;
    case "bitchute":
      icon = <LocalIcon file="bitchute.svg" alt="Bitchute" />;
      break;
    case "rutube":
      icon = <LocalIcon file="rutube.svg" alt="Rutube" />;
      break;
    case "youku":
      icon = <LocalIcon file="youku.svg" alt="Youku" />;
      break;
    case "younow":
      icon = <LocalIcon file="younow.svg" alt="YouNow" />;
      break;
    case "chaturbate":
      icon = <LocalIcon file="chaturbate.svg" alt="Chaturbate" />;
      break;
    case "onlyfans":
      icon = <Icon icon="simple-icons:onlyfans" color={socialNetworks.onlyfans.color} />;
      break;
    case "pornhub":
      icon = <LocalIcon file="pornhub.svg" alt="Pornhub" />;
      break;
    case "youporn":
      icon = <LocalIcon file="youporn.svg" alt="YouPorn" />;
      break;
    case "livejasmin":
      icon = <LocalIcon file="livejasmin.svg" alt="LiveJasmin" />;
      break;
    case "redtube":
      icon = <LocalIcon file="redtube.svg" alt="RedTube" />;
      break;
    case "xvideos":
      icon = <LocalIcon file="xvideos.svg" alt="XVideos" />;
      break;
    case "breachforums":
    case "breached":
      icon = <LocalIcon file="breachforums.png" alt="BreachForums" />;
      break;
    case "guiadohacker":
      icon = <LocalIcon file="guiadohacker.svg" alt="GuiadoHacker" />;
      break;
    case "hackforums":
      icon = <LocalIcon file="hackforums.png" alt="HackForums" />;
      break;
    case "leakbase":
      icon = <LocalIcon file="leakbase.svg" alt="LeakBase" />;
      break;
    case "nulled":
      icon = <LocalIcon file="nulled.png" alt="Nulled" />;
      break;
    case "raidforums":
      icon = <LocalIcon file="raidforums.png" alt="RaidForums" />;
      break;
    case "xss":
      icon = <LocalIcon file="xss.jpg" alt="XSS" />;
      break;
    case "happn":
      icon = <LocalIcon file="happn.svg" alt="Happn" />;
      break;
    case "meetic":
      icon = <LocalIcon file="meetic.svg" alt="Meetic" />;
      break;
    case "shodan":
      icon = <LocalIcon file="shodan.png" alt="Shodan" />;
      break;
    case "whiteintel":
      icon = <LocalIcon file="whiteintel.svg" alt="WhiteIntel" />;
      break;
    case "ipinfo":
      icon = <LocalIcon file="ipinfo.svg" alt="IPInfo" />;
      break;
    case "typing":
      icon = <LocalIcon file="typing.svg" alt="Typing" />;
      break;
    case "gowish":
      icon = <LocalIcon file="gowish.svg" alt="GoWish" />;
      break;
    case "sleeper":
      icon = <LocalIcon file="sleeper.png" alt="Sleeper" />;
      break;
    case "thefork":
      icon = <LocalIcon file="thefork.svg" alt="TheFork" />;
      break;
    case "facecheckid":
      icon = <LocalIcon file="facecheckid.svg" alt="FaceCheckID" />;
      break;
    case "crackedio":
      icon = <LocalIcon file="crackedio.svg" alt="Cracked.io" />;
      break;
    case "psbdmp":
      icon = <LocalIcon file="psbdmp.png" alt="PSBDMP" />;
      break;
    case "flare":
      icon = <LocalIcon file="flare.svg" alt="Flare" />;
      break;
    case "leaklookup":
      icon = <LocalIcon file="leaklookup.svg" alt="LeakLookup" />;
      break;
    case "whoisxml":
      icon = <LocalIcon file="whoisxml.svg" alt="WhoisXML" />;
      break;
    case "smule":
      icon = <LocalIcon file="smule.png" alt="Smule" />;
      break;
    case "bleacher":
      icon = <LocalIcon file="bleacher.png" alt="Bleacher" />;
      break;
    case "pray":
      icon = <LocalIcon file="pray.png" alt="Pray" />;
      break;
    case "peloton":
      icon = <Icon icon="simple-icons:peloton" color={socialNetworks.peloton.color} />;
      break;
    case "zepeto":
      icon = <LocalIcon file="zepeto.png" alt="Zepeto" />;
      break;
    case "sportstracker":
      icon = <LocalIcon file="sportstracker.png" alt="SportsTracker" />;
      break;
    case "chime":
      icon = <LocalIcon file="chime.png" alt="Chime" />;
      break;
    case "blink":
      icon = <LocalIcon file="blink.svg" alt="Blink" />;
      break;
    case "anghami":
      icon = <LocalIcon file="anghami.svg" alt="Anghami" />;
      break;
    case "att":
      icon = <LocalIcon file="att.svg" alt="AT&T" />;
      break;
    case "bajao":
      icon = <LocalIcon file="bajao.png" alt="Bajao" />;
      break;
    case "callapp":
      icon = <LocalIcon file="callapp.png" alt="CallApp" />;
      break;
    case "catch":
      icon = <LocalIcon file="catch.png" alt="Catch" />;
      break;
    case "costar":
      icon = <LocalIcon file="costar.png" alt="Costar" />;
      break;
    case "cricheroes":
      icon = <LocalIcon file="cricheroes.png" alt="CricHeroes" />;
      break;
    case "cricwick":
      icon = <LocalIcon file="cricwick.png" alt="Cricwick" />;
      break;
    case "dailytelegraph":
      icon = <LocalIcon file="dailytelegraph.png" alt="Daily Telegraph" />;
      break;
    case "distiller":
      icon = <LocalIcon file="distiller.png" alt="Distiller" />;
      break;
    case "easypaisa":
      icon = <LocalIcon file="easypaisa.png" alt="EasyPaisa" />;
      break;
    case "explurger":
      icon = <LocalIcon file="explurger.png" alt="Explurger" />;
      break;
    case "familylocator":
      icon = <LocalIcon file="familylocator.png" alt="Family Locator" />;
      break;
    case "fiton":
      icon = <LocalIcon file="fiton.png" alt="FitOn" />;
      break;
    case "fishangler":
      icon = <LocalIcon file="fishangler.png" alt="FishAngler" />;
      break;
    case "fittr":
      icon = <LocalIcon file="fittr.png" alt="Fittr" />;
      break;
    case "flock":
      icon = <LocalIcon file="flock.png" alt="Flock" />;
      break;
    case "golfnow":
      icon = <LocalIcon file="golfnow.png" alt="GolfNow" />;
      break;
    case "habitshare":
      icon = <LocalIcon file="habbitshare.png" alt="HabitShare" />;
      break;
    case "halfords":
      icon = <LocalIcon file="halfords.svg" alt="Halfords" />;
      break;
    case "jazzcash":
      icon = <LocalIcon file="jazzcash.png" alt="JazzCash" />;
      break;
    case "joinr":
      icon = <LocalIcon file="joinr.png" alt="Joinr" />;
      break;
    case "lapse":
      icon = <LocalIcon file="lapse.png" alt="Lapse" />;
      break;
    case "libravatar":
      icon = <LocalIcon file="libravatar.png" alt="Libravatar" />;
      break;
    case "likewise":
      icon = <LocalIcon file="likewise.png" alt="Likewise" />;
      break;
    case "lineleap":
      icon = <LocalIcon file="lineleap.png" alt="LineLeap" />;
      break;
    case "lovense":
      icon = <LocalIcon file="lovense.png" alt="Lovense" />;
      break;
    case "medal":
      icon = <LocalIcon file="medaltv.png" alt="Medal" />;
      break;
    case "offtop":
      icon = <LocalIcon file="offtop.png" alt="Offtop" />;
      break;
    case "omada":
      icon = <LocalIcon file="omada.png" alt="Omada" />;
      break;
    case "pitaya":
      icon = <LocalIcon file="pitaya.png" alt="Pitaya" />;
      break;
    case "playpark":
      icon = <LocalIcon file="playpark.jpg" alt="PlayPark" />;
      break;
    case "playtomic":
      icon = <LocalIcon file="playtomic.png" alt="Playtomic" />;
      break;
    case "planetfitness":
      icon = <LocalIcon file="planetfitness.png" alt="Planet Fitness" />;
      break;
    case "poe":
      icon = <Icon icon="simple-icons:poe" color={socialNetworks.poe.color} />;
      break;
    case "poshmark":
      icon = <LocalIcon file="poshmark.png" alt="Poshmark" />;
      break;
    case "reclip":
      icon = <LocalIcon file="reclip.png" alt="Reclip" />;
      break;
    case "regroup":
      icon = <LocalIcon file="regroup.png" alt="Regroup" />;
      break;
    case "savorfood":
      icon = <LocalIcon file="savorfood.png" alt="SavorFood" />;
      break;
    case "theshoecompany":
      icon = <LocalIcon file="shoecompany.png" alt="TheShoeCompany" />;
      break;
    case "skiline":
      icon = <LocalIcon file="skiline.png" alt="SkiLine" />;
      break;
    case "sportxjazz":
      icon = <LocalIcon file="sportxjazz.png" alt="SportJazz" />;
      break;
    case "superlocal":
      icon = <LocalIcon file="superlocal.png" alt="SuperLocal" />;
      break;
    case "tapmad":
      icon = <LocalIcon file="tapmad.png" alt="TapMad" />;
      break;
    case "tellonym":
      icon = <LocalIcon file="tellonym.png" alt="Tellonym" />;
      break;
    case "templatemonster":
      icon = <LocalIcon file="templatemonster.jpg" alt="TemplateMonster" />;
      break;
    case "tokeechat":
      icon = <LocalIcon file="tokeechat.webp" alt="TokeeChat" />;
      break;
    case "toneitup":
      icon = <LocalIcon file="toneitup.png" alt="ToneItUp" />;
      break;
    case "viewcaller":
      icon = <LocalIcon file="viewcaller.png" alt="ViewCall" />;
      break;
    case "vibes":
      icon = <LocalIcon file="vibes.webp" alt="Vibes" />;
      break;
    case "wayfair":
      icon = <LocalIcon file="wayfair.webp" alt="Wayfair" />;
      break;
    case "winendine":
      icon = <LocalIcon file="winendine.png" alt="Winendine" />;
      break;
    case "wokii":
      icon = <LocalIcon file="wokii.webp" alt="Wokii" />;
      break;
    case "zenly":
      icon = <LocalIcon file="zenly.webp" alt="Zenly" />;
      break;
    case "elsa":
      icon = <LocalIcon file="elsa.webp" alt="Elsa" />;
      break;
    case "fam":
      icon = <LocalIcon file="famapp.webp" alt="FamApp" />;
      break;
    case "mindbody":
      icon = <LocalIcon file="mindbody.svg" alt="MindBody" />;
      break;
    case "samsunghealth":
      icon = <LocalIcon file="samsunghealth.png" alt="Samsung Health" />;
      break;
    case "wordfeud":
      icon = <LocalIcon file="wordfeud.png" alt="WordFeud" />;
      break;
    case "classpass":
      icon = <LocalIcon file="classpass.png" alt="ClassPass" />;
      break;
    case "fetchamericasreward":
      icon = <LocalIcon file="fetch.webp" alt="Fetch" />;
      break;
    case "aliexpress":
      icon = <Icon icon="simple-icons:aliexpress" color={socialNetworks.aliexpress.color} />;
      break;
    case "telerik":
      icon = <LocalIcon file="telerik.png" alt="Telerik" />;
      break;
    case "typeform":
      icon = <Icon icon="simple-icons:typeform" color={socialNetworks.typeform.color} />;
      break;
    case "fishbrain":
      icon = <LocalIcon file="fishbrain.webp" alt="Fishbrain" />;
      break;
    case "suno":
      icon = <Icon icon="simple-icons:suno" color={socialNetworks.suno.color} />;
      break;
    case "tokee":
      icon = <LocalIcon file="tokee.webp" alt="Tokee" />;
      break;
    case "lusha":
      icon = <LocalIcon file="lusha.png" alt="Lusha" />;
      break;
    case "ransomware":
      icon = <LocalIcon file="ransomware.png" alt="Ransomware" />;
      break;
    case "alltrails":
      icon = <Icon icon="simple-icons:alltrails" color={socialNetworks.alltrails.color} />;
      break;
    case "deviantart":
      icon = <Icon icon="simple-icons:deviantart" color={socialNetworks.deviantart.color} />;
      break;
    case "wattpad":
      icon = <Icon icon="simple-icons:wattpad" color={socialNetworks.wattpad.color} />;
      break;
    case "wikipedia":
      icon = <Icon icon="simple-icons:wikipedia" color={socialNetworks.wikipedia.color} />;
      break;
    case "dealabs":
      icon = <LocalIcon file="dealabs.svg" alt="Dealabs" />;
      break;
    case "arkham":
      icon = <Icon icon="solar:incognito-bold" color={socialNetworks.arkham.color} />;
      break;
    case "finch":
      icon = <Icon icon="fa6-solid:user-clock" color={socialNetworks.finch.color} />;
      break;
    case "mixcloud":
      icon = <Icon icon="simple-icons:mixcloud" color={socialNetworks.mixcloud.color} />;
      break;
    case "lichess":
      icon = <Icon icon="simple-icons:lichess" color={socialNetworks.lichess.color} />;
      break;
    case "gitea":
      icon = <Icon icon="simple-icons:gitea" color={socialNetworks.gitea.color} />;
      break;
    case "stackexchange":
      icon = <Icon icon="simple-icons:stackexchange" color={socialNetworks.stackexchange.color} />;
      break;
    case "mediawiki":
      icon = <Icon icon="file-icons:mediawiki" color={socialNetworks.mediawiki.color} />;
      break;
    case "hackernews":
      icon = <Icon icon="simple-icons:ycombinator" color={socialNetworks.hackernews.color} />;
      break;
    case "codeforces":
      icon = <Icon icon="simple-icons:codeforces" color={socialNetworks.codeforces.color} />;
      break;
    case "codewars":
      icon = <Icon icon="simple-icons:codewars" color={socialNetworks.codewars.color} />;
      break;
    case "gab":
      icon = <LocalIcon file="gab.png" alt="Gab" />;
      break;
    case "gettr":
      icon = <LocalIcon file="gettr.png" alt="Gettr" />;
      break;
    case "gdbrowser":
      icon = <LocalIcon file="gdbrowser.png" alt="GDBrowser" />;
      break;
    case "npm":
      icon = <Icon icon="simple-icons:npm" color={socialNetworks.npm.color} />;
      break;
    case "discogs":
      icon = <Icon icon="simple-icons:discogs" color={socialNetworks.discogs.color} />;
      break;
    case "huggingface":
      icon = <Icon icon="simple-icons:huggingface" color={socialNetworks.huggingface.color} />;
      break;
    case "scratch":
      icon = <Icon icon="simple-icons:scratch" color={socialNetworks.scratch.color} />;
      break;
    case "minecraft":
      icon = <Icon icon="simple-icons:minecraft" color={socialNetworks.minecraft.color} />;
      break;
    case "sourceforge":
      icon = <Icon icon="simple-icons:sourceforge" color={socialNetworks.sourceforge.color} />;
      break;
    case "artstation":
      icon = <Icon icon="simple-icons:artstation" color={socialNetworks.artstation.color} />;
      break;
    case "cameo":
      icon = <Icon icon="mdi:video-account" color={socialNetworks.cameo.color} />;
      break;
    case "behance":
      icon = <Icon icon="simple-icons:behance" color={socialNetworks.behance.color} />;
      break;
    case "unsplash":
      icon = <Icon icon="simple-icons:unsplash" color={socialNetworks.unsplash.color} />;
      break;
    case "producthunt":
      icon = <Icon icon="simple-icons:producthunt" color={socialNetworks.producthunt.color} />;
      break;
    case "anilist":
      icon = <Icon icon="simple-icons:anilist" color={socialNetworks.anilist.color} />;
      break;
    case "arena":
      icon = <Icon icon="mdi:asterisk" color={socialNetworks.arena.color} />;
      break;
    case "devto":
      icon = <Icon icon="simple-icons:devdotto" color={socialNetworks.devto.color} />;
      break;
    case "faceit":
      icon = <Icon icon="simple-icons:faceit" color={socialNetworks.faceit.color} />;
      break;
    case "freelancer":
      icon = <Icon icon="simple-icons:freelancer" color={socialNetworks.freelancer.color} />;
      break;
    case "habbo":
      icon = <Icon icon="mdi:hotel" color={socialNetworks.habbo.color} />;
      break;
    case "inaturalist":
      icon = <Icon icon="academicons:inaturalist" color={socialNetworks.inaturalist.color} />;
      break;
    case "kongregate":
      icon = <Icon icon="simple-icons:kongregate" color={socialNetworks.kongregate.color} />;
      break;
    case "mslearn":
      icon = <Icon icon="mdi:school" color={socialNetworks.mslearn.color} />;
      break;
    case "pronounspage":
      icon = <Icon icon="simple-icons:pronounsdotpage" color={socialNetworks.pronounspage.color} />;
      break;
    case "speedrun":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.speedrun.color} />;
      break;
    case "wakatime":
      icon = <Icon icon="simple-icons:wakatime" color={socialNetworks.wakatime.color} />;
      break;
    case "muckrack":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.muckrack.color} />;
      break;
    case "discourse":
      icon = <Icon icon="simple-icons:discourse" color={socialNetworks.discourse.color} />;
      break;
    case "ssh-keys":
    case "sshkeys":
      icon = <Icon icon="mdi:key-variant" color={socialNetworks["ssh-keys"].color} />;
      break;
    case "500px":
      icon = <Icon icon="simple-icons:500px" color={socialNetworks["500px"].color} />;
      break;
    case "dribbble":
      icon = <Icon icon="simple-icons:dribbble" color={socialNetworks.dribbble.color} />;
      break;
    case "lastfm":
      icon = <Icon icon="simple-icons:lastdotfm" color={socialNetworks.lastfm.color} />;
      break;
    case "myanimelist":
      icon = <Icon icon="simple-icons:myanimelist" color={socialNetworks.myanimelist.color} />;
      break;
    case "letterboxd":
      icon = <Icon icon="simple-icons:letterboxd" color={socialNetworks.letterboxd.color} />;
      break;
    case "codepen":
      icon = <Icon icon="simple-icons:codepen" color={socialNetworks.codepen.color} />;
      break;
    case "newgrounds":
      icon = <Icon icon="simple-icons:newgrounds" color={socialNetworks.newgrounds.color} />;
      break;
    case "kofi":
      icon = <Icon icon="simple-icons:kofi" color={socialNetworks.kofi.color} />;
      break;
    case "leaks":
      icon = <LocalIcon file="leaks.svg" alt="Leaks" />;
      break;
    case "archiveorg":
      icon = <Icon icon="simple-icons:internetarchive" color={socialNetworks.archiveorg.color} />;
      break;
    case "atcoder":
      icon = <Icon icon="mdi:code-braces" color={socialNetworks.atcoder.color} />;
      break;
    case "bitbucket":
      icon = <Icon icon="simple-icons:bitbucket" color={socialNetworks.bitbucket.color} />;
      break;
    case "blogspot":
      icon = <Icon icon="simple-icons:blogger" color={socialNetworks.blogspot.color} />;
      break;
    case "cfxre":
      icon = <Icon icon="simple-icons:fivem" color={socialNetworks.cfxre.color} />;
      break;
    case "codeberg":
      icon = <Icon icon="simple-icons:codeberg" color={socialNetworks.codeberg.color} />;
      break;
    case "crates":
      icon = <LocalIcon file="crates.png" alt="crates.io" />;
      break;
    case "dockerhub":
      icon = <Icon icon="simple-icons:docker" color={socialNetworks.dockerhub.color} />;
      break;
    case "fandom":
      icon = <Icon icon="simple-icons:fandom" color={socialNetworks.fandom.color} />;
      break;
    case "fansly":
      icon = <LocalIcon file="fansly.svg" alt="Fansly" />;
      break;
    case "gitee":
      icon = <Icon icon="simple-icons:gitee" color={socialNetworks.gitee.color} />;
      break;
    case "hackerrank":
      icon = <Icon icon="simple-icons:hackerrank" color={socialNetworks.hackerrank.color} />;
      break;
    case "microsoftlearn":
      icon = <Icon icon="mdi:school" color={socialNetworks.microsoftlearn.color} />;
      break;
    case "minds":
      icon = <Icon icon="simple-icons:minds" color={socialNetworks.minds.color} />;
      break;
    case "note":
      icon = <Icon icon="mdi:notebook-outline" color={socialNetworks.note.color} />;
      break;
    case "opencollective":
      icon = <Icon icon="simple-icons:opencollective" color={socialNetworks.opencollective.color} />;
      break;
    case "patriotswin":
      icon = <Icon icon="mdi:flag-variant" color={socialNetworks.patriotswin.color} />;
      break;
    case "pixelfed":
      icon = <Icon icon="simple-icons:pixelfed" color={socialNetworks.pixelfed.color} />;
      break;
    case "pokemonshowdown":
      icon = <LocalIcon file="pokemonshowdown.png" alt="Pokémon Showdown" />;
      break;
    case "r6":
      icon = <Icon icon="simple-icons:ubisoft" color={socialNetworks.r6.color} />;
      break;
    case "redgifs":
      icon = <LocalIcon file="redgifs.svg" alt="RedGIFs" />;
      break;
    case "revolutme":
      icon = <Icon icon="simple-icons:revolut" color={socialNetworks.revolutme.color} />;
      break;
    case "steemit":
      icon = <Icon icon="simple-icons:steemit" color={socialNetworks.steemit.color} />;
      break;
    case "wordpressorg":
    case "wordpress":
      icon = <Icon icon="simple-icons:wordpress" color={socialNetworks.wordpress.color} />;
      break;
    case "zenn":
      icon = <Icon icon="simple-icons:zenn" color={socialNetworks.zenn.color} />;
      break;
    case "arduinoprojecthub":
      icon = <Icon icon="simple-icons:arduino" color={socialNetworks.arduinoprojecthub.color} />;
      break;
    case "calendly":
      icon = <Icon icon="simple-icons:calendly" color={socialNetworks.calendly.color} />;
      break;
    case "codecademy":
      icon = <Icon icon="simple-icons:codecademy" color={socialNetworks.codecademy.color} />;
      break;
    case "crevado":
      icon = <LocalIcon file="crevado.png" alt="Crevado" />;
      break;
    case "datingru":
      icon = <LocalIcon file="datingru.png" alt="Dating.ru" />;
      break;
    case "dibiz":
      icon = <LocalIcon file="dibiz.png" alt="Dibiz" />;
      break;
    case "digitalocean":
      icon = <Icon icon="simple-icons:digitalocean" color={socialNetworks.digitalocean.color} />;
      break;
    case "figma":
      icon = <Icon icon="simple-icons:figma" color={socialNetworks.figma.color} />;
      break;
    case "gumroad":
      icon = <Icon icon="simple-icons:gumroad" color={socialNetworks.gumroad.color} />;
      break;
    case "habrcareer":
      icon = <Icon icon="simple-icons:habr" color={socialNetworks.habrcareer.color} />;
      break;
    case "hackerearth":
      icon = <Icon icon="simple-icons:hackerearth" color={socialNetworks.hackerearth.color} />;
      break;
    case "ifunny":
      icon = <LocalIcon file="ifunny.svg" alt="iFunny" />;
      break;
    case "osu":
      icon = <Icon icon="simple-icons:osu" color={socialNetworks.osu.color} />;
      break;
    case "streamlabs":
      icon = <Icon icon="simple-icons:streamlabs" color={socialNetworks.streamlabs.color} />;
      break;
    case "tapas":
      icon = <Icon icon="simple-icons:tapas" color={socialNetworks.tapas.color} />;
      break;
    case "vero":
      icon = <LocalIcon file="vero.png" alt="Vero" />;
      break;
    case "vscodemarketplace":
      icon = <Icon icon="logos:visual-studio-code" color={socialNetworks.vscodemarketplace.color} />;
      break;
    case "asciinema":
      icon = <Icon icon="simple-icons:asciinema" color={socialNetworks.asciinema.color} />;
      break;
    case "carbonmade":
      icon = <LocalIcon file="carbonmade.png" alt="Carbonmade" />;
      break;
    case "carrd":
      icon = <Icon icon="simple-icons:carrd" color={socialNetworks.carrd.color} />;
      break;
    case "crowdin":
      icon = <Icon icon="simple-icons:crowdin" color={socialNetworks.crowdin.color} />;
      break;
    case "fabswingers":
      icon = <LocalIcon file="fabswingers.png" alt="FabSwingers" />;
      break;
    case "fiverr":
      icon = <Icon icon="simple-icons:fiverr" color={socialNetworks.fiverr.color} />;
      break;
    case "flipboard":
      icon = <Icon icon="simple-icons:flipboard" color={socialNetworks.flipboard.color} />;
      break;
    case "freesound":
      icon = <LocalIcon file="freesound.svg" alt="Freesound" />;
      break;
    case "geocaching":
      icon = <Icon icon="simple-icons:geocaching" color={socialNetworks.geocaching.color} />;
      break;
    case "goodgame":
      icon = <LocalIcon file="goodgame.png" alt="GoodGame" />;
      break;
    case "ifttt":
      icon = <Icon icon="simple-icons:ifttt" color={socialNetworks.ifttt.color} />;
      break;
    case "imgsrc":
      icon = <LocalIcon file="imgsrc.png" alt="ImgSrc.ru" />;
      break;
    case "interpals":
      icon = <LocalIcon file="interpals.png" alt="InterPals" />;
      break;
    case "issuu":
      icon = <Icon icon="simple-icons:issuu" color={socialNetworks.issuu.color} />;
      break;
    case "kik":
      icon = <Icon icon="simple-icons:kik" color={socialNetworks.kik.color} />;
      break;
    case "metacritic":
      icon = <Icon icon="simple-icons:metacritic" color={socialNetworks.metacritic.color} />;
      break;
    case "naverblog":
      icon = <Icon icon="simple-icons:naver" color={socialNetworks.naverblog.color} />;
      break;
    case "pillowfort":
      icon = <LocalIcon file="pillowfort.png" alt="Pillowfort" />;
      break;
    case "slides":
      icon = <Icon icon="simple-icons:slides" color={socialNetworks.slides.color} />;
      break;
    case "tradingview":
      icon = <Icon icon="simple-icons:tradingview" color={socialNetworks.tradingview.color} />;
      break;
    case "youpic":
      icon = <LocalIcon file="youpic.png" alt="YouPic" />;
      break;
    case "35photo":
    case "thirtyfivephoto":
      icon = <LocalIcon file="35photo.png" alt="35PHOTO" />;
      break;
    case "ameblo":
      icon = <Icon icon="simple-icons:ameba" color={socialNetworks.ameblo.color} />;
      break;
    case "ao3":
      icon = <Icon icon="simple-icons:archiveofourown" color={socialNetworks.ao3.color} />;
      break;
    case "audiojungle":
      icon = <Icon icon="simple-icons:envato" color={socialNetworks.audiojungle.color} />;
      break;
    case "championat":
      icon = <LocalIcon file="championat.png" alt="Championat" />;
      break;
    case "coderwall":
      icon = <Icon icon="simple-icons:coderwall" color={socialNetworks.coderwall.color} />;
      break;
    case "designspiration":
      icon = <LocalIcon file="designspiration.png" alt="Designspiration" />;
      break;
    case "hackadayio":
      icon = <Icon icon="simple-icons:hackaday" color={socialNetworks.hackadayio.color} />;
      break;
    case "hackster":
      icon = <Icon icon="simple-icons:hackster" color={socialNetworks.hackster.color} />;
      break;
    case "hubpages":
      icon = <LocalIcon file="hubpages.png" alt="HubPages" />;
      break;
    case "instructables":
      icon = <Icon icon="simple-icons:instructables" color={socialNetworks.instructables.color} />;
      break;
    case "intensedebate":
      icon = <LocalIcon file="intensedebate.svg" alt="IntenseDebate" />;
      break;
    case "pentesterlab":
      icon = <LocalIcon file="pentesterlab.png" alt="PentesterLab" />;
      break;
    case "pikabu":
      icon = <LocalIcon file="pikabu.png" alt="Pikabu" />;
      break;
    case "plurk":
      icon = <Icon icon="simple-icons:plurk" color={socialNetworks.plurk.color} />;
      break;
    case "shopify":
      icon = <Icon icon="simple-icons:shopify" color={socialNetworks.shopify.color} />;
      break;
    case "smugmug":
      icon = <Icon icon="simple-icons:smugmug" color={socialNetworks.smugmug.color} />;
      break;
    case "speakerdeck":
      icon = <Icon icon="simple-icons:speakerdeck" color={socialNetworks.speakerdeck.color} />;
      break;
    case "subscribestar":
      icon = <LocalIcon file="subscribestar.png" alt="SubscribeStar" />;
      break;
    case "themeforest":
      icon = <Icon icon="simple-icons:envato" color={socialNetworks.themeforest.color} />;
      break;
    case "wikidot":
      icon = <LocalIcon file="wikidot.png" alt="Wikidot" />;
      break;
    case "wishlistr":
      icon = <LocalIcon file="wishlistr.png" alt="Wishlistr" />;
      break;
    case "xhamster":
      icon = <LocalIcon file="xhamster.png" alt="xHamster" />;
      break;
    case "akniga":
      icon = <LocalIcon file="akniga.png" alt="Akniga" />;
      break;
    case "biosite":
      icon = <LocalIcon file="biosite.png" alt="Bio.site" />;
      break;
    case "buymeacoffee":
      icon = <Icon icon="simple-icons:buymeacoffee" color={socialNetworks.buymeacoffee.color} />;
      break;
    case "codechef":
      icon = <Icon icon="simple-icons:codechef" color={socialNetworks.codechef.color} />;
      break;
    case "devrant":
      icon = <Icon icon="simple-icons:devrant" color={socialNetworks.devrant.color} />;
      break;
    case "geeksforgeeks":
      icon = <Icon icon="simple-icons:geeksforgeeks" color={socialNetworks.geeksforgeeks.color} />;
      break;
    case "habr":
      icon = <Icon icon="simple-icons:habr" color={socialNetworks.habr.color} />;
      break;
    case "inkbunny":
      icon = <LocalIcon file="inkbunny.png" alt="Inkbunny" />;
      break;
    case "justforfans":
      icon = <LocalIcon file="justforfans.png" alt="JustFor.Fans" />;
      break;
    case "mix":
      icon = <Icon icon="simple-icons:mix" color={socialNetworks.mix.color} />;
      break;
    case "openstreetmap":
      icon = <Icon icon="simple-icons:openstreetmap" color={socialNetworks.openstreetmap.color} />;
      break;
    case "rsi":
      icon = <LocalIcon file="rsi.png" alt="Roberts Space Industries" />;
      break;
    case "setlistfm":
      icon = <LocalIcon file="setlistfm.png" alt="setlist.fm" />;
      break;
    case "sofurry":
      icon = <LocalIcon file="sofurry.png" alt="SoFurry" />;
      break;
    case "tenor":
      icon = <LocalIcon file="tenor.png" alt="Tenor" />;
      break;
    case "warriorforum":
      icon = <LocalIcon file="warriorforum.png" alt="Warrior Forum" />;
      break;
    case "weasyl":
      icon = <Icon icon="simple-icons:weasyl" color={socialNetworks.weasyl.color} />;
      break;
    case "wykop":
      icon = <Icon icon="simple-icons:wykop" color={socialNetworks.wykop.color} />;
      break;
    case "hackerone":
      icon = <Icon icon="simple-icons:hackerone" color={socialNetworks.hackerone.color} />;
      break;
    case "kwai":
      icon = <LocalIcon file="kwai.png" alt="Kwai" />;
      break;
    case "sevencups":
    case "7cups":
      icon = <LocalIcon file="7cups.png" alt="7 Cups" />;
      break;
    case "academia":
      icon = <Icon icon="simple-icons:academia" color={socialNetworks.academia.color} />;
      break;
    case "animeplanet":
      icon = <LocalIcon file="animeplanet.png" alt="Anime-Planet" />;
      break;
    case "au":
      icon = <LocalIcon file="au.png" alt="Au.ru" />;
      break;
    case "beacons":
      icon = <LocalIcon file="beacons.png" alt="Beacons" />;
      break;
    case "bookcrossing":
      icon = <LocalIcon file="bookcrossing.png" alt="BookCrossing" />;
      break;
    case "buzzfeed":
      icon = <Icon icon="simple-icons:buzzfeed" color={socialNetworks.buzzfeed.color} />;
      break;
    case "clapper":
      icon = <LocalIcon file="clapper.png" alt="Clapper" />;
      break;
    case "cloudflarecommunity":
      icon = <Icon icon="simple-icons:cloudflare" color={socialNetworks.cloudflarecommunity.color} />;
      break;
    case "codtracker":
      icon = <LocalIcon file="codtracker.png" alt="COD Tracker" />;
      break;
    case "colourlovers":
      icon = <LocalIcon file="colourlovers.png" alt="COLOURlovers" />;
      break;
    case "comicvine":
      icon = <LocalIcon file="comicvine.png" alt="Comic Vine" />;
      break;
    case "creativemarket":
      icon = <LocalIcon file="creativemarket.png" alt="Creative Market" />;
      break;
    case "curseforge":
      icon = <Icon icon="simple-icons:curseforge" color={socialNetworks.curseforge.color} />;
      break;
    case "depop":
      icon = <LocalIcon file="depop.png" alt="Depop" />;
      break;
    case "diigo":
      icon = <LocalIcon file="diigo.png" alt="Diigo" />;
      break;
    case "directme":
      icon = <LocalIcon file="directme.png" alt="Direct.me" />;
      break;
    case "eksisozluk":
      icon = <LocalIcon file="eksisozluk.png" alt="Ekşi Sözlük" />;
      break;
    case "exophase":
      icon = <LocalIcon file="exophase.png" alt="Exophase" />;
      break;
    case "furaffinity":
      icon = <Icon icon="simple-icons:furaffinity" color={socialNetworks.furaffinity.color} />;
      break;
    case "gamefaqs":
      icon = <LocalIcon file="gamefaqs.png" alt="GameFAQs" />;
      break;
    case "inkitt":
      icon = <LocalIcon file="inkitt.jpg" alt="Inkitt" />;
      break;
    case "itchio":
      icon = <Icon icon="simple-icons:itchdotio" color={socialNetworks.itchio.color} />;
      break;
    case "jvc":
      icon = <LocalIcon file="jvc.png" alt="Jeuxvideo.com" />;
      break;
    case "kaskus":
      icon = <LocalIcon file="kaskus.png" alt="Kaskus" />;
      break;
    case "kickstarter":
      icon = <Icon icon="simple-icons:kickstarter" color={socialNetworks.kickstarter.color} />;
      break;
    case "librarything":
      icon = <Icon icon="simple-icons:librarything" color={socialNetworks.librarything.color} />;
      break;
    case "linuxorgru":
      icon = <Icon icon="simple-icons:linux" color={socialNetworks.linuxorgru.color} />;
      break;
    case "livelib":
      icon = <LocalIcon file="livelib.svg" alt="LiveLib" />;
      break;
    case "moddb":
      icon = <LocalIcon file="moddb.png" alt="ModDB" />;
      break;
    case "musescore":
      icon = <LocalIcon file="musescore.png" alt="MuseScore" />;
      break;
    case "musicboard":
      icon = <LocalIcon file="musicboard.png" alt="Musicboard" />;
      break;
    case "nexusmods":
      icon = <LocalIcon file="nexusmods.png" alt="Nexus Mods" />;
      break;
    case "paypalme":
      icon = <Icon icon="simple-icons:paypal" color={socialNetworks.paypalme.color} />;
      break;
    case "quizlet":
      icon = <Icon icon="simple-icons:quizlet" color={socialNetworks.quizlet.color} />;
      break;
    case "redbubble":
      icon = <Icon icon="simple-icons:redbubble" color={socialNetworks.redbubble.color} />;
      break;
    case "stackshare":
      icon = <Icon icon="simple-icons:stackshare" color={socialNetworks.stackshare.color} />;
      break;
    case "stripchat":
      icon = <LocalIcon file="stripchat.png" alt="Stripchat" />;
      break;
    case "superlink":
      icon = <LocalIcon file="superlink.png" alt="Superlink" />;
      break;
    case "tvtropes":
      icon = <LocalIcon file="tvtropes.png" alt="TV Tropes" />;
      break;
    case "ultimateguitar":
      icon = <LocalIcon file="ultimateguitar.png" alt="Ultimate Guitar" />;
      break;
    case "zillow":
      icon = <Icon icon="simple-icons:zillow" color={socialNetworks.zillow.color} />;
      break;

    case "alternativeto":
      icon = <Icon icon="simple-icons:alternativeto" color={socialNetworks.alternativeto.color} />;
      break;
    case "backstage":
      icon = <Icon icon="simple-icons:backstage-casting" color={socialNetworks.backstage.color} />;
      break;
    case "biolink":
      icon = <Icon icon="simple-icons:biolink" color={socialNetworks.biolink.color} />;
      break;
    case "boardgamegeek":
      icon = <Icon icon="simple-icons:boardgamegeek" color={socialNetworks.boardgamegeek.color} />;
      break;
    case "cyberdefenders":
      icon = <Icon icon="simple-icons:cyberdefenders" color={socialNetworks.cyberdefenders.color} />;
      break;
    case "douban":
      icon = <Icon icon="simple-icons:douban" color={socialNetworks.douban.color} />;
      break;
    case "exercism":
      icon = <Icon icon="simple-icons:exercism" color={socialNetworks.exercism.color} />;
      break;
    case "genius":
      icon = <Icon icon="simple-icons:genius" color={socialNetworks.genius.color} />;
      break;
    case "gitbook":
      icon = <Icon icon="simple-icons:gitbook" color={socialNetworks.gitbook.color} />;
      break;
    case "gofundme":
      icon = <Icon icon="simple-icons:gofundme" color={socialNetworks.gofundme.color} />;
      break;
    case "gog":
      icon = <Icon icon="simple-icons:gogdotcom" color={socialNetworks.gog.color} />;
      break;
    case "hackmd":
      icon = <Icon icon="simple-icons:hackmd" color={socialNetworks.hackmd.color} />;
      break;
    case "hashnode":
      icon = <Icon icon="simple-icons:hashnode" color={socialNetworks.hashnode.color} />;
      break;
    case "hatena":
      icon = <Icon icon="simple-icons:hatenabookmark" color={socialNetworks.hatena.color} />;
      break;
    case "hiveblog":
      icon = <Icon icon="simple-icons:hive-blockchain" color={socialNetworks.hiveblog.color} />;
      break;
    case "intigriti":
      icon = <Icon icon="simple-icons:intigriti" color={socialNetworks.intigriti.color} />;
      break;
    case "linktree":
      icon = <Icon icon="simple-icons:linktree" color={socialNetworks.linktree.color} />;
      break;
    case "microblog":
      icon = <Icon icon="simple-icons:microdotblog" color={socialNetworks.microblog.color} />;
      break;
    case "ninegag":
      icon = <Icon icon="simple-icons:9gag" color={socialNetworks.ninegag.color} />;
      break;
    case "nuget":
      icon = <Icon icon="simple-icons:nuget" color={socialNetworks.nuget.color} />;
      break;
    case "observable":
      icon = <Icon icon="simple-icons:observable" color={socialNetworks.observable.color} />;
      break;
    case "opensea":
      icon = <Icon icon="simple-icons:opensea" color={socialNetworks.opensea.color} />;
      break;
    case "packagist":
      icon = <Icon icon="simple-icons:packagist" color={socialNetworks.packagist.color} />;
      break;
    case "payhip":
      icon = <Icon icon="simple-icons:payhip" color={socialNetworks.payhip.color} />;
      break;
    case "picarto":
      icon = <Icon icon="simple-icons:picartodottv" color={socialNetworks.picarto.color} />;
      break;
    case "platzi":
      icon = <Icon icon="simple-icons:platzi" color={socialNetworks.platzi.color} />;
      break;
    case "rarible":
      icon = <Icon icon="simple-icons:rarible" color={socialNetworks.rarible.color} />;
      break;
    case "reverbnation":
      icon = <Icon icon="simple-icons:reverbnation" color={socialNetworks.reverbnation.color} />;
      break;
    case "rive":
      icon = <Icon icon="simple-icons:rive" color={socialNetworks.rive.color} />;
      break;
    case "rubygems":
      icon = <Icon icon="simple-icons:rubygems" color={socialNetworks.rubygems.color} />;
      break;
    case "scribd":
      icon = <Icon icon="simple-icons:scribd" color={socialNetworks.scribd.color} />;
      break;
    case "sessionize":
      icon = <Icon icon="simple-icons:sessionize" color={socialNetworks.sessionize.color} />;
      break;
    case "sketchfab":
      icon = <Icon icon="simple-icons:sketchfab" color={socialNetworks.sketchfab.color} />;
      break;
    case "slashdot":
      icon = <Icon icon="simple-icons:slashdot" color={socialNetworks.slashdot.color} />;
      break;
    case "slideshare":
      icon = <Icon icon="simple-icons:slideshare" color={socialNetworks.slideshare.color} />;
      break;
    case "sourcehut":
      icon = <Icon icon="simple-icons:sourcehut" color={socialNetworks.sourcehut.color} />;
      break;
    case "stackblitz":
      icon = <Icon icon="simple-icons:stackblitz" color={socialNetworks.stackblitz.color} />;
      break;
    case "threadless":
      icon = <Icon icon="simple-icons:threadless" color={socialNetworks.threadless.color} />;
      break;
    case "tistory":
      icon = <Icon icon="simple-icons:tistory" color={socialNetworks.tistory.color} />;
      break;
    case "tmdb":
      icon = <Icon icon="simple-icons:themoviedatabase" color={socialNetworks.tmdb.color} />;
      break;
    case "tripadvisor":
      icon = <Icon icon="simple-icons:tripadvisor" color={socialNetworks.tripadvisor.color} />;
      break;
    case "tryhackme":
      icon = <Icon icon="simple-icons:tryhackme" color={socialNetworks.tryhackme.color} />;
      break;
    case "wellfound":
      icon = <Icon icon="simple-icons:wellfound" color={socialNetworks.wellfound.color} />;
      break;
    case "writeas":
      icon = <Icon icon="simple-icons:writedotas" color={socialNetworks.writeas.color} />;
      break;

    case "allmylinks":
      icon = <LocalIcon file="allmylinks.png" alt="AllMyLinks" />;
      break;
    case "allthingsworn":
      icon = <LocalIcon file="allthingsworn.png" alt="All Things Worn" />;
      break;
    case "apsense":
      icon = <LocalIcon file="apsense.png" alt="APSense" />;
      break;
    case "aryion":
      icon = <LocalIcon file="aryion.png" alt="Aryion" />;
      break;
    case "authortoday":
      icon = <LocalIcon file="authortoday.png" alt="Author.Today" />;
      break;
    case "backloggd":
      icon = <LocalIcon file="backloggd.png" alt="Backloggd" />;
      break;
    case "backstagecam":
      icon = <Icon icon="mdi:webcam" color={socialNetworks.backstagecam.color} />;
      break;
    case "cam4":
      icon = <LocalIcon file="cam4.png" alt="CAM4" />;
      break;
    case "cara":
      icon = <LocalIcon file="cara.png" alt="Cara" />;
      break;
    case "ccmixter":
      icon = <LocalIcon file="ccmixter.png" alt="ccMixter" />;
      break;
    case "cgtrader":
      icon = <Icon icon="mdi:cube-outline" color={socialNetworks.cgtrader.color} />;
      break;
    case "chatujme":
      icon = <LocalIcon file="chatujme.png" alt="Chatujme.cz" />;
      break;
    case "chollometro":
      icon = <LocalIcon file="chollometro.png" alt="Chollometro" />;
      break;
    case "civitai":
      icon = <LocalIcon file="civitai.png" alt="Civitai" />;
      break;
    case "codecanyon":
      icon = <LocalIcon file="codecanyon.png" alt="CodeCanyon" />;
      break;
    case "coindrop":
      icon = <LocalIcon file="coindrop.png" alt="Coindrop" />;
      break;
    case "comeup":
      icon = <LocalIcon file="comeup.png" alt="ComeUp" />;
      break;
    case "contactinbio":
      icon = <LocalIcon file="contactinbio.png" alt="ContactInBio" />;
      break;
    case "creatorspring":
      icon = <LocalIcon file="creatorspring.png" alt="Spring" />;
      break;
    case "cryptohack":
      icon = <LocalIcon file="cryptohack.png" alt="CryptoHack" />;
      break;
    case "cssbattle":
      icon = <LocalIcon file="cssbattle.png" alt="CSSBattle" />;
      break;
    case "cults3d":
      icon = <LocalIcon file="cults3d.png" alt="Cults" />;
      break;
    case "dailykos":
      icon = <LocalIcon file="dailykos.png" alt="Daily Kos" />;
      break;
    case "danbooru":
      icon = <LocalIcon file="danbooru.png" alt="Danbooru" />;
      break;
    case "debank":
      icon = <LocalIcon file="debank.png" alt="DeBank" />;
      break;
    case "derpibooru":
      icon = <LocalIcon file="derpibooru.png" alt="Derpibooru" />;
      break;
    case "domestika":
      icon = <LocalIcon file="domestika.png" alt="Domestika" />;
      break;
    case "dou":
      icon = <LocalIcon file="dou.png" alt="DOU" />;
      break;
    case "dzen":
      icon = <LocalIcon file="dzen.png" alt="Dzen" />;
      break;
    case "e621":
      icon = <LocalIcon file="e621.png" alt="e621" />;
      break;
    case "ebaumsworld":
      icon = <LocalIcon file="ebaumsworld.png" alt="eBaum's World" />;
      break;
    case "eintracht":
      icon = <LocalIcon file="eintracht.png" alt="Eintracht Frankfurt" />;
      break;
    case "empowher":
      icon = <LocalIcon file="empowher.png" alt="EmpowHER" />;
      break;
    case "erome":
      icon = <LocalIcon file="erome.png" alt="EroMe" />;
      break;
    case "eroprofile":
      icon = <Icon icon="mdi:emoticon" color={socialNetworks.eroprofile.color} />;
      break;
    case "fanbase":
      icon = <LocalIcon file="fanbase.png" alt="Fanbase" />;
      break;
    case "fanlink":
      icon = <LocalIcon file="fanlink.png" alt="FanLink" />;
      break;
    case "fanvue":
      icon = <LocalIcon file="fanvue.png" alt="Fanvue" />;
      break;
    case "ficwad":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.ficwad.color} />;
      break;
    case "fixya":
      icon = <LocalIcon file="fixya.png" alt="Fixya" />;
      break;
    case "flightradar24":
      icon = <LocalIcon file="flightradar24.png" alt="Flightradar24" />;
      break;
    case "flist":
      icon = <Icon icon="mdi:paw" color={socialNetworks.flist.color} />;
      break;
    case "fragment":
      icon = <LocalIcon file="fragment.svg" alt="Fragment" />;
      break;
    case "fredmiranda":
      icon = <LocalIcon file="fredmiranda.png" alt="Fred Miranda" />;
      break;
    case "freelanceua":
      icon = <LocalIcon file="freelanceua.png" alt="Freelance.ua" />;
      break;
    case "freeones":
      icon = <LocalIcon file="freeones.png" alt="FreeOnes" />;
      break;
    case "gaiaonline":
      icon = <LocalIcon file="gaiaonline.png" alt="Gaia Online" />;
      break;
    case "geneanet":
      icon = <LocalIcon file="geneanet.png" alt="Geneanet" />;
      break;
    case "getallmylinks":
      icon = <LocalIcon file="getallmylinks.png" alt="GetAllMyLinks" />;
      break;
    case "giantbomb":
      icon = <LocalIcon file="giantbomb.png" alt="Giant Bomb" />;
      break;
    case "hackage":
      icon = <LocalIcon file="hackage.png" alt="Hackage" />;
      break;
    case "heavyr":
      icon = <LocalIcon file="heavyr.png" alt="Heavy-R" />;
      break;
    case "hotukdeals":
      icon = <LocalIcon file="hotukdeals.png" alt="hotukdeals" />;
      break;
    case "imgflip":
      icon = <LocalIcon file="imgflip.png" alt="Imgflip" />;
      break;
    case "itemfix":
      icon = <LocalIcon file="itemfix.png" alt="ItemFix" />;
      break;
    case "jalbum":
      icon = <LocalIcon file="jalbum.png" alt="jAlbum" />;
      break;
    case "jetpunk":
      icon = <LocalIcon file="jetpunk.png" alt="JetPunk" />;
      break;
    case "justpasteit":
      icon = <LocalIcon file="justpasteit.png" alt="JustPaste.it" />;
      break;
    case "koalendar":
      icon = <LocalIcon file="koalendar.png" alt="Koalendar" />;
      break;
    case "lens":
      icon = <LocalIcon file="lens.png" alt="Lens" />;
      break;
    case "limetorrents":
      icon = <Icon icon="mdi:fruit-citrus" color={socialNetworks.limetorrents.color} />;
      break;
    case "linkme":
      icon = <LocalIcon file="linkme.png" alt="Link.me" />;
      break;
    case "linuxfr":
      icon = <Icon icon="mdi:penguin" color={socialNetworks.linuxfr.color} />;
      break;
    case "listal":
      icon = <LocalIcon file="listal.png" alt="Listal" />;
      break;
    case "listed":
      icon = <LocalIcon file="listed.png" alt="Listed" />;
      break;
    case "listography":
      icon = <Icon icon="mdi:format-list-bulleted" color={socialNetworks.listography.color} />;
      break;
    case "lnkbio":
      icon = <LocalIcon file="lnkbio.png" alt="Lnk.Bio" />;
      break;
    case "lushstories":
      icon = <LocalIcon file="lushstories.png" alt="Lush Stories" />;
      break;
    case "lyricstranslate":
      icon = <LocalIcon file="lyricstranslate.png" alt="LyricsTranslate" />;
      break;
    case "magiceden":
      icon = <LocalIcon file="magiceden.png" alt="Magic Eden" />;
      break;
    case "manifoldgallery":
      icon = <LocalIcon file="manifoldgallery.svg" alt="Manifold Gallery" />;
      break;
    case "manylink":
      icon = <LocalIcon file="manylink.png" alt="Many.link" />;
      break;
    case "memrise":
      icon = <LocalIcon file="memrise.png" alt="Memrise" />;
      break;
    case "meneame":
      icon = <LocalIcon file="meneame.png" alt="Menéame" />;
      break;
    case "mercari":
      icon = <LocalIcon file="mercari.png" alt="Mercari" />;
      break;
    case "metalarchives":
      icon = <Icon icon="mdi:guitar-electric" color={socialNetworks.metalarchives.color} />;
      break;
    case "milkshake":
      icon = <LocalIcon file="milkshake.png" alt="Milkshake" />;
      break;
    case "mydealz":
      icon = <LocalIcon file="mydealz.png" alt="mydealz" />;
      break;
    case "mydramalist":
      icon = <LocalIcon file="mydramalist.png" alt="MyDramaList" />;
      break;
    case "myfans":
      icon = <LocalIcon file="myfans.png" alt="Myfans" />;
      break;
    case "myminifactory":
      icon = <LocalIcon file="myminifactory.png" alt="MyMiniFactory" />;
      break;
    case "mynickname":
      icon = <LocalIcon file="mynickname.png" alt="MyNickname" />;
      break;
    case "nationstates":
      icon = <LocalIcon file="nationstates.png" alt="NationStates" />;
      break;
    case "ngl":
      icon = <LocalIcon file="ngl.png" alt="NGL" />;
      break;
    case "nineninenine":
      icon = <LocalIcon file="nineninenine.png" alt="999.md" />;
      break;
    case "nintendolife":
      icon = <LocalIcon file="nintendolife.png" alt="Nintendo Life" />;
      break;
    case "nitrotype":
      icon = <LocalIcon file="nitrotype.png" alt="Nitro Type" />;
      break;
    case "opengameart":
      icon = <LocalIcon file="opengameart.png" alt="OpenGameArt" />;
      break;
    case "oshwlab":
      icon = <LocalIcon file="oshwlab.png" alt="OSHWLab" />;
      break;
    case "paragraph":
      icon = <LocalIcon file="paragraph.png" alt="Paragraph" />;
      break;
    case "passes":
      icon = <LocalIcon file="passes.png" alt="Passes" />;
      break;
    case "pbase":
      icon = <Icon icon="mdi:camera" color={socialNetworks.pbase.color} />;
      break;
    case "picturepush":
      icon = <Icon icon="mdi:image-multiple" color={socialNetworks.picturepush.color} />;
      break;
    case "pifyi":
      icon = <LocalIcon file="pifyi.png" alt="PI.FYI" />;
      break;
    case "pinkbike":
      icon = <LocalIcon file="pinkbike.png" alt="Pinkbike" />;
      break;
    case "podchaser":
      icon = <LocalIcon file="podchaser.png" alt="Podchaser" />;
      break;
    case "polymarket":
      icon = <LocalIcon file="polymarket.png" alt="Polymarket" />;
      break;
    case "preisjaeger":
      icon = <LocalIcon file="preisjaeger.png" alt="Preisjäger" />;
      break;
    case "promodescuentos":
      icon = <LocalIcon file="promodescuentos.png" alt="Promodescuentos" />;
      break;
    case "promptbase":
      icon = <LocalIcon file="promptbase.png" alt="PromptBase" />;
      break;
    case "proza":
      icon = <LocalIcon file="proza.png" alt="Proza.ru" />;
      break;
    case "pwonline":
      icon = <LocalIcon file="pwonline.png" alt="PW Online" />;
      break;
    case "qbn":
      icon = <LocalIcon file="qbn.png" alt="QBN" />;
      break;
    case "quotev":
      icon = <LocalIcon file="quotev.png" alt="Quotev" />;
      break;
    case "ramblerdating":
      icon = <LocalIcon file="ramblerdating.png" alt="Rambler Dating" />;
      break;
    case "rankia":
      icon = <LocalIcon file="rankia.png" alt="Rankia" />;
      break;
    case "realmeye":
      icon = <Icon icon="mdi:eye" color={socialNetworks.realmeye.color} />;
      break;
    case "runescape":
      icon = <LocalIcon file="runescape.png" alt="RuneScape" />;
      break;
    case "sharechat":
      icon = <LocalIcon file="sharechat.png" alt="ShareChat" />;
      break;
    case "shoppy":
      icon = <LocalIcon file="shoppy.png" alt="Shoppy" />;
      break;
    case "shorby":
      icon = <LocalIcon file="shorby.png" alt="Shorby" />;
      break;
    case "slushy":
      icon = <LocalIcon file="slushy.png" alt="Slushy" />;
      break;
    case "snackvideo":
      icon = <LocalIcon file="snackvideo.png" alt="SnackVideo" />;
      break;
    case "soloto":
      icon = <LocalIcon file="soloto.png" alt="Solo.to" />;
      break;
    case "soylentnews":
      icon = <LocalIcon file="soylentnews.png" alt="SoylentNews" />;
      break;
    case "spankbang":
      icon = <LocalIcon file="spankbang.png" alt="SpankBang" />;
      break;
    case "spells8":
      icon = <LocalIcon file="spells8.png" alt="Spells8" />;
      break;
    case "spoutible":
      icon = <LocalIcon file="spoutible.png" alt="Spoutible" />;
      break;
    case "statink":
      icon = <LocalIcon file="statink.png" alt="stat.ink" />;
      break;
    case "statuscafe":
      icon = <Icon icon="mdi:coffee" color={socialNetworks.statuscafe.color} />;
      break;
    case "stihi":
      icon = <LocalIcon file="stihi.png" alt="Stihi.ru" />;
      break;
    case "suicidegirls":
      icon = <LocalIcon file="suicidegirls.png" alt="SuicideGirls" />;
      break;
    case "superprofile":
      icon = <LocalIcon file="superprofile.png" alt="SuperProfile" />;
      break;
    case "superrare":
      icon = <LocalIcon file="superrare.png" alt="SuperRare" />;
      break;
    case "taittsuu":
      icon = <LocalIcon file="taittsuu.png" alt="Taittsuu" />;
      break;
    case "tango":
      icon = <LocalIcon file="tango.png" alt="Tango" />;
      break;
    case "teamliquid":
      icon = <LocalIcon file="teamliquid.png" alt="Team Liquid" />;
      break;
    case "teia":
      icon = <LocalIcon file="teia.png" alt="Teia" />;
      break;
    case "terrariaforum":
      icon = <LocalIcon file="terrariaforum.png" alt="Terraria Forums" />;
      break;
    case "thebigboss":
      icon = <Icon icon="mdi:earth" color={socialNetworks.thebigboss.color} />;
      break;
    case "throne":
      icon = <LocalIcon file="throne.png" alt="Throne" />;
      break;
    case "tiendanube":
      icon = <LocalIcon file="tiendanube.png" alt="Tiendanube" />;
      break;
    case "tipeee":
      icon = <LocalIcon file="tipeee.png" alt="Tipeee" />;
      break;
    case "tnaflix":
      icon = <LocalIcon file="tnaflix.png" alt="TNAFlix" />;
      break;
    case "tokopedia":
      icon = <LocalIcon file="tokopedia.png" alt="Tokopedia" />;
      break;
    case "topmate":
      icon = <LocalIcon file="topmate.svg" alt="Topmate" />;
      break;
    case "traktrain":
      icon = <LocalIcon file="traktrain.png" alt="TrakTrain" />;
      break;
    case "tripline":
      icon = <LocalIcon file="tripline.png" alt="Tripline" />;
      break;
    case "trovo":
      icon = <LocalIcon file="trovo.png" alt="Trovo" />;
      break;
    case "truelancer":
      icon = <LocalIcon file="truelancer.png" alt="Truelancer" />;
      break;
    case "turpravda":
      icon = <LocalIcon file="turpravda.png" alt="TurPravda" />;
      break;
    case "typeracer":
      icon = <LocalIcon file="typeracer.png" alt="TypeRacer" />;
      break;
    case "unstoppabledomains":
      icon = <LocalIcon file="unstoppabledomains.png" alt="Unstoppable Domains" />;
      break;
    case "vgen":
      icon = <LocalIcon file="vgen.png" alt="VGen" />;
      break;
    case "vlr":
      icon = <LocalIcon file="vlr.png" alt="VLR.gg" />;
      break;
    case "voicemod":
      icon = <LocalIcon file="voicemod.png" alt="Voicemod" />;
      break;
    case "wanderlog":
      icon = <LocalIcon file="wanderlog.png" alt="Wanderlog" />;
      break;
    case "whatnot":
      icon = <LocalIcon file="whatnot.png" alt="Whatnot" />;
      break;
    case "zora":
      icon = <LocalIcon file="zora.png" alt="Zora" />;
      break;
    case "numtrace":
      icon = <LocalIcon file="numtrace.png" alt="NumTrace" />;
      break;
    case "jazzbalance":
      icon = <LocalIcon file="jazzbalance.png" alt="Jazz Balance" />;
      break;
    case "melissa":
      icon = <Icon icon="mdi:alpha-m-box" color={socialNetworks.melissa.color} />;
      break;
    case "favicon":
      icon = <Icon icon="mdi:image-search-outline" color={socialNetworks.favicon.color} />;
      break;

    case "anaconda":
      icon = <Icon icon="simple-icons:anaconda" color={socialNetworks.anaconda.color} />;
      break;
    case "aparat":
      icon = <Icon icon="simple-icons:aparat" color={socialNetworks.aparat.color} />;
      break;
    case "audius":
      icon = <LocalIcon file="audius.png" alt="Audius" />;
      break;
    case "bilibili":
      icon = <Icon icon="simple-icons:bilibili" color={socialNetworks.bilibili.color} />;
      break;
    case "blenderartists":
      icon = <Icon icon="simple-icons:blender" color={socialNetworks.blenderartists.color} />;
      break;
    case "campsitebio":
      icon = <LocalIcon file="campsitebio.png" alt="Campsite.bio" />;
      break;
    case "chingari":
      icon = <LocalIcon file="chingari.png" alt="Chingari" />;
      break;
    case "codestudio":
      icon = <Icon icon="simple-icons:codingninjas" color={socialNetworks.codestudio.color} />;
      break;
    case "codolio":
      icon = <LocalIcon file="codolio.png" alt="Codolio" />;
      break;
    case "credly":
      icon = <Icon icon="simple-icons:credly" color={socialNetworks.credly.color} />;
      break;
    case "discordgg":
      icon = <Icon icon="simple-icons:discord" color={socialNetworks.discordgg.color} />;
      break;
    case "elixirforum":
      icon = <LocalIcon file="elixirforum.png" alt="Elixir Forum" />;
      break;
    case "fanbox":
      icon = <LocalIcon file="fanbox.png" alt="pixivFANBOX" />;
      break;
    case "freecodecamp":
      icon = <Icon icon="simple-icons:freecodecamp" color={socialNetworks.freecodecamp.color} />;
      break;
    case "grailed":
      icon = <LocalIcon file="grailed.png" alt="Grailed" />;
      break;
    case "hexbear":
      icon = <LocalIcon file="hexbear.png" alt="Hexbear" />;
      break;
    case "hexpm":
      icon = <LocalIcon file="hexpm.png" alt="Hex.pm" />;
      break;
    case "kitsu":
      icon = <Icon icon="simple-icons:kitsu" color={socialNetworks.kitsu.color} />;
      break;
    case "laylo":
      icon = <LocalIcon file="laylo.png" alt="Laylo" />;
      break;
    case "leetcode":
      icon = <Icon icon="simple-icons:leetcode" color={socialNetworks.leetcode.color} />;
      break;
    case "lemmy":
      icon = <Icon icon="simple-icons:lemmy" color={socialNetworks.lemmy.color} />;
      break;
    case "linkinbio":
      icon = <LocalIcon file="linkinbio.png" alt="Linkin.bio" />;
      break;
    case "manifold":
      icon = <LocalIcon file="manifold.png" alt="Manifold" />;
      break;
    case "modrinth":
      icon = <Icon icon="simple-icons:modrinth" color={socialNetworks.modrinth.color} />;
      break;
    case "monkeytype":
      icon = <Icon icon="simple-icons:monkeytype" color={socialNetworks.monkeytype.color} />;
      break;
    case "obsidian":
      icon = <Icon icon="simple-icons:obsidian" color={socialNetworks.obsidian.color} />;
      break;
    case "playstrategy":
      icon = <LocalIcon file="playstrategy.png" alt="PlayStrategy" />;
      break;
    case "pr0gramm":
      icon = <LocalIcon file="pr0gramm.png" alt="pr0gramm" />;
      break;
    case "programmingdev":
      icon = <LocalIcon file="programmingdev.png" alt="Programming.dev" />;
      break;
    case "pychess":
      icon = <LocalIcon file="pychess.png" alt="PyChess" />;
      break;
    case "qiita":
      icon = <Icon icon="simple-icons:qiita" color={socialNetworks.qiita.color} />;
      break;
    case "quay":
      icon = <LocalIcon file="quay.png" alt="Quay.io" />;
      break;
    case "serverfault":
      icon = <Icon icon="simple-icons:serverfault" color={socialNetworks.serverfault.color} />;
      break;
    case "soop":
      icon = <LocalIcon file="soop.png" alt="SOOP" />;
      break;
    case "speedrunslive":
      icon = <LocalIcon file="speedrunslive.png" alt="SpeedRunsLive" />;
      break;
    case "spline":
      icon = <LocalIcon file="spline.png" alt="Spline" />;
      break;
    case "sublimetextforum":
      icon = <Icon icon="simple-icons:sublimetext" color={socialNetworks.sublimetextforum.color} />;
      break;
    case "superuser":
      icon = <Icon icon="simple-icons:superuser" color={socialNetworks.superuser.color} />;
      break;
    case "swapd":
      icon = <LocalIcon file="swapd.png" alt="SWAPD" />;
      break;
    case "tetrio":
      icon = <LocalIcon file="tetrio.png" alt="TETR.IO" />;
      break;
    case "thepiratebay":
      icon = <LocalIcon file="thepiratebay.png" alt="The Pirate Bay" />;
      break;
    case "topcoder":
      icon = <Icon icon="simple-icons:topcoder" color={socialNetworks.topcoder.color} />;
      break;
    case "velog":
      icon = <Icon icon="simple-icons:velog" color={socialNetworks.velog.color} />;
      break;
    case "viber":
      icon = <Icon icon="simple-icons:viber" color={socialNetworks.viber.color} />;
      break;
    case "warframemarket":
      icon = <LocalIcon file="warframemarket.png" alt="Warframe Market" />;
      break;
    case "warpcast":
      icon = <Icon icon="simple-icons:farcaster" color={socialNetworks.warpcast.color} />;
      break;
    case "yandexmusic":
      icon = <LocalIcon file="yandexmusic.png" alt="Yandex Music" />;
      break;
    case "imdb":
      icon = <Icon icon="simple-icons:imdb" color={socialNetworks.imdb.color} />;
      break;

    case "deliveroo":
      icon = <Icon icon="simple-icons:deliveroo" color={socialNetworks.deliveroo.color} />;
      break;

    case "wix":
      icon = <Icon icon="simple-icons:wix" color={socialNetworks.wix.color} />;
      break;

    case "changeorg":
      icon = <LocalIcon file="changeorg.png" alt="Change.org" />;
      break;

    case "cnet":
      icon = <Icon icon="simple-icons:cnet" color={socialNetworks.cnet.color} />;
      break;

    case "csdn":
      icon = <Icon icon="simple-icons:csdn" color={socialNetworks.csdn.color} />;
      break;

    case "freepik":
      icon = <Icon icon="simple-icons:freepik" color={socialNetworks.freepik.color} />;
      break;

    case "googleplaystore":
      icon = <Icon icon="logos:google-play-icon" color={socialNetworks.googleplaystore.color} />;
      break;

    case "googlescholar":
      icon = <Icon icon="simple-icons:googlescholar" color={socialNetworks.googlescholar.color} />;
      break;

    case "launchpad":
      icon = <Icon icon="simple-icons:launchpad" color={socialNetworks.launchpad.color} />;
      break;

    case "livejournal":
      icon = <Icon icon="simple-icons:livejournal" color={socialNetworks.livejournal.color} />;
      break;

    case "opgg":
      icon = <LocalIcon file="opgg.png" alt="OP.GG" />;
      break;

    case "quizizz":
      icon = <LocalIcon file="quizizz.png" alt="Quizizz" />;
      break;

    case "theguardian":
      icon = <Icon icon="simple-icons:theguardian" color={socialNetworks.theguardian.color} />;
      break;

    case "theverge":
      icon = <LocalIcon file="theverge.png" alt="The Verge" />;
      break;

    case "weebly":
      icon = <LocalIcon file="weebly.png" alt="Weebly" />;
      break;

    case "weforum":
      icon = <LocalIcon file="weforum.png" alt="World Economic Forum" />;
      break;

    case "xing":
      icon = <Icon icon="simple-icons:xing" color={socialNetworks.xing.color} />;
      break;

    case "gamespot":
      icon = <LocalIcon file="gamespot.png" alt="GameSpot" />;
      break;

    case "hackernoon":
      icon = <Icon icon="simple-icons:hackernoon" color={socialNetworks.hackernoon.color} />;
      break;

    case "ibmvideo":
      icon = <LocalIcon file="ibmvideo.png" alt="IBM Video" />;
      break;

    case "instapaper":
      icon = <Icon icon="simple-icons:instapaper" color={socialNetworks.instapaper.color} />;
      break;

    case "jimdo":
      icon = <LocalIcon file="jimdo.png" alt="Jimdo" />;
      break;

    case "laracasts":
      icon = <LocalIcon file="laracasts.png" alt="Laracasts" />;
      break;

    case "liveinternet":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.liveinternet.color} />;
      break;

    case "lonelyplanet":
      icon = <LocalIcon file="lonelyplanet.png" alt="Lonely Planet" />;
      break;

    case "pcgamer":
      icon = <LocalIcon file="pcgamer.png" alt="PC Gamer" />;
      break;

    case "photobucket":
      icon = <Icon icon="simple-icons:photobucket" color={socialNetworks.photobucket.color} />;
      break;

    case "polygon":
      icon = <LocalIcon file="polygon.png" alt="Polygon" />;
      break;

    case "pypi":
      icon = <Icon icon="simple-icons:pypi" color={socialNetworks.pypi.color} />;
      break;

    case "rottentomatoes":
      icon = <Icon icon="simple-icons:rottentomatoes" color={socialNetworks.rottentomatoes.color} />;
      break;

    case "tilda":
      icon = <Icon icon="simple-icons:tildapublishing" color={socialNetworks.tilda.color} />;
      break;

    case "udemy":
      icon = <Icon icon="simple-icons:udemy" color={socialNetworks.udemy.color} />;
      break;

    case "upwork":
      icon = <Icon icon="simple-icons:upwork" color={socialNetworks.upwork.color} />;
      break;

    case "vcru":
      icon = <LocalIcon file="vcru.png" alt="vc.ru" />;
      break;

    case "wikimapia":
      icon = <LocalIcon file="wikimapia.png" alt="Wikimapia" />;
      break;

    case "windy":
      icon = <LocalIcon file="windy.png" alt="Windy" />;
      break;

    case "yandexbugbounty":
      icon = <LocalIcon file="yandexbugbounty.png" alt="Yandex Bug Bounty" />;
      break;

    case "yandexznatoki":
      icon = <LocalIcon file="yandexznatoki.png" alt="Yandex Znatoki" />;
      break;

    case "yumpu":
      icon = <LocalIcon file="yumpu.png" alt="Yumpu" />;
      break;

    case "airliners":
      icon = <LocalIcon file="airliners.png" alt="Airliners.net" />;
      break;
    case "americanthinker":
      icon = <LocalIcon file="americanthinker.png" alt="American Thinker" />;
      break;
    case "animenewsnetwork":
      icon = <LocalIcon file="animenewsnetwork.png" alt="Anime News Network" />;
      break;
    case "artsy":
      icon = <LocalIcon file="artsy.png" alt="Artsy" />;
      break;
    case "coroflot":
      icon = <LocalIcon file="coroflot.png" alt="Coroflot" />;
      break;
    case "couchsurfing":
      icon = <LocalIcon file="couchsurfing.png" alt="Couchsurfing" />;
      break;
    case "coub":
      icon = <LocalIcon file="coub.png" alt="Coub" />;
      break;
    case "ctan":
      icon = <LocalIcon file="ctan.png" alt="CTAN" />;
      break;
    case "destructoid":
      icon = <LocalIcon file="destructoid.png" alt="Destructoid" />;
      break;
    case "dtf":
      icon = <LocalIcon file="dtf.png" alt="DTF" />;
      break;
    case "fotki":
      icon = <LocalIcon file="fotki.png" alt="Fotki" />;
      break;
    case "globalvoices":
      icon = <LocalIcon file="globalvoices.png" alt="Global Voices" />;
      break;
    case "lesswrong":
      icon = <LocalIcon file="lesswrong.png" alt="LessWrong" />;
      break;
    case "nextcloud":
      icon = <Icon icon="simple-icons:nextcloud" color={socialNetworks.nextcloud.color} />;
      break;
    case "residentadvisor":
      icon = <LocalIcon file="residentadvisor.png" alt="Resident Advisor" />;
      break;
    case "sportsru":
      icon = <LocalIcon file="sportsru.png" alt="Sports.ru" />;
      break;
    case "teletype":
      icon = <LocalIcon file="teletype.png" alt="Teletype" />;
      break;
    case "boosty":
      icon = <Icon icon="simple-icons:boosty" color={socialNetworks.boosty.color} />;
      break;
    case "codementor":
      icon = <Icon icon="simple-icons:codementor" color={socialNetworks.codementor.color} />;
      break;
    case "codesandbox":
      icon = <Icon icon="simple-icons:codesandbox" color={socialNetworks.codesandbox.color} />;
      break;
    case "jsfiddle":
      icon = <Icon icon="simple-icons:jsfiddle" color={socialNetworks.jsfiddle.color} />;
      break;
    case "liberapay":
      icon = <Icon icon="simple-icons:liberapay" color={socialNetworks.liberapay.color} />;
      break;
    case "lobsters":
      icon = <Icon icon="simple-icons:lobsters" color={socialNetworks.lobsters.color} />;
      break;
    case "namuwiki":
      icon = <Icon icon="simple-icons:namuwiki" color={socialNetworks.namuwiki.color} />;
      break;
    case "ninetyninedesigns":
      icon = <Icon icon="simple-icons:99designs" color={socialNetworks.ninetyninedesigns.color} />;
      break;
    case "pinboard":
      icon = <Icon icon="simple-icons:pinboard" color={socialNetworks.pinboard.color} />;
      break;
    case "treehouse":
      icon = <Icon icon="simple-icons:treehouse" color={socialNetworks.treehouse.color} />;
      break;
    case "xda":
      icon = <Icon icon="simple-icons:xdadevelopers" color={socialNetworks.xda.color} />;
      break;
    case "acomics":
      icon = <LocalIcon file="acomics.png" alt="AComics" />;
      break;
    case "advego":
      icon = <LocalIcon file="advego.png" alt="Advego" />;
      break;
    case "allkpop":
      icon = <LocalIcon file="allkpop.png" alt="allkpop" />;
      break;
    case "androidforums":
      icon = <Icon icon="mdi:android" color={socialNetworks.androidforums.color} />;
      break;
    case "antiquers":
      icon = <Icon icon="mdi:treasure-chest" color={socialNetworks.antiquers.color} />;
      break;
    case "armorgames":
      icon = <LocalIcon file="armorgames.png" alt="Armor Games" />;
      break;
    case "aufeminin":
      icon = <LocalIcon file="aufeminin.png" alt="aufeminin" />;
      break;
    case "avforums":
      icon = <LocalIcon file="avforums.png" alt="AVForums" />;
      break;
    case "bankiru":
      icon = <LocalIcon file="bankiru.png" alt="Banki.ru" />;
      break;
    case "bibsonomy":
      icon = <Icon icon="mdi:bookmark-multiple" color={socialNetworks.bibsonomy.color} />;
      break;
    case "bigsoccer":
      icon = <LocalIcon file="bigsoccer.png" alt="BigSoccer" />;
      break;
    case "blackhatprotools":
      icon = <LocalIcon file="blackhatprotools.png" alt="BlackHatProTools" />;
      break;
    case "booth":
      icon = <LocalIcon file="booth.png" alt="BOOTH" />;
      break;
    case "brusheezy":
      icon = <LocalIcon file="brusheezy.png" alt="Brusheezy" />;
      break;
    case "bukkit":
      icon = <Icon icon="mdi:minecraft" color={socialNetworks.bukkit.color} />;
      break;
    case "ccm":
      icon = <LocalIcon file="ccm.png" alt="CCM" />;
      break;
    case "cfdonline":
      icon = <LocalIcon file="cfdonline.png" alt="CFD Online" />;
      break;
    case "clarity":
      icon = <LocalIcon file="clarity.png" alt="Clarity" />;
      break;
    case "comedy":
      icon = <LocalIcon file="comedy.png" alt="British Comedy Guide" />;
      break;
    case "computerbase":
      icon = <LocalIcon file="computerbase.png" alt="ComputerBase" />;
      break;
    case "cont":
      icon = <LocalIcon file="cont.png" alt="Cont" />;
      break;
    case "dcinside":
      icon = <LocalIcon file="dcinside.png" alt="DCInside" />;
      break;
    case "deepdreamgenerator":
      icon = <LocalIcon file="deepdreamgenerator.png" alt="Deep Dream Generator" />;
      break;
    case "dhgate":
      icon = <LocalIcon file="dhgate.png" alt="DHgate" />;
      break;
    case "donationalerts":
      icon = <LocalIcon file="donationalerts.png" alt="DonationAlerts" />;
      break;
    case "dreamwidth":
      icon = <LocalIcon file="dreamwidth.png" alt="Dreamwidth" />;
      break;
    case "drive2":
      icon = <LocalIcon file="drive2.png" alt="DRIVE2" />;
      break;
    case "dumskaya":
      icon = <LocalIcon file="dumskaya.png" alt="Dumskaya" />;
      break;
    case "exposure":
      icon = <LocalIcon file="exposure.png" alt="Exposure" />;
      break;
    case "filmow":
      icon = <LocalIcon file="filmow.png" alt="Filmow" />;
      break;
    case "filmweb":
      icon = <LocalIcon file="filmweb.png" alt="Filmweb" />;
      break;
    case "flru":
      icon = <LocalIcon file="flru.png" alt="FL.ru" />;
      break;
    case "flyertalk":
      icon = <LocalIcon file="flyertalk.png" alt="FlyerTalk" />;
      break;
    case "fodors":
      icon = <LocalIcon file="fodors.png" alt="Fodor's" />;
      break;
    case "fourpda":
      icon = <LocalIcon file="fourpda.png" alt="4PDA" />;
      break;
    case "freelanceru":
      icon = <LocalIcon file="freelanceru.png" alt="Freelance.ru" />;
      break;
    case "gamesradar":
      icon = <LocalIcon file="gamesradar.png" alt="GamesRadar+" />;
      break;
    case "garden":
      icon = <LocalIcon file="garden.png" alt="Garden.org" />;
      break;
    case "gbatemp":
      icon = <LocalIcon file="gbatemp.png" alt="GBAtemp" />;
      break;
    case "gloriatv":
      icon = <LocalIcon file="gloriatv.png" alt="gloria.tv" />;
      break;
    case "goldderby":
      icon = <LocalIcon file="goldderby.png" alt="Gold Derby" />;
      break;
    case "gutefrage":
      icon = <LocalIcon file="gutefrage.png" alt="gutefrage" />;
      break;
    case "hardforum":
      icon = <LocalIcon file="hardforum.png" alt="HardForum" />;
      break;
    case "huntingnet":
      icon = <Icon icon="mdi:target" color={socialNetworks.huntingnet.color} />;
      break;
    case "illustrators":
      icon = <LocalIcon file="illustrators.png" alt="Illustrators.ru" />;
      break;
    case "influenster":
      icon = <LocalIcon file="influenster.png" alt="Influenster" />;
      break;
    case "infourok":
      icon = <LocalIcon file="infourok.png" alt="Infourok" />;
      break;
    case "iphonesru":
      icon = <LocalIcon file="iphonesru.png" alt="iPhones.ru" />;
      break;
    case "irecommend":
      icon = <LocalIcon file="irecommend.png" alt="iRecommend" />;
      break;
    case "jigsawplanet":
      icon = <LocalIcon file="jigsawplanet.png" alt="Jigsaw Planet" />;
      break;
    case "joomlart":
      icon = <LocalIcon file="joomlart.png" alt="JoomlArt" />;
      break;
    case "joyreactor":
      icon = <LocalIcon file="joyreactor.png" alt="JoyReactor" />;
      break;
    case "kwork":
      icon = <LocalIcon file="kwork.png" alt="Kwork" />;
      break;
    case "likee":
      icon = <LocalIcon file="likee.png" alt="Likee" />;
      break;
    case "livemaster":
      icon = <LocalIcon file="livemaster.png" alt="Livemaster" />;
      break;
    case "lomography":
      icon = <Icon icon="mdi:camera-iris" color={socialNetworks.lomography.color} />;
      break;
    case "max":
      icon = <LocalIcon file="max.png" alt="MAX" />;
      break;
    case "melfm":
      icon = <LocalIcon file="melfm.png" alt="Mel.fm" />;
      break;
    case "mercadolivre":
      icon = <LocalIcon file="mercadolivre.png" alt="Mercado Livre" />;
      break;
    case "mirtesen":
      icon = <LocalIcon file="mirtesen.png" alt="MirTesen" />;
      break;
    case "morguefile":
      icon = <LocalIcon file="morguefile.png" alt="morgueFile" />;
      break;
    case "mssg":
      icon = <LocalIcon file="mssg.png" alt="mssg.me" />;
      break;
    case "n4g":
      icon = <LocalIcon file="n4g.png" alt="N4G" />;
      break;
    case "nairaland":
      icon = <LocalIcon file="nairaland.png" alt="Nairaland" />;
      break;
    case "namepros":
      icon = <LocalIcon file="namepros.png" alt="NamePros" />;
      break;
    case "nativeinstruments":
      icon = <LocalIcon file="nativeinstruments.png" alt="Native Instruments" />;
      break;
    case "nhattao":
      icon = <LocalIcon file="nhattao.png" alt="Nhattao" />;
      break;
    case "nkj":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.nkj.color} />;
      break;
    case "onethreethreesevenx":
      icon = <Icon icon="mdi:magnet" color={socialNetworks.onethreethreesevenx.color} />;
      break;
    case "onex":
      icon = <LocalIcon file="onex.png" alt="1x" />;
      break;
    case "opennet":
      icon = <LocalIcon file="opennet.png" alt="OpenNet" />;
      break;
    case "opensource":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.opensource.color} />;
      break;
    case "overclockers":
      icon = <LocalIcon file="overclockers.png" alt="Overclockers.ru" />;
      break;
    case "paltalk":
      icon = <LocalIcon file="paltalk.png" alt="Paltalk" />;
      break;
    case "partnerkin":
      icon = <LocalIcon file="partnerkin.png" alt="Partnerkin" />;
      break;
    case "phpru":
      icon = <Icon icon="mdi:language-php" color={socialNetworks.phpru.color} />;
      break;
    case "physicsforums":
      icon = <LocalIcon file="physicsforums.png" alt="Physics Forums" />;
      break;
    case "planetminecraft":
      icon = <LocalIcon file="planetminecraft.png" alt="Planet Minecraft" />;
      break;
    case "pling":
      icon = <LocalIcon file="pling.png" alt="Pling" />;
      break;
    case "pokecommunity":
      icon = <LocalIcon file="pokecommunity.png" alt="PokéCommunity" />;
      break;
    case "portfoliobox":
      icon = <LocalIcon file="portfoliobox.png" alt="Portfoliobox" />;
      break;
    case "profi":
      icon = <LocalIcon file="profi.png" alt="Profi.ru" />;
      break;
    case "promodj":
      icon = <LocalIcon file="promodj.png" alt="PromoDJ" />;
      break;
    case "psnprofiles":
      icon = <LocalIcon file="psnprofiles.png" alt="PSNProfiles" />;
      break;
    case "publiclab":
      icon = <LocalIcon file="publiclab.png" alt="Public Lab" />;
      break;
    case "pushsquare":
      icon = <LocalIcon file="pushsquare.png" alt="Push Square" />;
      break;
    case "rapidapi":
      icon = <LocalIcon file="rapidapi.png" alt="RapidAPI" />;
      break;
    case "rutracker":
      icon = <Icon icon="mdi:magnet" color={socialNetworks.rutracker.color} />;
      break;
    case "samlib":
      icon = <Icon icon="mdi:library" color={socialNetworks.samlib.color} />;
      break;
    case "segmentfault":
      icon = <LocalIcon file="segmentfault.png" alt="SegmentFault" />;
      break;
    case "skyblock":
      icon = <Icon icon="mdi:minecraft" color={socialNetworks.skyblock.color} />;
      break;
    case "smartlab":
      icon = <LocalIcon file="smartlab.png" alt="Smart-Lab" />;
      break;
    case "smogon":
      icon = <LocalIcon file="smogon.png" alt="Smogon" />;
      break;
    case "sparkru":
      icon = <LocalIcon file="sparkru.png" alt="Spark.ru" />;
      break;
    case "spatial":
      icon = <LocalIcon file="spatial.png" alt="Spatial" />;
      break;
    case "spletnik":
      icon = <LocalIcon file="spletnik.png" alt="Spletnik" />;
      break;
    case "stopgame":
      icon = <LocalIcon file="stopgame.png" alt="StopGame" />;
      break;
    case "studfile":
      icon = <LocalIcon file="studfile.png" alt="Studfile" />;
      break;
    case "sugoidesu":
      icon = <Icon icon="mdi:forum" color={socialNetworks.sugoidesu.color} />;
      break;
    case "sythe":
      icon = <LocalIcon file="sythe.png" alt="Sythe" />;
      break;
    case "taplink":
      icon = <Icon icon="mdi:link-variant" color={socialNetworks.taplink.color} />;
      break;
    case "telescope":
      icon = <LocalIcon file="telescope.png" alt="Telescope" />;
      break;
    case "theodysseyonline":
      icon = <LocalIcon file="theodysseyonline.png" alt="The Odyssey Online" />;
      break;
    case "thestudentroom":
      icon = <LocalIcon file="thestudentroom.png" alt="The Student Room" />;
      break;
    case "threeddd":
      icon = <LocalIcon file="threeddd.png" alt="3DDD" />;
      break;
    case "threedtoday":
      icon = <LocalIcon file="threedtoday.png" alt="3Dtoday" />;
      break;
    case "tinkoffinvest":
      icon = <LocalIcon file="tinkoffinvest.png" alt="T-Invest" />;
      break;
    case "travelblog":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.travelblog.color} />;
      break;
    case "travellerspoint":
      icon = <LocalIcon file="travellerspoint.png" alt="Travellerspoint" />;
      break;
    case "trueachievements":
      icon = <LocalIcon file="trueachievements.png" alt="TrueAchievements" />;
      break;
    case "twentythreehq":
      icon = <LocalIcon file="twentythreehq.png" alt="23hq" />;
      break;
    case "videohive":
      icon = <LocalIcon file="videohive.png" alt="VideoHive" />;
      break;
    case "virgool":
      icon = <LocalIcon file="virgool.png" alt="Virgool" />;
      break;
    case "weblancer":
      icon = <LocalIcon file="weblancer.png" alt="Weblancer" />;
      break;
    case "webnode":
      icon = <LocalIcon file="webnode.png" alt="Webnode" />;
      break;
    case "wowhead":
      icon = <LocalIcon file="wowhead.png" alt="Wowhead" />;
      break;
    case "xakep":
      icon = <LocalIcon file="xakep.png" alt="Xakep" />;
      break;
    case "xenforo":
      icon = <LocalIcon file="xenforo.png" alt="XenForo" />;
      break;
    case "yandexreviews":
      icon = <LocalIcon file="yandexreviews.png" alt="Yandex Reviews" />;
      break;
    case "allhockey":
      icon = <LocalIcon file="allhockey.png" alt="AllHockey" />;
      break;
    case "allthelyrics":
      icon = <Icon icon="mdi:music-note" color={socialNetworks.allthelyrics.color} />;
      break;
    case "aminus3":
      icon = <LocalIcon file="aminus3.png" alt="Aminus3" />;
      break;
    case "animesuperhero":
      icon = <LocalIcon file="animesuperhero.png" alt="AnimeSuperHero" />;
      break;
    case "aniworld":
      icon = <LocalIcon file="aniworld.png" alt="AniWorld" />;
      break;
    case "ariva":
      icon = <LocalIcon file="ariva.png" alt="ariva.de" />;
      break;
    case "arrse":
      icon = <LocalIcon file="arrse.png" alt="ARRSE" />;
      break;
    case "avizo":
      icon = <LocalIcon file="avizo.png" alt="Avízo" />;
      break;
    case "babyru":
      icon = <LocalIcon file="babyru.png" alt="Baby.ru" />;
      break;
    case "bdoutdoors":
      icon = <LocalIcon file="bdoutdoors.png" alt="BD Outdoors" />;
      break;
    case "bitpapa":
      icon = <LocalIcon file="bitpapa.png" alt="Bitpapa" />;
      break;
    case "clozemaster":
      icon = <LocalIcon file="clozemaster.png" alt="Clozemaster" />;
      break;
    case "coolminiornot":
      icon = <LocalIcon file="coolminiornot.png" alt="CoolMiniOrNot" />;
      break;
    case "cqham":
      icon = <LocalIcon file="cqham.png" alt="CQHAM.ru" />;
      break;
    case "d3":
      icon = <LocalIcon file="d3.png" alt="d3.ru" />;
      break;
    case "ddo":
      icon = <Icon icon="mdi:sword-cross" color={socialNetworks.ddo.color} />;
      break;
    case "dota2ru":
      icon = <LocalIcon file="dota2ru.png" alt="Dota2.ru" />;
      break;
    case "egpu":
      icon = <LocalIcon file="egpu.png" alt="eGPU.io" />;
      break;
    case "ethereummagicians":
      icon = <LocalIcon file="ethereummagicians.png" alt="Ethereum Magicians" />;
      break;
    case "ethresear":
      icon = <LocalIcon file="ethresear.png" alt="Ethresear.ch" />;
      break;
    case "etxt":
      icon = <LocalIcon file="etxt.png" alt="eTXT" />;
      break;
    case "fanlore":
      icon = <LocalIcon file="fanlore.png" alt="Fanlore" />;
      break;
    case "fluther":
      icon = <LocalIcon file="fluther.png" alt="Fluther" />;
      break;
    case "forest":
      icon = <LocalIcon file="forest.png" alt="Forest.ru" />;
      break;
    case "fortnitetracker":
      icon = <LocalIcon file="fortnitetracker.png" alt="Fortnite Tracker" />;
      break;
    case "forumhr":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumhr.color} />;
      break;
    case "forumodua":
      icon = <LocalIcon file="forumodua.png" alt="Forum.od.ua" />;
      break;
    case "fotostrana":
      icon = <LocalIcon file="fotostrana.png" alt="Fotostrana" />;
      break;
    case "freelancehunt":
      icon = <LocalIcon file="freelancehunt.png" alt="Freelancehunt" />;
      break;
    case "gcup":
      icon = <LocalIcon file="gcup.png" alt="GCUP.ru" />;
      break;
    case "gingerbread":
      icon = <LocalIcon file="gingerbread.png" alt="Gingerbread" />;
      break;
    case "govloop":
      icon = <LocalIcon file="govloop.png" alt="GovLoop" />;
      break;
    case "hackingwithswift":
      icon = <LocalIcon file="hackingwithswift.png" alt="Hacking with Swift" />;
      break;
    case "hackthissite":
      icon = <LocalIcon file="hackthissite.png" alt="HackThisSite" />;
      break;
    case "homebrewtalk":
      icon = <LocalIcon file="homebrewtalk.png" alt="HomebrewTalk" />;
      break;
    case "icheckmovies":
      icon = <Icon icon="mdi:movie-check" color={socialNetworks.icheckmovies.color} />;
      break;
    case "imagefap":
      icon = <LocalIcon file="imagefap.png" alt="ImageFap" />;
      break;
    case "imginn":
      icon = <LocalIcon file="imginn.png" alt="Imginn" />;
      break;
    case "kharkovforum":
      icon = <LocalIcon file="kharkovforum.png" alt="KharkovForum" />;
      break;
    case "kosmetista":
      icon = <LocalIcon file="kosmetista.png" alt="Kosmetista" />;
      break;
    case "kwejk":
      icon = <LocalIcon file="kwejk.png" alt="Kwejk" />;
      break;
    case "lightstalking":
      icon = <Icon icon="mdi:camera-iris" color={socialNetworks.lightstalking.color} />;
      break;
    case "liinks":
      icon = <LocalIcon file="liinks.png" alt="Liinks" />;
      break;
    case "massagerepublic":
      icon = <LocalIcon file="massagerepublic.png" alt="Massage Republic" />;
      break;
    case "medikforum":
      icon = <Icon icon="mdi:medical-bag" color={socialNetworks.medikforum.color} />;
      break;
    case "millerovo161":
      icon = <Icon icon="mdi:city" color={socialNetworks.millerovo161.color} />;
      break;
    case "modxpro":
      icon = <LocalIcon file="modxpro.png" alt="modx.pro" />;
      break;
    case "movieforums":
      icon = <LocalIcon file="movieforums.png" alt="MovieForums" />;
      break;
    case "movielist":
      icon = <LocalIcon file="movielist.png" alt="Movie-List" />;
      break;
    case "mpgh":
      icon = <LocalIcon file="mpgh.png" alt="MPGH" />;
      break;
    case "musikerboard":
      icon = <LocalIcon file="musikerboard.png" alt="Musiker-Board" />;
      break;
    case "mybuilder":
      icon = <LocalIcon file="mybuilder.png" alt="MyBuilder" />;
      break;
    case "myinstants":
      icon = <LocalIcon file="myinstants.png" alt="Myinstants" />;
      break;
    case "mylot":
      icon = <LocalIcon file="mylot.png" alt="myLot" />;
      break;
    case "namemc":
      icon = <Icon icon="simple-icons:namemc" color={socialNetworks.namemc.color} />;
      break;
    case "nothingcommunity":
      icon = <LocalIcon file="nothingcommunity.png" alt="Nothing Community" />;
      break;
    case "oldgames":
      icon = <LocalIcon file="oldgames.png" alt="Old-Games.ru" />;
      break;
    case "onethousandonetracklists":
      icon = <LocalIcon file="onethousandonetracklists.png" alt="1001Tracklists" />;
      break;
    case "onlyfinder":
      icon = <LocalIcon file="onlyfinder.png" alt="OnlyFinder" />;
      break;
    case "oper":
      icon = <LocalIcon file="oper.png" alt="Oper.ru" />;
      break;
    case "partyflock":
      icon = <LocalIcon file="partyflock.png" alt="Partyflock" />;
      break;
    case "politforums":
      icon = <LocalIcon file="politforums.png" alt="Politforums" />;
      break;
    case "radioscanner":
      icon = <Icon icon="mdi:radio-tower" color={socialNetworks.radioscanner.color} />;
      break;
    case "rappad":
      icon = <LocalIcon file="rappad.png" alt="Rappad" />;
      break;
    case "reibert":
      icon = <LocalIcon file="reibert.png" alt="Reibert.info" />;
      break;
    case "rlocman":
      icon = <LocalIcon file="rlocman.png" alt="RLocman" />;
      break;
    case "rmmedia":
      icon = <LocalIcon file="rmmedia.png" alt="RMMedia" />;
      break;
    case "rollitup":
      icon = <LocalIcon file="rollitup.png" alt="RollItUp" />;
      break;
    case "runitonce":
      icon = <LocalIcon file="runitonce.png" alt="Run It Once" />;
      break;
    case "rusfootball":
      icon = <LocalIcon file="rusfootball.png" alt="RusFootball" />;
      break;
    case "salon24":
      icon = <LocalIcon file="salon24.png" alt="Salon24" />;
      break;
    case "savingadvice":
      icon = <LocalIcon file="savingadvice.png" alt="SavingAdvice" />;
      break;
    case "sbazar":
      icon = <LocalIcon file="sbazar.png" alt="Sbazar" />;
      break;
    case "seoclerks":
      icon = <LocalIcon file="seoclerks.png" alt="SEOClerks" />;
      break;
    case "sevendach":
      icon = <LocalIcon file="sevendach.png" alt="7dach" />;
      break;
    case "shazoo":
      icon = <LocalIcon file="shazoo.png" alt="Shazoo" />;
      break;
    case "shikimori":
      icon = <Icon icon="simple-icons:shikimori" color={socialNetworks.shikimori.color} />;
      break;
    case "smokingmeatforums":
      icon = <LocalIcon file="smokingmeatforums.png" alt="Smoking Meat Forums" />;
      break;
    case "tfw2005":
      icon = <LocalIcon file="tfw2005.png" alt="TFW2005" />;
      break;
    case "theanswerbank":
      icon = <Icon icon="mdi:comment-question" color={socialNetworks.theanswerbank.color} />;
      break;
    case "thesimsresource":
      icon = <LocalIcon file="thesimsresource.png" alt="The Sims Resource" />;
      break;
    case "touristlink":
      icon = <LocalIcon file="touristlink.png" alt="Touristlink" />;
      break;
    case "trainsim":
      icon = <LocalIcon file="trainsim.png" alt="TrainSim" />;
      break;
    case "trashbox":
      icon = <LocalIcon file="trashbox.png" alt="Trashbox" />;
      break;
    case "trisquel":
      icon = <LocalIcon file="trisquel.png" alt="Trisquel" />;
      break;
    case "valinor":
      icon = <LocalIcon file="valinor.png" alt="Valinor" />;
      break;
    case "vgtimes":
      icon = <LocalIcon file="vgtimes.png" alt="VGTimes" />;
      break;
    case "vjudge":
      icon = <LocalIcon file="vjudge.png" alt="Virtual Judge" />;
      break;
    case "vsemayki":
      icon = <LocalIcon file="vsemayki.png" alt="Vsemayki" />;
      break;
    case "w7forums":
      icon = <LocalIcon file="w7forums.png" alt="W7Forums" />;
      break;
    case "windowsforum":
      icon = <LocalIcon file="windowsforum.png" alt="WindowsForum" />;
      break;
    case "zoomit":
      icon = <LocalIcon file="zoomit.png" alt="Zoomit" />;
      break;
    case "affiliatefix":
      icon = <LocalIcon file="affiliatefix.png" alt="AffiliateFix" />;
      break;
    case "animeforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.animeforum.color} />;
      break;
    case "armtorg":
      icon = <LocalIcon file="armtorg.png" alt="Armtorg" />;
      break;
    case "arsenalmania":
      icon = <LocalIcon file="arsenalmania.png" alt="Arsenal Mania" />;
      break;
    case "australianfrequentflyer":
      icon = <LocalIcon file="australianfrequentflyer.png" alt="Australian Frequent Flyer" />;
      break;
    case "autokadabra":
      icon = <Icon icon="mdi:car" color={socialNetworks.autokadabra.color} />;
      break;
    case "autolada":
      icon = <LocalIcon file="autolada.png" alt="Autolada" />;
      break;
    case "avtomarket":
      icon = <LocalIcon file="avtomarket.png" alt="Avtomarket" />;
      break;
    case "beermoneyforum":
      icon = <LocalIcon file="beermoneyforum.png" alt="BeerMoneyForum" />;
      break;
    case "bikepost":
      icon = <Icon icon="mdi:motorbike" color={socialNetworks.bikepost.color} />;
      break;
    case "blast":
      icon = <LocalIcon file="blast.png" alt="BlastHack" />;
      break;
    case "blipfoto":
      icon = <LocalIcon file="blipfoto.png" alt="Blipfoto" />;
      break;
    case "chan4chan":
      icon = <Icon icon="mdi:image-multiple" color={socialNetworks.chan4chan.color} />;
      break;
    case "codeby":
      icon = <LocalIcon file="codeby.png" alt="Codeby" />;
      break;
    case "cslords":
      icon = <Icon icon="mdi:pistol" color={socialNetworks.cslords.color} />;
      break;
    case "cubecraft":
      icon = <LocalIcon file="cubecraft.png" alt="CubeCraft" />;
      break;
    case "dishtv":
      icon = <LocalIcon file="dishtv.png" alt="Dish TV" />;
      break;
    case "diskusjon":
      icon = <Icon icon="mdi:forum" color={socialNetworks.diskusjon.color} />;
      break;
    case "dmoj":
      icon = <LocalIcon file="dmoj.png" alt="DMOJ" />;
      break;
    case "dolap":
      icon = <LocalIcon file="dolap.png" alt="Dolap" />;
      break;
    case "donatepay":
      icon = <LocalIcon file="donatepay.png" alt="DonatePay" />;
      break;
    case "drupalru":
      icon = <LocalIcon file="drupalru.png" alt="Drupal.ru" />;
      break;
    case "edugeek":
      icon = <LocalIcon file="edugeek.png" alt="EduGeek" />;
      break;
    case "elakiri":
      icon = <LocalIcon file="elakiri.png" alt="Elakiri" />;
      break;
    case "empflix":
      icon = <LocalIcon file="empflix.png" alt="EMPFlix" />;
      break;
    case "fanficslandia":
      icon = <LocalIcon file="fanficslandia.png" alt="Fanficslandia" />;
      break;
    case "fcrubin":
      icon = <LocalIcon file="fcrubin.png" alt="FC Rubin" />;
      break;
    case "flashflashrevolution":
      icon = <LocalIcon file="flashflashrevolution.png" alt="Flash Flash Revolution" />;
      break;
    case "footballforums":
      icon = <Icon icon="mdi:soccer" color={socialNetworks.footballforums.color} />;
      break;
    case "forumkinopoisk":
      icon = <LocalIcon file="forumkinopoisk.png" alt="Forum Kinopoisk" />;
      break;
    case "forumophilia":
      icon = <LocalIcon file="forumophilia.png" alt="Forumophilia" />;
      break;
    case "fourgameforum":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.fourgameforum.color} />;
      break;
    case "fourstor":
      icon = <LocalIcon file="fourstor.png" alt="4stor" />;
      break;
    case "gardrops":
      icon = <LocalIcon file="gardrops.png" alt="Gardrops" />;
      break;
    case "geodesist":
      icon = <LocalIcon file="geodesist.png" alt="Geodesist" />;
      break;
    case "gpodder":
      icon = <LocalIcon file="gpodder.png" alt="gpodder.net" />;
      break;
    case "graana":
      icon = <LocalIcon file="graana.png" alt="Graana" />;
      break;
    case "hackenproof":
      icon = <LocalIcon file="hackenproof.png" alt="HackenProof" />;
      break;
    case "housemixes":
      icon = <LocalIcon file="housemixes.png" alt="House-Mixes" />;
      break;
    case "hozpitality":
      icon = <LocalIcon file="hozpitality.png" alt="Hozpitality" />;
      break;
    case "huntingru":
      icon = <Icon icon="mdi:target" color={socialNetworks.huntingru.color} />;
      break;
    case "imood":
      icon = <Icon icon="mdi:emoticon-happy" color={socialNetworks.imood.color} />;
      break;
    case "justmj":
      icon = <Icon icon="mdi:microphone-variant" color={socialNetworks.justmj.color} />;
      break;
    case "kuharka":
      icon = <LocalIcon file="kuharka.png" alt="Kuharka" />;
      break;
    case "lolchess":
      icon = <LocalIcon file="lolchess.png" alt="LoLCHESS.GG" />;
      break;
    case "lori":
      icon = <LocalIcon file="lori.png" alt="Lori" />;
      break;
    case "loveplanet":
      icon = <LocalIcon file="loveplanet.png" alt="LovePlanet" />;
      break;
    case "machelp":
      icon = <LocalIcon file="machelp.png" alt="Mac Help" />;
      break;
    case "macosx":
      icon = <LocalIcon file="macosx.png" alt="MacOSX.com" />;
      break;
    case "magix":
      icon = <LocalIcon file="magix.png" alt="MAGIX" />;
      break;
    case "mamuli":
      icon = <Icon icon="mdi:baby-carriage" color={socialNetworks.mamuli.color} />;
      break;
    case "math10":
      icon = <LocalIcon file="math10.png" alt="Math10" />;
      break;
    case "mdshooters":
      icon = <Icon icon="mdi:pistol" color={socialNetworks.mdshooters.color} />;
      break;
    case "motorhomefun":
      icon = <LocalIcon file="motorhomefun.png" alt="MotorhomeFun" />;
      break;
    case "mywishboard":
      icon = <LocalIcon file="mywishboard.png" alt="MyWishBoard" />;
      break;
    case "nightbot":
      icon = <LocalIcon file="nightbot.png" alt="Nightbot" />;
      break;
    case "niketalk":
      icon = <LocalIcon file="niketalk.png" alt="NikeTalk" />;
      break;
    case "nixp":
      icon = <LocalIcon file="nixp.png" alt="nixp" />;
      break;
    case "not606":
      icon = <LocalIcon file="not606.png" alt="Not606" />;
      break;
    case "oakleyforum":
      icon = <LocalIcon file="oakleyforum.png" alt="Oakley Forum" />;
      break;
    case "officeforums":
      icon = <LocalIcon file="officeforums.png" alt="Office Forums" />;
      break;
    case "omoimot":
      icon = <LocalIcon file="omoimot.png" alt="Omoimot" />;
      break;
    case "pedsovet":
      icon = <Icon icon="mdi:school" color={socialNetworks.pedsovet.color} />;
      break;
    case "pepperpl":
      icon = <LocalIcon file="pepperpl.png" alt="Pepper.pl" />;
      break;
    case "pepperru":
      icon = <LocalIcon file="pepperru.png" alt="Pepper.ru" />;
      break;
    case "planetaexcel":
      icon = <Icon icon="mdi:table" color={socialNetworks.planetaexcel.color} />;
      break;
    case "poembook":
      icon = <Icon icon="mdi:feather" color={socialNetworks.poembook.color} />;
      break;
    case "pogovorim":
      icon = <Icon icon="mdi:forum" color={socialNetworks.pogovorim.color} />;
      break;
    case "pregame":
      icon = <LocalIcon file="pregame.png" alt="Pregame" />;
      break;
    case "prodaman":
      icon = <LocalIcon file="prodaman.png" alt="Prodaman" />;
      break;
    case "proglib":
      icon = <LocalIcon file="proglib.png" alt="Proglib" />;
      break;
    case "proshkolu":
      icon = <Icon icon="mdi:school" color={socialNetworks.proshkolu.color} />;
      break;
    case "pyha":
      icon = <LocalIcon file="pyha.png" alt="Pyha" />;
      break;
    case "queer":
      icon = <LocalIcon file="queer.png" alt="Queer.pl" />;
      break;
    case "railforums":
      icon = <Icon icon="mdi:train" color={socialNetworks.railforums.color} />;
      break;
    case "redcafe":
      icon = <LocalIcon file="redcafe.png" alt="RedCafe" />;
      break;
    case "religiousforums":
      icon = <Icon icon="mdi:hands-pray" color={socialNetworks.religiousforums.color} />;
      break;
    case "romanticcollection":
      icon = <LocalIcon file="romanticcollection.png" alt="RomanticCollection" />;
      break;
    case "rpgrussia":
      icon = <LocalIcon file="rpgrussia.png" alt="RPG Russia" />;
      break;
    case "ruanekdot":
      icon = <LocalIcon file="ruanekdot.png" alt="RuAnekdot" />;
      break;
    case "rubyforum":
      icon = <LocalIcon file="rubyforum.png" alt="Ruby Forum" />;
      break;
    case "rusfishing":
      icon = <LocalIcon file="rusfishing.png" alt="RusFishing" />;
      break;
    case "shophelp":
      icon = <LocalIcon file="shophelp.png" alt="ShopHelp" />;
      break;
    case "showme":
      icon = <LocalIcon file="showme.png" alt="ShowMe" />;
      break;
    case "snbforums":
      icon = <LocalIcon file="snbforums.png" alt="SNBForums" />;
      break;
    case "stereo":
      icon = <LocalIcon file="stereo.png" alt="Stereo.ru" />;
      break;
    case "svtperformance":
      icon = <LocalIcon file="svtperformance.png" alt="SVTPerformance" />;
      break;
    case "swedroid":
      icon = <LocalIcon file="swedroid.png" alt="Swedroid" />;
      break;
    case "tamtam":
      icon = <LocalIcon file="tamtam.png" alt="TamTam" />;
      break;
    case "thefastlaneforum":
      icon = <LocalIcon file="thefastlaneforum.png" alt="The Fastlane Forum" />;
      break;
    case "themainboard":
      icon = <Icon icon="mdi:basketball" color={socialNetworks.themainboard.color} />;
      break;
    case "truesteamachievements":
      icon = <LocalIcon file="truesteamachievements.png" alt="TrueSteamAchievements" />;
      break;
    case "tvgames":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.tvgames.color} />;
      break;
    case "twodthreed":
      icon = <LocalIcon file="twodthreed.png" alt="2D-3D" />;
      break;
    case "uchportal":
      icon = <Icon icon="mdi:book-education" color={socialNetworks.uchportal.color} />;
      break;
    case "uvelir":
      icon = <Icon icon="mdi:diamond-stone" color={socialNetworks.uvelir.color} />;
      break;
    case "vapenews":
      icon = <Icon icon="mdi:smoke" color={socialNetworks.vapenews.color} />;
      break;
    case "vishivalochka":
      icon = <Icon icon="mdi:needle" color={socialNetworks.vishivalochka.color} />;
      break;
    case "voicesevas":
      icon = <LocalIcon file="voicesevas.png" alt="Voicesevas" />;
      break;
    case "windows10forums":
      icon = <LocalIcon file="windows10forums.png" alt="Windows 10 Forums" />;
      break;
    case "wolpy":
      icon = <Icon icon="mdi:earth" color={socialNetworks.wolpy.color} />;
      break;
    case "wowgame":
      icon = <Icon icon="mdi:sword-cross" color={socialNetworks.wowgame.color} />;
      break;
    case "ww2aircraft":
      icon = <LocalIcon file="ww2aircraft.png" alt="WW2Aircraft.net" />;
      break;
    case "admireme":
      icon = <LocalIcon file="admireme.png" alt="AdmireMe" />;
      break;
    case "adobecommunity":
      icon = <Icon icon="simple-icons:adobe" color={socialNetworks.adobecommunity.color} />;
      break;
    case "alushta24":
      icon = <Icon icon="mdi:city" color={socialNetworks.alushta24.color} />;
      break;
    case "amazfitwatchfaces":
      icon = <LocalIcon file="amazfitwatchfaces.png" alt="AmazfitWatchFaces" />;
      break;
    case "angara":
      icon = <LocalIcon file="angara.png" alt="Angara.Net" />;
      break;
    case "antiquebottles":
      icon = <Icon icon="mdi:bottle-wine" color={socialNetworks.antiquebottles.color} />;
      break;
    case "aqa":
      icon = <LocalIcon file="aqa.png" alt="AQA" />;
      break;
    case "avtoforum":
      icon = <Icon icon="mdi:car" color={socialNetworks.avtoforum.color} />;
      break;
    case "bayoushooter":
      icon = <Icon icon="mdi:pistol" color={socialNetworks.bayoushooter.color} />;
      break;
    case "borisfxforum":
      icon = <LocalIcon file="borisfxforum.png" alt="Boris FX Forum" />;
      break;
    case "bristle":
      icon = <LocalIcon file="bristle.png" alt="Bristle" />;
      break;
    case "cad":
      icon = <LocalIcon file="cad.png" alt="CAD.ru" />;
      break;
    case "caduser":
      icon = <Icon icon="mdi:pencil-ruler" color={socialNetworks.caduser.color} />;
      break;
    case "carmasters":
      icon = <Icon icon="mdi:car-wrench" color={socialNetworks.carmasters.color} />;
      break;
    case "caves":
      icon = <LocalIcon file="caves.png" alt="Caves.ru" />;
      break;
    case "cheatmaster":
      icon = <LocalIcon file="cheatmaster.png" alt="Cheat-Master" />;
      break;
    case "coddy":
      icon = <LocalIcon file="coddy.png" alt="Coddy" />;
      break;
    case "codedex":
      icon = <LocalIcon file="codedex.png" alt="Codédex" />;
      break;
    case "codersrank":
      icon = <Icon icon="simple-icons:codersrank" color={socialNetworks.codersrank.color} />;
      break;
    case "connosr":
      icon = <LocalIcon file="connosr.png" alt="Connosr" />;
      break;
    case "cowboyszone":
      icon = <LocalIcon file="cowboyszone.png" alt="CowboysZone" />;
      break;
    case "diorama":
      icon = <Icon icon="mdi:castle" color={socialNetworks.diorama.color} />;
      break;
    case "discoursemozilla":
      icon = <Icon icon="simple-icons:mozilla" color={socialNetworks.discoursemozilla.color} />;
      break;
    case "discussfastpitch":
      icon = <Icon icon="mdi:baseball" color={socialNetworks.discussfastpitch.color} />;
      break;
    case "dogster":
      icon = <Icon icon="mdi:dog" color={socialNetworks.dogster.color} />;
      break;
    case "donatestream":
      icon = <Icon icon="mdi:hand-heart" color={socialNetworks.donatestream.color} />;
      break;
    case "empretienda":
      icon = <LocalIcon file="empretienda.png" alt="Empretienda" />;
      break;
    case "erogen":
      icon = <LocalIcon file="erogen.png" alt="Erogen.club" />;
      break;
    case "figshare":
      icon = <Icon icon="simple-icons:figshare" color={socialNetworks.figshare.color} />;
      break;
    case "fishingsib":
      icon = <LocalIcon file="fishingsib.png" alt="FishingSib" />;
      break;
    case "forumjizni":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumjizni.color} />;
      break;
    case "forummil":
      icon = <Icon icon="mdi:medal" color={socialNetworks.forummil.color} />;
      break;
    case "forumprosport":
      icon = <LocalIcon file="forumprosport.png" alt="ForumProSport" />;
      break;
    case "forumsdrom":
      icon = <LocalIcon file="forumsdrom.png" alt="Forums Drom" />;
      break;
    case "forumvancouver":
      icon = <LocalIcon file="forumvancouver.png" alt="ForumVancouver" />;
      break;
    case "fourcheat":
      icon = <LocalIcon file="fourcheat.png" alt="4cheat" />;
      break;
    case "freelancers":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.freelancers.color} />;
      break;
    case "gays":
      icon = <LocalIcon file="gays.png" alt="Gays.com" />;
      break;
    case "gentlemint":
      icon = <Icon icon="mdi:mustache" color={socialNetworks.gentlemint.color} />;
      break;
    case "harvardcyber":
      icon = <LocalIcon file="harvardcyber.png" alt="Berkman Klein Center" />;
      break;
    case "harvardscholar":
      icon = <Icon icon="mdi:school" color={socialNetworks.harvardscholar.color} />;
      break;
    case "hbh":
      icon = <LocalIcon file="hbh.png" alt="HBH" />;
      break;
    case "hitmanforum":
      icon = <LocalIcon file="hitmanforum.png" alt="Hitman Forum" />;
      break;
    case "hondaswap":
      icon = <LocalIcon file="hondaswap.png" alt="HondaSwap" />;
      break;
    case "interfaith":
      icon = <Icon icon="mdi:hands-pray" color={socialNetworks.interfaith.color} />;
      break;
    case "investsocial":
      icon = <LocalIcon file="investsocial.png" alt="T-Bank Invest" />;
      break;
    case "issuehunt":
      icon = <LocalIcon file="issuehunt.png" alt="IssueHunt" />;
      break;
    case "juejin":
      icon = <Icon icon="simple-icons:juejin" color={socialNetworks.juejin.color} />;
      break;
    case "kashalot":
      icon = <LocalIcon file="kashalot.png" alt="Kashalot" />;
      break;
    case "kloomba":
      icon = <LocalIcon file="kloomba.png" alt="Kloomba" />;
      break;
    case "livetrack24":
      icon = <LocalIcon file="livetrack24.png" alt="LiveTrack24" />;
      break;
    case "maccentre":
      icon = <LocalIcon file="maccentre.png" alt="Maccentre" />;
      break;
    case "masterkosta":
      icon = <Icon icon="mdi:tools" color={socialNetworks.masterkosta.color} />;
      break;
    case "mbclub":
      icon = <LocalIcon file="mbclub.png" alt="MBClub" />;
      break;
    case "mdregion":
      icon = <LocalIcon file="mdregion.png" alt="MDRegion" />;
      break;
    case "megapolis":
      icon = <Icon icon="mdi:city" color={socialNetworks.megapolis.color} />;
      break;
    case "minecraftstatistic":
      icon = <LocalIcon file="minecraftstatistic.png" alt="Minecraft-Statistic" />;
      break;
    case "mineplex":
      icon = <LocalIcon file="mineplex.png" alt="Mineplex" />;
      break;
    case "mnogodetok":
      icon = <Icon icon="mdi:human-male-female-child" color={socialNetworks.mnogodetok.color} />;
      break;
    case "munzee":
      icon = <LocalIcon file="munzee.png" alt="Munzee" />;
      break;
    case "nesiditsa":
      icon = <LocalIcon file="nesiditsa.png" alt="Ne Siditsa" />;
      break;
    case "neteasemusic":
      icon = <Icon icon="simple-icons:neteasecloudmusic" color={socialNetworks.neteasemusic.color} />;
      break;
    case "nhl":
      icon = <Icon icon="mdi:hockey-sticks" color={socialNetworks.nhl.color} />;
      break;
    case "nsk66":
      icon = <Icon icon="mdi:city" color={socialNetworks.nsk66.color} />;
      break;
    case "nucastle":
      icon = <LocalIcon file="nucastle.png" alt="NUcastle" />;
      break;
    case "operaforums":
      icon = <Icon icon="simple-icons:opera" color={socialNetworks.operaforums.color} />;
      break;
    case "oraclecommunity":
      icon = <Icon icon="simple-icons:oracle" color={socialNetworks.oraclecommunity.color} />;
      break;
    case "parkrocker":
      icon = <LocalIcon file="parkrocker.png" alt="Parkrocker" />;
      break;
    default:
      icon = <Icon icon="mdi:share-variant-outline" />;
      break;
  }

  return icon;
};

export default SocialIcons;
