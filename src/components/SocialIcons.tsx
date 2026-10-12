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
    case "playmd":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.playmd.color} />;
      break;
    case "politikforum":
      icon = <Icon icon="mdi:vote" color={socialNetworks.politikforum.color} />;
      break;
    case "pornsavant":
      icon = <LocalIcon file="pornsavant.png" alt="PornSavant" />;
      break;
    case "prizyvnik":
      icon = <LocalIcon file="prizyvnik.png" alt="Prizyvnik" />;
      break;
    case "prokoni":
      icon = <LocalIcon file="prokoni.png" alt="ProKoni" />;
      break;
    case "psyera":
      icon = <LocalIcon file="psyera.png" alt="Psyera" />;
      break;
    case "rebornbuddy":
      icon = <LocalIcon file="rebornbuddy.png" alt="RebornBuddy" />;
      break;
    case "recpoker":
      icon = <Icon icon="mdi:cards-playing" color={socialNetworks.recpoker.color} />;
      break;
    case "rusarmy":
      icon = <Icon icon="mdi:medal" color={socialNetworks.rusarmy.color} />;
      break;
    case "sasgis":
      icon = <Icon icon="mdi:map" color={socialNetworks.sasgis.color} />;
      break;
    case "serveradmin":
      icon = <LocalIcon file="serveradmin.png" alt="ServerAdmin" />;
      break;
    case "sforum":
      icon = <LocalIcon file="sforum.png" alt="S-Forum" />;
      break;
    case "shafa":
      icon = <LocalIcon file="shafa.png" alt="Shafa" />;
      break;
    case "socioforum":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.socioforum.color} />;
      break;
    case "southbayriders":
      icon = <Icon icon="mdi:motorbike" color={socialNetworks.southbayriders.color} />;
      break;
    case "spaces":
      icon = <LocalIcon file="spaces.png" alt="Spaces" />;
      break;
    case "studwork":
      icon = <LocalIcon file="studwork.png" alt="Studwork" />;
      break;
    case "texasguntalk":
      icon = <Icon icon="mdi:pistol" color={socialNetworks.texasguntalk.color} />;
      break;
    case "trworkshop":
      icon = <Icon icon="mdi:tools" color={socialNetworks.trworkshop.color} />;
      break;
    case "tuchong":
      icon = <LocalIcon file="tuchong.png" alt="Tuchong" />;
      break;
    case "twentysix":
      icon = <LocalIcon file="twentysix.png" alt="TwentySix" />;
      break;
    case "unixforum":
      icon = <LocalIcon file="unixforum.png" alt="UnixForum" />;
      break;
    case "volgogradru":
      icon = <LocalIcon file="volgogradru.png" alt="VolgogradRU" />;
      break;
    case "votetags":
      icon = <Icon icon="mdi:bookmark" color={socialNetworks.votetags.color} />;
      break;
    case "w3challs":
      icon = <LocalIcon file="w3challs.png" alt="W3Challs" />;
      break;
    case "wasm":
      icon = <LocalIcon file="wasm.png" alt="WASM" />;
      break;
    case "webosforums":
      icon = <LocalIcon file="webosforums.png" alt="webOS Forums" />;
      break;
    case "worldofplayers":
      icon = <LocalIcon file="worldofplayers.png" alt="World of Players" />;
      break;
    case "writercenter":
      icon = <LocalIcon file="writercenter.png" alt="WriterCenter" />;
      break;
    case "xboxgamertag":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.xboxgamertag.color} />;
      break;
    case "xgm":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.xgm.color} />;
      break;
    case "yamaya":
      icon = <LocalIcon file="yamaya.png" alt="Yamaya" />;
      break;
    case "yapishu":
      icon = <Icon icon="mdi:feather" color={socialNetworks.yapishu.color} />;
      break;
    case "zenodo":
      icon = <Icon icon="simple-icons:zenodo" color={socialNetworks.zenodo.color} />;
      break;
    case "abcaccounting":
      icon = <Icon icon="mdi:finance" color={socialNetworks.abcaccounting.color} />;
      break;
    case "actikom":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.actikom.color} />;
      break;
    case "adminsoft":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.adminsoft.color} />;
      break;
    case "adultism":
      icon = <LocalIcon file="adultism.webp" alt="Adultism" />;
      break;
    case "advancedcustomfields":
      icon = <LocalIcon file="advancedcustomfields.webp" alt="Advanced Custom Fields" />;
      break;
    case "afsoc":
      icon = <Icon icon="mdi:medal" color={socialNetworks.afsoc.color} />;
      break;
    case "aikidomariupol":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.aikidomariupol.color} />;
      break;
    case "airbit":
      icon = <Icon icon="mdi:web" color={socialNetworks.airbit.color} />;
      break;
    case "airnfts":
      icon = <LocalIcon file="airnfts.webp" alt="AirNFTs" />;
      break;
    case "alabay":
      icon = <Icon icon="mdi:forum" color={socialNetworks.alabay.color} />;
      break;
    case "alexgyver":
      icon = <Icon icon="mdi:forum" color={socialNetworks.alexgyver.color} />;
      break;
    case "aliensoup":
      icon = <LocalIcon file="aliensoup.webp" alt="Aliensoup" />;
      break;
    case "alisaclub":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.alisaclub.color} />;
      break;
    case "allgaz":
      icon = <LocalIcon file="allgaz.webp" alt="Allgaz" />;
      break;
    case "allmods":
      icon = <LocalIcon file="allmods.webp" alt="All-mods" />;
      break;
    case "allmus":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.allmus.color} />;
      break;
    case "alpanf":
      icon = <Icon icon="mdi:forum" color={socialNetworks.alpanf.color} />;
      break;
    case "analitikaforex":
      icon = <Icon icon="mdi:finance" color={socialNetworks.analitikaforex.color} />;
      break;
    case "anarchopunk":
      icon = <LocalIcon file="anarchopunk.webp" alt="Anarcho-punk" />;
      break;
    case "andrei":
      icon = <Icon icon="mdi:bitcoin" color={socialNetworks.andrei.color} />;
      break;
    case "angelgothics":
      icon = <LocalIcon file="angelgothics.webp" alt="Angelgothics" />;
      break;
    case "animebase":
      icon = <LocalIcon file="animebase.webp" alt="Animebase" />;
      break;
    case "animego":
      icon = <LocalIcon file="animego.webp" alt="AnimeGo" />;
      break;
    case "animelend":
      icon = <Icon icon="mdi:animation" color={socialNetworks.animelend.color} />;
      break;
    case "animeuknews":
      icon = <LocalIcon file="animeuknews.webp" alt="AnimeUKNews" />;
      break;
    case "animewebtr":
      icon = <Icon icon="mdi:animation" color={socialNetworks.animewebtr.color} />;
      break;
    case "ankord":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.ankord.color} />;
      break;
    case "anschula":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.anschula.color} />;
      break;
    case "antalya":
      icon = <Icon icon="mdi:tag" color={socialNetworks.antalya.color} />;
      break;
    case "antihack":
      icon = <LocalIcon file="antihack.webp" alt="CyberHacking" />;
      break;
    case "antipunk":
      icon = <Icon icon="mdi:music" color={socialNetworks.antipunk.color} />;
      break;
    case "antivirus":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.antivirus.color} />;
      break;
    case "antizombie":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.antizombie.color} />;
      break;
    case "apelmon":
      icon = <Icon icon="mdi:forum" color={socialNetworks.apelmon.color} />;
      break;
    case "airbuds":
      icon = <LocalIcon file="airbuds.webp" alt="Airbuds" />;
      break;
    case "appclan":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.appclan.color} />;
      break;
    case "ahera":
      icon = <Icon icon="mdi:music" color={socialNetworks.ahera.color} />;
      break;
    case "alconar":
      icon = <LocalIcon file="alconar.webp" alt="Alconar" />;
      break;
    case "algowiki":
      icon = <Icon icon="mdi:web" color={socialNetworks.algowiki.color} />;
      break;
    case "alimero":
      icon = <LocalIcon file="alimero.webp" alt="Alimero" />;
      break;
    case "androidgameworld":
      icon = <LocalIcon file="androidgameworld.webp" alt="Android Gameworld" />;
      break;
    case "antiscam":
      icon = <LocalIcon file="antiscam.webp" alt="Antiscam" />;
      break;
    case "appian":
      icon = <Icon icon="simple-icons:appian" color={socialNetworks.appian.color} />;
      break;
    case "aptoide":
      icon = <LocalIcon file="aptoide.webp" alt="Aptoide" />;
      break;
    case "arduino":
      icon = <Icon icon="simple-icons:arduino" color={socialNetworks.arduino.color} />;
      break;
    case "arekamrbb":
      icon = <Icon icon="mdi:forum" color={socialNetworks.arekamrbb.color} />;
      break;
    case "arhrock":
      icon = <LocalIcon file="arhrock.webp" alt="Arhrock" />;
      break;
    case "aribut":
      icon = <Icon icon="mdi:school" color={socialNetworks.aribut.color} />;
      break;
    case "armavir":
      icon = <Icon icon="mdi:forum" color={socialNetworks.armavir.color} />;
      break;
    case "armyboots":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.armyboots.color} />;
      break;
    case "armyrus":
      icon = <Icon icon="mdi:medal" color={socialNetworks.armyrus.color} />;
      break;
    case "artcolor":
      icon = <Icon icon="mdi:palette" color={socialNetworks.artcolor.color} />;
      break;
    case "artfol":
      icon = <LocalIcon file="artfol.webp" alt="Artfol" />;
      break;
    case "artinvestment":
      icon = <LocalIcon file="artinvestment.webp" alt="Artinvestment" />;
      break;
    case "artnata":
      icon = <Icon icon="mdi:palette" color={socialNetworks.artnata.color} />;
      break;
    case "artpersona":
      icon = <LocalIcon file="artpersona.webp" alt="Artpersona" />;
      break;
    case "asecurity":
      icon = <Icon icon="mdi:school" color={socialNetworks.asecurity.color} />;
      break;
    case "askfedora":
      icon = <LocalIcon file="askfedora.webp" alt="Ask Fedora" />;
      break;
    case "asterisk":
      icon = <Icon icon="simple-icons:asterisk" color={socialNetworks.asterisk.color} />;
      break;
    case "astrotalks":
      icon = <Icon icon="mdi:flask" color={socialNetworks.astrotalks.color} />;
      break;
    case "atmclub":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.atmclub.color} />;
      break;
    case "audacity":
      icon = <Icon icon="simple-icons:audacity" color={socialNetworks.audacity.color} />;
      break;
    case "aussiehomebrewer":
      icon = <LocalIcon file="aussiehomebrewer.webp" alt="Aussiehomebrewer" />;
      break;
    case "auto63":
      icon = <Icon icon="mdi:car" color={socialNetworks.auto63.color} />;
      break;
    case "autocb":
      icon = <Icon icon="mdi:forum" color={socialNetworks.autocb.color} />;
      break;
    case "autofrage":
      icon = <LocalIcon file="autofrage.webp" alt="Autofrage" />;
      break;
    case "av":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.av.color} />;
      break;
    case "aviabazameria":
      icon = <Icon icon="mdi:forum" color={socialNetworks.aviabazameria.color} />;
      break;
    case "aviaforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.aviaforum.color} />;
      break;
    case "aviahistory":
      icon = <Icon icon="mdi:web" color={socialNetworks.aviahistory.color} />;
      break;
    case "avtodzerghinsk":
      icon = <Icon icon="mdi:web" color={socialNetworks.avtodzerghinsk.color} />;
      break;
    case "awsskillsprofile":
      icon = <Icon icon="simple-icons:amazonwebservices" color={socialNetworks.awsskillsprofile.color} />;
      break;
    case "azhack":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.azhack.color} />;
      break;
    case "baggi":
      icon = <Icon icon="mdi:tag" color={socialNetworks.baggi.color} />;
      break;
    case "balena":
      icon = <LocalIcon file="balena.webp" alt="balenaForums" />;
      break;
    case "balletfriends":
      icon = <LocalIcon file="balletfriends.webp" alt="Balletfriends" />;
      break;
    case "bambulab":
      icon = <Icon icon="simple-icons:bambulab" color={socialNetworks.bambulab.color} />;
      break;
    case "bananapi":
      icon = <LocalIcon file="bananapi.webp" alt="Banana Pi Forum" />;
      break;
    case "bangumi":
      icon = <LocalIcon file="bangumi.webp" alt="Bangumi" />;
      break;
    case "baseballreference":
      icon = <Icon icon="mdi:baseball" color={socialNetworks.baseballreference.color} />;
      break;
    case "bashteplovent":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.bashteplovent.color} />;
      break;
    case "bazarcz":
      icon = <LocalIcon file="bazarcz.webp" alt="Bazar" />;
      break;
    case "bbclub":
      icon = <Icon icon="mdi:music" color={socialNetworks.bbclub.color} />;
      break;
    case "bbpress":
      icon = <LocalIcon file="bbpress.webp" alt="bbPress" />;
      break;
    case "bcetyt":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.bcetyt.color} />;
      break;
    case "beatl":
      icon = <Icon icon="mdi:music" color={socialNetworks.beatl.color} />;
      break;
    case "belmos":
      icon = <Icon icon="mdi:web" color={socialNetworks.belmos.color} />;
      break;
    case "berea":
      icon = <Icon icon="mdi:web" color={socialNetworks.berea.color} />;
      break;
    case "bestflowers":
      icon = <Icon icon="mdi:flower" color={socialNetworks.bestflowers.color} />;
      break;
    case "bestweapon":
      icon = <LocalIcon file="bestweapon.webp" alt="Bestweapon" />;
      break;
    case "betawiki":
      icon = <Icon icon="mdi:web" color={socialNetworks.betawiki.color} />;
      break;
    case "betsportslive":
      icon = <LocalIcon file="betsportslive.webp" alt="BetSportsLive" />;
      break;
    case "bezuzyteczna":
      icon = <LocalIcon file="bezuzyteczna.webp" alt="Bezuzyteczna" />;
      break;
    case "bgforum":
      icon = <LocalIcon file="bgforum.webp" alt="Bgforum" />;
      break;
    case "biggerpockets":
      icon = <LocalIcon file="biggerpockets.webp" alt="BiggerPockets" />;
      break;
    case "binhot":
      icon = <Icon icon="mdi:cube-outline" color={socialNetworks.binhot.color} />;
      break;
    case "bitcoinwiki":
      icon = <Icon icon="simple-icons:bitcoin" color={socialNetworks.bitcoinwiki.color} />;
      break;
    case "bitwarden":
      icon = <Icon icon="simple-icons:bitwarden" color={socialNetworks.bitwarden.color} />;
      break;
    case "blogipl":
      icon = <LocalIcon file="blogipl.webp" alt="Blogi" />;
      break;
    case "bluemoonmcfc":
      icon = <LocalIcon file="bluemoonmcfc.webp" alt="Bluemoon MCFC" />;
      break;
    case "bluesystems":
      icon = <LocalIcon file="bluesystems.webp" alt="Blue Systems Support" />;
      break;
    case "bluray":
      icon = <LocalIcon file="bluray.webp" alt="Blu-ray" />;
      break;
    case "bonsaimirai":
      icon = <LocalIcon file="bonsaimirai.webp" alt="Bonsai Mirai" />;
      break;
    case "bookandreader":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.bookandreader.color} />;
      break;
    case "bookmate":
      icon = <LocalIcon file="bookmate.webp" alt="Bookmate" />;
      break;
    case "brave":
      icon = <Icon icon="simple-icons:brave" color={socialNetworks.brave.color} />;
      break;
    case "brickimedia":
      icon = <LocalIcon file="brickimedia.webp" alt="Brickimedia" />;
      break;
    case "bugcrowd":
      icon = <Icon icon="simple-icons:bugcrowd" color={socialNetworks.bugcrowd.color} />;
      break;
    case "bulbapp":
      icon = <LocalIcon file="bulbapp.webp" alt="Bulbapp" />;
      break;
    case "buyforex":
      icon = <Icon icon="mdi:finance" color={socialNetworks.buyforex.color} />;
      break;
    case "byond":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.byond.color} />;
      break;
    case "cadaverzian":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.cadaverzian.color} />;
      break;
    case "caddy":
      icon = <Icon icon="simple-icons:caddy" color={socialNetworks.caddy.color} />;
      break;
    case "caravelgames":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.caravelgames.color} />;
      break;
    case "caringbridge":
      icon = <LocalIcon file="caringbridge.webp" alt="CaringBridge" />;
      break;
    case "cartalk":
      icon = <LocalIcon file="cartalk.webp" alt="Car Talk Community" />;
      break;
    case "castingcallclub":
      icon = <LocalIcon file="castingcallclub.webp" alt="CastingCallClub" />;
      break;
    case "catinboots":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.catinboots.color} />;
      break;
    case "cdaction":
      icon = <LocalIcon file="cdaction.webp" alt="CD-Action" />;
      break;
    case "cdapl":
      icon = <LocalIcon file="cdapl.webp" alt="CDA" />;
      break;
    case "centrspektr":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.centrspektr.color} />;
      break;
    case "chamsko":
      icon = <Icon icon="mdi:web" color={socialNetworks.chamsko.color} />;
      break;
    case "chelentano":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.chelentano.color} />;
      break;
    case "chiefdelphi":
      icon = <LocalIcon file="chiefdelphi.webp" alt="Chief Delphi" />;
      break;
    case "choicecommunity":
      icon = <LocalIcon file="choicecommunity.webp" alt="Choice Community" />;
      break;
    case "chomikuj":
      icon = <Icon icon="mdi:web" color={socialNetworks.chomikuj.color} />;
      break;
    case "chpoking":
      icon = <LocalIcon file="chpoking.webp" alt="Chpoking" />;
      break;
    case "christianvideo":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.christianvideo.color} />;
      break;
    case "cigarpass":
      icon = <LocalIcon file="cigarpass.webp" alt="Cigarpass" />;
      break;
    case "circleci":
      icon = <Icon icon="simple-icons:circleci" color={socialNetworks.circleci.color} />;
      break;
    case "clansg":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.clansg.color} />;
      break;
    case "cloudromance":
      icon = <Icon icon="mdi:web" color={socialNetworks.cloudromance.color} />;
      break;
    case "clubcomedy":
      icon = <Icon icon="mdi:drama-masks" color={socialNetworks.clubcomedy.color} />;
      break;
    case "cmet4uk":
      icon = <LocalIcon file="cmet4uk.webp" alt="Cmet4uk" />;
      break;
    case "cnblogs":
      icon = <LocalIcon file="cnblogs.webp" alt="Cnblogs Q&A" />;
      break;
    case "cockroachlabs":
      icon = <Icon icon="simple-icons:cockroachlabs" color={socialNetworks.cockroachlabs.color} />;
      break;
    case "codby":
      icon = <LocalIcon file="codby.webp" alt="Cod.by" />;
      break;
    case "codeseller":
      icon = <Icon icon="mdi:code-tags" color={socialNetworks.codeseller.color} />;
      break;
    case "coffeeworld":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.coffeeworld.color} />;
      break;
    case "coins":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.coins.color} />;
      break;
    case "cokcomua":
      icon = <Icon icon="mdi:web" color={socialNetworks.cokcomua.color} />;
      break;
    case "collectorscom":
      icon = <LocalIcon file="collectorscom.webp" alt="Collectors Universe" />;
      break;
    case "collegy":
      icon = <Icon icon="mdi:school" color={socialNetworks.collegy.color} />;
      break;
    case "combats":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.combats.color} />;
      break;
    case "commondreams":
      icon = <LocalIcon file="commondreams.webp" alt="Common Dreams" />;
      break;
    case "compline":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.compline.color} />;
      break;
    case "consumerium":
      icon = <Icon icon="mdi:web" color={socialNetworks.consumerium.color} />;
      break;
    case "coreelectronics":
      icon = <LocalIcon file="coreelectronics.webp" alt="Core Electronics Forum" />;
      break;
    case "corsair":
      icon = <Icon icon="simple-icons:corsair" color={socialNetworks.corsair.color} />;
      break;
    case "cosmoforum":
      icon = <Icon icon="mdi:flask" color={socialNetworks.cosmoforum.color} />;
      break;
    case "cpu":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.cpu.color} />;
      break;
    case "crossfaernet":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.crossfaernet.color} />;
      break;
    case "cruiserswiki":
      icon = <Icon icon="mdi:sail-boat" color={socialNetworks.cruiserswiki.color} />;
      break;
    case "cryptomator":
      icon = <Icon icon="simple-icons:cryptomator" color={socialNetworks.cryptomator.color} />;
      break;
    case "csi":
      icon = <Icon icon="mdi:flask" color={socialNetworks.csi.color} />;
      break;
    case "csru":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.csru.color} />;
      break;
    case "cssnn52rus":
      icon = <Icon icon="mdi:code-tags" color={socialNetworks.cssnn52rus.color} />;
      break;
    case "cssomsk":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.cssomsk.color} />;
      break;
    case "csstrikez":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.csstrikez.color} />;
      break;
    case "cxem":
      icon = <LocalIcon file="cxem.webp" alt="Cxem.net Forum" />;
      break;
    case "cybers":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.cybers.color} />;
      break;
    case "cydak":
      icon = <Icon icon="mdi:web" color={socialNetworks.cydak.color} />;
      break;
    case "cytoid":
      icon = <LocalIcon file="cytoid.webp" alt="Cytoid" />;
      break;
    case "dandwiki":
      icon = <Icon icon="mdi:dice-d20" color={socialNetworks.dandwiki.color} />;
      break;
    case "dangerousthings":
      icon = <LocalIcon file="dangerousthings.webp" alt="Dangerous Things" />;
      break;
    case "dasauge":
      icon = <Icon icon="mdi:palette" color={socialNetworks.dasauge.color} />;
      break;
    case "datacite":
      icon = <Icon icon="mdi:database" color={socialNetworks.datacite.color} />;
      break;
    case "daylapku":
      icon = <Icon icon="mdi:web" color={socialNetworks.daylapku.color} />;
      break;
    case "dcsoft":
      icon = <Icon icon="mdi:cellphone" color={socialNetworks.dcsoft.color} />;
      break;
    case "deathlegion":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.deathlegion.color} />;
      break;
    case "deathnote":
      icon = <Icon icon="mdi:animation" color={socialNetworks.deathnote.color} />;
      break;
    case "defcad":
      icon = <LocalIcon file="defcad.webp" alt="DEFCAD" />;
      break;
    case "demotywatory":
      icon = <Icon icon="mdi:web" color={socialNetworks.demotywatory.color} />;
      break;
    case "destructoidforums":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.destructoidforums.color} />;
      break;
    case "detectiveconanworld":
      icon = <Icon icon="mdi:animation" color={socialNetworks.detectiveconanworld.color} />;
      break;
    case "detstrana":
      icon = <LocalIcon file="detstrana.webp" alt="Detstrana" />;
      break;
    case "deutschauto68":
      icon = <Icon icon="mdi:car" color={socialNetworks.deutschauto68.color} />;
      break;
    case "devtribe":
      icon = <LocalIcon file="devtribe.webp" alt="Devtribe" />;
      break;
    case "dhelp":
      icon = <Icon icon="mdi:tag" color={socialNetworks.dhelp.color} />;
      break;
    case "diablocool":
      icon = <Icon icon="mdi:palette" color={socialNetworks.diablocool.color} />;
      break;
    case "dieselmastera":
      icon = <Icon icon="mdi:engine" color={socialNetworks.dieselmastera.color} />;
      break;
    case "dimitrov":
      icon = <Icon icon="mdi:forum" color={socialNetworks.dimitrov.color} />;
      break;
    case "discusspython":
      icon = <Icon icon="simple-icons:python" color={socialNetworks.discusspython.color} />;
      break;
    case "diveforum":
      icon = <Icon icon="mdi:diving-scuba" color={socialNetworks.diveforum.color} />;
      break;
    case "dizcs":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.dizcs.color} />;
      break;
    case "djfint":
      icon = <Icon icon="mdi:music" color={socialNetworks.djfint.color} />;
      break;
    case "dnbforum":
      icon = <LocalIcon file="dnbforum.webp" alt="Dnbforum" />;
      break;
    case "dndwiki":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.dndwiki.color} />;
      break;
    case "dobroeslovo":
      icon = <Icon icon="mdi:forum" color={socialNetworks.dobroeslovo.color} />;
      break;
    case "dockerforums":
      icon = <Icon icon="simple-icons:docker" color={socialNetworks.dockerforums.color} />;
      break;
    case "doctissimo":
      icon = <LocalIcon file="doctissimo.webp" alt="Doctissimo" />;
      break;
    case "dogcraft":
      icon = <LocalIcon file="dogcraft.webp" alt="Dogcraft" />;
      break;
    case "doytrunt":
      icon = <Icon icon="mdi:school" color={socialNetworks.doytrunt.color} />;
      break;
    case "dpilsscooter":
      icon = <Icon icon="mdi:web" color={socialNetworks.dpilsscooter.color} />;
      break;
    case "drawingsbase":
      icon = <Icon icon="mdi:palette" color={socialNetworks.drawingsbase.color} />;
      break;
    case "drdenisov":
      icon = <Icon icon="mdi:forum" color={socialNetworks.drdenisov.color} />;
      break;
    case "dremel":
      icon = <Icon icon="mdi:cart" color={socialNetworks.dremel.color} />;
      break;
    case "droners":
      icon = <LocalIcon file="droners.webp" alt="Droners" />;
      break;
    case "dubrovo":
      icon = <Icon icon="mdi:tag" color={socialNetworks.dubrovo.color} />;
      break;
    case "dumpz":
      icon = <Icon icon="mdi:forum" color={socialNetworks.dumpz.color} />;
      break;
    case "duno":
      icon = <LocalIcon file="duno.webp" alt="Duno" />;
      break;
    case "dushschool":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.dushschool.color} />;
      break;
    case "duz":
      icon = <Icon icon="mdi:web" color={socialNetworks.duz.color} />;
      break;
    case "dvkstyle":
      icon = <Icon icon="mdi:palette" color={socialNetworks.dvkstyle.color} />;
      break;
    case "dzhida2000":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.dzhida2000.color} />;
      break;
    case "eaforums":
      icon = <Icon icon="simple-icons:ea" color={socialNetworks.eaforums.color} />;
      break;
    case "easyen":
      icon = <LocalIcon file="easyen.webp" alt="Easyen" />;
      break;
    case "easyjob":
      icon = <LocalIcon file="easyjob.webp" alt="Easyjob" />;
      break;
    case "eclipse":
      icon = <Icon icon="simple-icons:eclipseide" color={socialNetworks.eclipse.color} />;
      break;
    case "edumonch":
      icon = <Icon icon="mdi:school" color={socialNetworks.edumonch.color} />;
      break;
    case "ekzoticsad":
      icon = <Icon icon="mdi:cards-playing" color={socialNetworks.ekzoticsad.color} />;
      break;
    case "elastic":
      icon = <Icon icon="simple-icons:elastic" color={socialNetworks.elastic.color} />;
      break;
    case "electroniccomponent":
      icon = <Icon icon="mdi:cart" color={socialNetworks.electroniccomponent.color} />;
      break;
    case "elektron":
      icon = <LocalIcon file="elektron.webp" alt="Elektron" />;
      break;
    case "elibrarytips":
      icon = <LocalIcon file="elibrarytips.webp" alt="eLibrary Tips" />;
      break;
    case "elpizza":
      icon = <Icon icon="mdi:post" color={socialNetworks.elpizza.color} />;
      break;
    case "encyc":
      icon = <LocalIcon file="encyc.webp" alt="Encyc" />;
      break;
    case "endeavouros":
      icon = <Icon icon="simple-icons:endeavouros" color={socialNetworks.endeavouros.color} />;
      break;
    case "endlessos":
      icon = <LocalIcon file="endlessos.webp" alt="Endless OS Community" />;
      break;
    case "endoctor":
      icon = <Icon icon="mdi:school" color={socialNetworks.endoctor.color} />;
      break;
    case "englishinfo":
      icon = <Icon icon="mdi:school" color={socialNetworks.englishinfo.color} />;
      break;
    case "engtips":
      icon = <Icon icon="mdi:wrench" color={socialNetworks.engtips.color} />;
      break;
    case "esetnod32":
      icon = <LocalIcon file="esetnod32.webp" alt="ESET Forum" />;
      break;
    case "evaveda":
      icon = <Icon icon="mdi:forum" color={socialNetworks.evaveda.color} />;
      break;
    case "evendim":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.evendim.color} />;
      break;
    case "excelworld":
      icon = <Icon icon="mdi:forum" color={socialNetworks.excelworld.color} />;
      break;
    case "exkavator":
      icon = <LocalIcon file="exkavator.webp" alt="Exkavator" />;
      break;
    case "exoduspay":
      icon = <LocalIcon file="exoduspay.webp" alt="Exodus Pay" />;
      break;
    case "eyorkie":
      icon = <Icon icon="mdi:web" color={socialNetworks.eyorkie.color} />;
      break;
    case "ezoterikaconversion":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ezoterikaconversion.color} />;
      break;
    case "fablero":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.fablero.color} />;
      break;
    case "facultyofmedicine":
      icon = <Icon icon="mdi:forum" color={socialNetworks.facultyofmedicine.color} />;
      break;
    case "faillyuboi":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.faillyuboi.color} />;
      break;
    case "faktopedia":
      icon = <Icon icon="mdi:forum" color={socialNetworks.faktopedia.color} />;
      break;
    case "fameswap":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.fameswap.color} />;
      break;
    case "fancentro":
      icon = <LocalIcon file="fancentro.webp" alt="Fancentro" />;
      break;
    case "fanfiktion":
      icon = <LocalIcon file="fanfiktion.webp" alt="Fanfiktion" />;
      break;
    case "faqusha":
      icon = <LocalIcon file="faqusha.webp" alt="Faqusha" />;
      break;
    case "fareast":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.fareast.color} />;
      break;
    case "fat":
      icon = <Icon icon="mdi:forum" color={socialNetworks.fat.color} />;
      break;
    case "fcdin":
      icon = <LocalIcon file="fcdin.webp" alt="Fcdin" />;
      break;
    case "fclmnews":
      icon = <LocalIcon file="fclmnews.webp" alt="FCLM News" />;
      break;
    case "fdroid":
      icon = <Icon icon="simple-icons:fdroid" color={socialNetworks.fdroid.color} />;
      break;
    case "ffmbio":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.ffmbio.color} />;
      break;
    case "ficwriter":
      icon = <LocalIcon file="ficwriter.webp" alt="Ficwriter" />;
      break;
    case "finanzfrage":
      icon = <LocalIcon file="finanzfrage.webp" alt="Finanzfrage" />;
      break;
    case "finforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.finforum.color} />;
      break;
    case "finmessage":
      icon = <LocalIcon file="finmessage.webp" alt="Finmessage" />;
      break;
    case "firesofheaven":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.firesofheaven.color} />;
      break;
    case "fireteam":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.fireteam.color} />;
      break;
    case "fiveieight":
      icon = <Icon icon="mdi:web" color={socialNetworks.fiveieight.color} />;
      break;
    case "fivelevel":
      icon = <Icon icon="mdi:web" color={socialNetworks.fivelevel.color} />;
      break;
    case "flamp":
      icon = <LocalIcon file="flamp.webp" alt="Flamp" />;
      break;
    case "flarum":
      icon = <LocalIcon file="flarum.webp" alt="Flarum Community" />;
      break;
    case "flipsnack":
      icon = <LocalIcon file="flipsnack.webp" alt="Flipsnack" />;
      break;
    case "flirtic":
      icon = <LocalIcon file="flirtic.webp" alt="Flirtic" />;
      break;
    case "fly":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.fly.color} />;
      break;
    case "focuspocus":
      icon = <Icon icon="mdi:school" color={socialNetworks.focuspocus.color} />;
      break;
    case "fordating":
      icon = <Icon icon="mdi:forum" color={socialNetworks.fordating.color} />;
      break;
    case "forextrader":
      icon = <Icon icon="mdi:finance" color={socialNetworks.forextrader.color} />;
      break;
    case "forum29":
      icon = <LocalIcon file="forum29.webp" alt="Forum29" />;
      break;
    case "forumhistory":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumhistory.color} />;
      break;
    case "forumprawne":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumprawne.color} />;
      break;
    case "forumsi":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumsi.color} />;
      break;
    case "forumtauck":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.forumtauck.color} />;
      break;
    case "forumyuristov":
      icon = <Icon icon="mdi:forum" color={socialNetworks.forumyuristov.color} />;
      break;
    case "fotka":
      icon = <LocalIcon file="fotka.webp" alt="Fotka" />;
      break;
    case "fourfourzeroonezeroone":
      icon = <Icon icon="mdi:school" color={socialNetworks.fourfourzeroonezeroone.color} />;
      break;
    case "fourninefoureight":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.fourninefoureight.color} />;
      break;
    case "fourxfourtomsk":
      icon = <Icon icon="mdi:car" color={socialNetworks.fourxfourtomsk.color} />;
      break;
    case "foxrecord":
      icon = <Icon icon="mdi:post" color={socialNetworks.foxrecord.color} />;
      break;
    case "freelancebay":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.freelancebay.color} />;
      break;
    case "freelancedashua":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.freelancedashua.color} />;
      break;
    case "freeproxy":
      icon = <Icon icon="mdi:post" color={socialNetworks.freeproxy.color} />;
      break;
    case "fsmodsrus":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.fsmodsrus.color} />;
      break;
    case "fstkolos":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.fstkolos.color} />;
      break;
    case "funcom":
      icon = <LocalIcon file="funcom.webp" alt="Funcom" />;
      break;
    case "futajiststudio":
      icon = <Icon icon="mdi:video" color={socialNetworks.futajiststudio.color} />;
      break;
    case "g2g":
      icon = <Icon icon="simple-icons:g2g" color={socialNetworks.g2g.color} />;
      break;
    case "gadjet":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.gadjet.color} />;
      break;
    case "galactictalk":
      icon = <LocalIcon file="galactictalk.webp" alt="GalacticTalk" />;
      break;
    case "gamedevnet":
      icon = <LocalIcon file="gamedevnet.webp" alt="GameDev.net" />;
      break;
    case "gamedevtv":
      icon = <LocalIcon file="gamedevtv.webp" alt="GameDev.tv" />;
      break;
    case "gamemobi":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.gamemobi.color} />;
      break;
    case "gamerevolution":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.gamerevolution.color} />;
      break;
    case "gamesfrm":
      icon = <Icon icon="mdi:forum" color={socialNetworks.gamesfrm.color} />;
      break;
    case "garagepunk":
      icon = <Icon icon="mdi:music" color={socialNetworks.garagepunk.color} />;
      break;
    case "gardeningforums":
      icon = <LocalIcon file="gardeningforums.webp" alt="Gardening Forums" />;
      break;
    case "garminucoz":
      icon = <Icon icon="mdi:map-marker" color={socialNetworks.garminucoz.color} />;
      break;
    case "garudalinux":
      icon = <Icon icon="simple-icons:garudalinux" color={socialNetworks.garudalinux.color} />;
      break;
    case "gebirgs":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.gebirgs.color} />;
      break;
    case "gemsofwar":
      icon = <LocalIcon file="gemsofwar.webp" alt="Gems of War" />;
      break;
    case "german242":
      icon = <LocalIcon file="german242.webp" alt="German242" />;
      break;
    case "gesundheitsfrage":
      icon = <LocalIcon file="gesundheitsfrage.webp" alt="Gesundheitsfrage" />;
      break;
    case "ghostforum":
      icon = <Icon icon="simple-icons:ghost" color={socialNetworks.ghostforum.color} />;
      break;
    case "gipsysteam":
      icon = <LocalIcon file="gipsysteam.webp" alt="GipsysTeam" />;
      break;
    case "gitcode":
      icon = <Icon icon="simple-icons:gitcode" color={socialNetworks.gitcode.color} />;
      break;
    case "gitlabforum":
      icon = <Icon icon="simple-icons:gitlab" color={socialNetworks.gitlabforum.color} />;
      break;
    case "glbyh":
      icon = <Icon icon="mdi:forum" color={socialNetworks.glbyh.color} />;
      break;
    case "globulation2":
      icon = <LocalIcon file="globulation2.webp" alt="Globulation2" />;
      break;
    case "glowforge":
      icon = <LocalIcon file="glowforge.webp" alt="Glowforge Community" />;
      break;
    case "goba6372":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.goba6372.color} />;
      break;
    case "goddamn":
      icon = <Icon icon="mdi:music" color={socialNetworks.goddamn.color} />;
      break;
    case "goha":
      icon = <Icon icon="mdi:forum" color={socialNetworks.goha.color} />;
      break;
    case "golangbridge":
      icon = <LocalIcon file="golangbridge.webp" alt="Golang Bridge" />;
      break;
    case "golasavkfree":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.golasavkfree.color} />;
      break;
    case "golfmonthly":
      icon = <LocalIcon file="golfmonthly.webp" alt="Golf Monthly" />;
      break;
    case "gomeldogs":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.gomeldogs.color} />;
      break;
    case "gong":
      icon = <Icon icon="mdi:forum" color={socialNetworks.gong.color} />;
      break;
    case "goodmusic":
      icon = <Icon icon="mdi:web" color={socialNetworks.goodmusic.color} />;
      break;
    case "goroskop":
      icon = <Icon icon="mdi:post" color={socialNetworks.goroskop.color} />;
      break;
    case "gorposmos":
      icon = <LocalIcon file="gorposmos.webp" alt="Gorposmos" />;
      break;
    case "gozenhost":
      icon = <Icon icon="mdi:web" color={socialNetworks.gozenhost.color} />;
      break;
    case "gradleplugins":
      icon = <Icon icon="simple-icons:gradle" color={socialNetworks.gradleplugins.color} />;
      break;
    case "gribnikikybani":
      icon = <LocalIcon file="gribnikikybani.webp" alt="Gribnikikybani" />;
      break;
    case "grodnofish":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.grodnofish.color} />;
      break;
    case "gsmstandart":
      icon = <Icon icon="mdi:cart" color={socialNetworks.gsmstandart.color} />;
      break;
    case "gtafanzone":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.gtafanzone.color} />;
      break;
    case "gtgarazh":
      icon = <Icon icon="mdi:car" color={socialNetworks.gtgarazh.color} />;
      break;
    case "gulfcoastgunforum":
      icon = <LocalIcon file="gulfcoastgunforum.webp" alt="Gulfcoastgunforum" />;
      break;
    case "gym5":
      icon = <Icon icon="mdi:school" color={socialNetworks.gym5.color} />;
      break;
    case "hackapp":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.hackapp.color} />;
      break;
    case "hairmaniac":
      icon = <LocalIcon file="hairmaniac.webp" alt="Hairmaniac" />;
      break;
    case "halol":
      icon = <LocalIcon file="halol.webp" alt="Halol" />;
      break;
    case "haogan":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.haogan.color} />;
      break;
    case "hashicorp":
      icon = <Icon icon="simple-icons:hashicorp" color={socialNetworks.hashicorp.color} />;
      break;
    case "haskell":
      icon = <Icon icon="simple-icons:haskell" color={socialNetworks.haskell.color} />;
      break;
    case "hiveos":
      icon = <Icon icon="mdi:forum" color={socialNetworks.hiveos.color} />;
      break;
    case "hmkids":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.hmkids.color} />;
      break;
    case "hokage":
      icon = <Icon icon="mdi:animation" color={socialNetworks.hokage.color} />;
      break;
    case "holodilshchik":
      icon = <Icon icon="mdi:school" color={socialNetworks.holodilshchik.color} />;
      break;
    case "homeassistant":
      icon = <Icon icon="simple-icons:homeassistant" color={socialNetworks.homeassistant.color} />;
      break;
    case "hostingkitchen":
      icon = <Icon icon="mdi:web" color={socialNetworks.hostingkitchen.color} />;
      break;
    case "houserepairtalk":
      icon = <LocalIcon file="houserepairtalk.webp" alt="Houserepairtalk" />;
      break;
    case "huel":
      icon = <LocalIcon file="huel.webp" alt="Huel Community" />;
      break;
    case "huelna":
      icon = <LocalIcon file="huelna.webp" alt="Huel Community NA" />;
      break;
    case "hulyaganka":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.hulyaganka.color} />;
      break;
    case "hyundaitruckclub":
      icon = <Icon icon="mdi:car" color={socialNetworks.hyundaitruckclub.color} />;
      break;
    case "ibmt":
      icon = <Icon icon="mdi:school" color={socialNetworks.ibmt.color} />;
      break;
    case "icons8":
      icon = <Icon icon="simple-icons:icons8" color={socialNetworks.icons8.color} />;
      break;
    case "icook":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.icook.color} />;
      break;
    case "icqbot":
      icon = <Icon icon="mdi:chat" color={socialNetworks.icqbot.color} />;
      break;
    case "icqtelefon":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.icqtelefon.color} />;
      break;
    case "icu":
      icon = <Icon icon="mdi:forum" color={socialNetworks.icu.color} />;
      break;
    case "igraonline":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.igraonline.color} />;
      break;
    case "igrarena":
      icon = <Icon icon="mdi:forum" color={socialNetworks.igrarena.color} />;
      break;
    case "igromania":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.igromania.color} />;
      break;
    case "iknifecollector":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.iknifecollector.color} />;
      break;
    case "ikorovka":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ikorovka.color} />;
      break;
    case "ilan":
      icon = <Icon icon="mdi:heart" color={socialNetworks.ilan.color} />;
      break;
    case "illogicopedia":
      icon = <LocalIcon file="illogicopedia.webp" alt="Illogicopedia" />;
      break;
    case "immigration":
      icon = <LocalIcon file="immigration.webp" alt="Immigration" />;
      break;
    case "indianagunowners":
      icon = <LocalIcon file="indianagunowners.webp" alt="Indiana Gun Owners" />;
      break;
    case "indiegala":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.indiegala.color} />;
      break;
    case "inetjob":
      icon = <Icon icon="mdi:forum" color={socialNetworks.inetjob.color} />;
      break;
    case "infiniteflight":
      icon = <LocalIcon file="infiniteflight.webp" alt="Infinite Flight Community" />;
      break;
    case "infopps":
      icon = <Icon icon="mdi:forum" color={socialNetworks.infopps.color} />;
      break;
    case "infura":
      icon = <LocalIcon file="infura.webp" alt="Infura" />;
      break;
    case "insanejournal":
      icon = <Icon icon="mdi:post" color={socialNetworks.insanejournal.color} />;
      break;
    case "invalidnost":
      icon = <Icon icon="mdi:forum" color={socialNetworks.invalidnost.color} />;
      break;
    case "inventables":
      icon = <LocalIcon file="inventables.webp" alt="Inventables" />;
      break;
    case "ionicframework":
      icon = <Icon icon="simple-icons:ionic" color={socialNetworks.ionicframework.color} />;
      break;
    case "ipfs":
      icon = <Icon icon="simple-icons:ipfs" color={socialNetworks.ipfs.color} />;
      break;
    case "iptvfree":
      icon = <Icon icon="mdi:video" color={socialNetworks.iptvfree.color} />;
      break;
    case "irteam":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.irteam.color} />;
      break;
    case "ishtarcollective":
      icon = <LocalIcon file="ishtarcollective.webp" alt="Ishtar Collective" />;
      break;
    case "israelrent":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.israelrent.color} />;
      break;
    case "itvdn":
      icon = <LocalIcon file="itvdn.webp" alt="ITVDN Forum" />;
      break;
    case "izmailonline":
      icon = <Icon icon="mdi:web" color={socialNetworks.izmailonline.color} />;
      break;
    case "japanesedolls":
      icon = <Icon icon="mdi:palette" color={socialNetworks.japanesedolls.color} />;
      break;
    case "japara":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.japara.color} />;
      break;
    case "jbzd":
      icon = <LocalIcon file="jbzd.webp" alt="JBZD" />;
      break;
    case "jeja":
      icon = <LocalIcon file="jeja.webp" alt="Jeja" />;
      break;
    case "jekauto":
      icon = <Icon icon="mdi:car" color={socialNetworks.jekauto.color} />;
      break;
    case "jellyfinweblate":
      icon = <Icon icon="simple-icons:jellyfin" color={socialNetworks.jellyfinweblate.color} />;
      break;
    case "jer":
      icon = <Icon icon="mdi:forum" color={socialNetworks.jer.color} />;
      break;
    case "joemonster":
      icon = <LocalIcon file="joemonster.webp" alt="Joemonster" />;
      break;
    case "jog":
      icon = <Icon icon="mdi:car" color={socialNetworks.jog.color} />;
      break;
    case "joplinapp":
      icon = <Icon icon="simple-icons:joplin" color={socialNetworks.joplinapp.color} />;
      break;
    case "juce":
      icon = <Icon icon="simple-icons:juce" color={socialNetworks.juce.color} />;
      break;
    case "julialang":
      icon = <Icon icon="simple-icons:julia" color={socialNetworks.julialang.color} />;
      break;
    case "jump":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.jump.color} />;
      break;
    case "jupyter":
      icon = <Icon icon="simple-icons:jupyter" color={socialNetworks.jupyter.color} />;
      break;
    case "juventuz":
      icon = <Icon icon="mdi:soccer" color={socialNetworks.juventuz.color} />;
      break;
    case "kakvkontakte":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.kakvkontakte.color} />;
      break;
    case "kali":
      icon = <Icon icon="mdi:forum" color={socialNetworks.kali.color} />;
      break;
    case "kaosx":
      icon = <LocalIcon file="kaosx.webp" alt="KaOS" />;
      break;
    case "karkulis":
      icon = <LocalIcon file="karkulis.webp" alt="Karkulis" />;
      break;
    case "kazamuza":
      icon = <Icon icon="mdi:music" color={socialNetworks.kazamuza.color} />;
      break;
    case "kerch":
      icon = <Icon icon="mdi:forum" color={socialNetworks.kerch.color} />;
      break;
    case "kfirzahav":
      icon = <Icon icon="mdi:music" color={socialNetworks.kfirzahav.color} />;
      break;
    case "kidicaruswiki":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.kidicaruswiki.color} />;
      break;
    case "killer":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.killer.color} />;
      break;
    case "kinohit":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.kinohit.color} />;
      break;
    case "kinokopilka":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.kinokopilka.color} />;
      break;
    case "kinotvforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.kinotvforum.color} />;
      break;
    case "klerk":
      icon = <LocalIcon file="klerk.webp" alt="Klerk" />;
      break;
    case "klubskidok":
      icon = <Icon icon="mdi:cart" color={socialNetworks.klubskidok.color} />;
      break;
    case "knigionline":
      icon = <Icon icon="mdi:forum" color={socialNetworks.knigionline.color} />;
      break;
    case "kodular":
      icon = <Icon icon="simple-icons:kodular" color={socialNetworks.kodular.color} />;
      break;
    case "komarovo":
      icon = <Icon icon="mdi:forum" color={socialNetworks.komarovo.color} />;
      break;
    case "kompas3d":
      icon = <Icon icon="mdi:cube-outline" color={socialNetworks.kompas3d.color} />;
      break;
    case "konibodom":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.konibodom.color} />;
      break;
    case "kontrolkalemi":
      icon = <LocalIcon file="kontrolkalemi.webp" alt="Kontrolkalemi" />;
      break;
    case "koteltorg":
      icon = <Icon icon="mdi:post" color={socialNetworks.koteltorg.color} />;
      break;
    case "kotik":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.kotik.color} />;
      break;
    case "kotlinlang":
      icon = <Icon icon="simple-icons:kotlin" color={socialNetworks.kotlinlang.color} />;
      break;
    case "kpyto":
      icon = <Icon icon="mdi:web" color={socialNetworks.kpyto.color} />;
      break;
    case "kraskiprazdnika":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.kraskiprazdnika.color} />;
      break;
    case "krum":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.krum.color} />;
      break;
    case "ksmsp":
      icon = <Icon icon="mdi:web" color={socialNetworks.ksmsp.color} />;
      break;
    case "kuban":
      icon = <Icon icon="mdi:forum" color={socialNetworks.kuban.color} />;
      break;
    case "kubernetes":
      icon = <Icon icon="simple-icons:kubernetes" color={socialNetworks.kubernetes.color} />;
      break;
    case "kursk46":
      icon = <Icon icon="mdi:forum" color={socialNetworks.kursk46.color} />;
      break;
    case "kuzini":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.kuzini.color} />;
      break;
    case "l2best":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.l2best.color} />;
      break;
    case "lai":
      icon = <Icon icon="mdi:forum" color={socialNetworks.lai.color} />;
      break;
    case "lakshmifm":
      icon = <Icon icon="mdi:forum" color={socialNetworks.lakshmifm.color} />;
      break;
    case "lancerx":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.lancerx.color} />;
      break;
    case "languagereactor":
      icon = <LocalIcon file="languagereactor.webp" alt="Language Reactor" />;
      break;
    case "laserwar48":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.laserwar48.color} />;
      break;
    case "lawrencesystems":
      icon = <LocalIcon file="lawrencesystems.webp" alt="Lawrence Systems Forums" />;
      break;
    case "league17":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.league17.color} />;
      break;
    case "leasehackr":
      icon = <LocalIcon file="leasehackr.webp" alt="Leasehackr" />;
      break;
    case "leetcodecn":
      icon = <Icon icon="simple-icons:leetcode" color={socialNetworks.leetcodecn.color} />;
      break;
    case "legendarusveo":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.legendarusveo.color} />;
      break;
    case "lesbeyanka":
      icon = <Icon icon="mdi:forum" color={socialNetworks.lesbeyanka.color} />;
      break;
    case "letsencrypt":
      icon = <Icon icon="simple-icons:letsencrypt" color={socialNetworks.letsencrypt.color} />;
      break;
    case "libreviews":
      icon = <Icon icon="mdi:forum" color={socialNetworks.libreviews.color} />;
      break;
    case "librusec":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.librusec.color} />;
      break;
    case "liderdzr":
      icon = <Icon icon="mdi:car" color={socialNetworks.liderdzr.color} />;
      break;
    case "lifeway":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.lifeway.color} />;
      break;
    case "linuxfoundation":
      icon = <Icon icon="simple-icons:linuxfoundation" color={socialNetworks.linuxfoundation.color} />;
      break;
    case "linuxmint":
      icon = <Icon icon="simple-icons:linuxmint" color={socialNetworks.linuxmint.color} />;
      break;
    case "litgeroy":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.litgeroy.color} />;
      break;
    case "liveexpert":
      icon = <LocalIcon file="liveexpert.webp" alt="Liveexpert" />;
      break;
    case "liza":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.liza.color} />;
      break;
    case "lname":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.lname.color} />;
      break;
    case "lock":
      icon = <LocalIcon file="lock.webp" alt="Lock" />;
      break;
    case "losinopetrovsk":
      icon = <Icon icon="mdi:forum" color={socialNetworks.losinopetrovsk.color} />;
      break;
    case "lottiefiles":
      icon = <Icon icon="simple-icons:lottiefiles" color={socialNetworks.lottiefiles.color} />;
      break;
    case "love2d":
      icon = <LocalIcon file="love2d.webp" alt="LÖVE" />;
      break;
    case "lovemagic":
      icon = <Icon icon="mdi:heart" color={socialNetworks.lovemagic.color} />;
      break;
    case "lowcygier":
      icon = <LocalIcon file="lowcygier.webp" alt="Łowcy Gier" />;
      break;
    case "macplanete":
      icon = <Icon icon="mdi:forum" color={socialNetworks.macplanete.color} />;
      break;
    case "magicsquare":
      icon = <Icon icon="mdi:school" color={socialNetworks.magicsquare.color} />;
      break;
    case "magictarot":
      icon = <Icon icon="mdi:forum" color={socialNetworks.magictarot.color} />;
      break;
    case "maidenfans":
      icon = <Icon icon="mdi:music" color={socialNetworks.maidenfans.color} />;
      break;
    case "majorgeeks":
      icon = <LocalIcon file="majorgeeks.webp" alt="MajorGeeks" />;
      break;
    case "mamasuper":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.mamasuper.color} />;
      break;
    case "mamkipapki":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.mamkipapki.color} />;
      break;
    case "mansonwiki":
      icon = <LocalIcon file="mansonwiki.webp" alt="The Marilyn Manson Wiki" />;
      break;
    case "manuals":
      icon = <LocalIcon file="manuals.webp" alt="Manuals" />;
      break;
    case "mapillary":
      icon = <Icon icon="simple-icons:mapillary" color={socialNetworks.mapillary.color} />;
      break;
    case "mapmytracks":
      icon = <Icon icon="mdi:map-marker" color={socialNetworks.mapmytracks.color} />;
      break;
    case "margaritas":
      icon = <Icon icon="mdi:forum" color={socialNetworks.margaritas.color} />;
      break;
    case "mariupol4x4":
      icon = <Icon icon="mdi:car" color={socialNetworks.mariupol4x4.color} />;
      break;
    case "marshmallowqa":
      icon = <LocalIcon file="marshmallowqa.webp" alt="Marshmallow" />;
      break;
    case "marym":
      icon = <Icon icon="mdi:web" color={socialNetworks.marym.color} />;
      break;
    case "massageanywhere":
      icon = <Icon icon="mdi:heart" color={socialNetworks.massageanywhere.color} />;
      break;
    case "masseffectuniverse":
      icon = <LocalIcon file="masseffectuniverse.webp" alt="Mass Effect Universe" />;
      break;
    case "masterkrasok":
      icon = <LocalIcon file="masterkrasok.webp" alt="Masterkrasok" />;
      break;
    case "mastersoap":
      icon = <Icon icon="mdi:post" color={socialNetworks.mastersoap.color} />;
      break;
    case "mattermost":
      icon = <Icon icon="simple-icons:mattermost" color={socialNetworks.mattermost.color} />;
      break;
    case "mcbans":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.mcbans.color} />;
      break;
    case "mcstan":
      icon = <LocalIcon file="mcstan.webp" alt="The Stan Forums" />;
      break;
    case "mediatv":
      icon = <Icon icon="mdi:music" color={socialNetworks.mediatv.color} />;
      break;
    case "mednolit":
      icon = <Icon icon="mdi:palette" color={socialNetworks.mednolit.color} />;
      break;
    case "medvestnic":
      icon = <Icon icon="mdi:medical-bag" color={socialNetworks.medvestnic.color} />;
      break;
    case "meendo":
      icon = <Icon icon="mdi:web" color={socialNetworks.meendo.color} />;
      break;
    case "megane2":
      icon = <Icon icon="mdi:car" color={socialNetworks.megane2.color} />;
      break;
    case "memory57":
      icon = <Icon icon="mdi:web" color={socialNetworks.memory57.color} />;
      break;
    case "memorylol":
      icon = <Icon icon="mdi:history" color={socialNetworks.memorylol.color} />;
      break;
    case "metadiscourse":
      icon = <Icon icon="simple-icons:discourse" color={socialNetworks.metadiscourse.color} />;
      break;
    case "metroman":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.metroman.color} />;
      break;
    case "mfd":
      icon = <Icon icon="mdi:forum" color={socialNetworks.mfd.color} />;
      break;
    case "microcap":
      icon = <Icon icon="mdi:forum" color={socialNetworks.microcap.color} />;
      break;
    case "mikeleloconte":
      icon = <Icon icon="mdi:music" color={socialNetworks.mikeleloconte.color} />;
      break;
    case "milnerelena":
      icon = <Icon icon="mdi:web" color={socialNetworks.milnerelena.color} />;
      break;
    case "mindmachine":
      icon = <LocalIcon file="mindmachine.webp" alt="Mindmachine" />;
      break;
    case "minnac":
      icon = <Icon icon="mdi:web" color={socialNetworks.minnac.color} />;
      break;
    case "mipped":
      icon = <LocalIcon file="mipped.webp" alt="Mipped" />;
      break;
    case "mircasov":
      icon = <Icon icon="mdi:cart" color={socialNetworks.mircasov.color} />;
      break;
    case "mistoodesa":
      icon = <Icon icon="mdi:forum" color={socialNetworks.mistoodesa.color} />;
      break;
    case "mistral":
      icon = <Icon icon="mdi:car" color={socialNetworks.mistral.color} />;
      break;
    case "mistrzowie":
      icon = <Icon icon="mdi:forum" color={socialNetworks.mistrzowie.color} />;
      break;
    case "mixlr":
      icon = <LocalIcon file="mixlr.webp" alt="Mixlr" />;
      break;
    case "mmorpg":
      icon = <LocalIcon file="mmorpg.webp" alt="MMORPG.com" />;
      break;
    case "mobrep":
      icon = <LocalIcon file="mobrep.webp" alt="Mobrep" />;
      break;
    case "moedelo":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.moedelo.color} />;
      break;
    case "moegirl":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.moegirl.color} />;
      break;
    case "moments":
      icon = <LocalIcon file="moments.webp" alt="Moments" />;
      break;
    case "moneysfirst":
      icon = <Icon icon="mdi:bitcoin" color={socialNetworks.moneysfirst.color} />;
      break;
    case "morozovka":
      icon = <Icon icon="mdi:forum" color={socialNetworks.morozovka.color} />;
      break;
    case "morshansk":
      icon = <Icon icon="mdi:map-marker" color={socialNetworks.morshansk.color} />;
      break;
    case "moskovia":
      icon = <Icon icon="mdi:map-marker" color={socialNetworks.moskovia.color} />;
      break;
    case "motokiller":
      icon = <Icon icon="mdi:car" color={socialNetworks.motokiller.color} />;
      break;
    case "motorka":
      icon = <Icon icon="mdi:forum" color={socialNetworks.motorka.color} />;
      break;
    case "motorradfrage":
      icon = <LocalIcon file="motorradfrage.webp" alt="Motorradfrage" />;
      break;
    case "mototravels":
      icon = <LocalIcon file="mototravels.webp" alt="Moto Travels" />;
      break;
    case "movi":
      icon = <Icon icon="mdi:post" color={socialNetworks.movi.color} />;
      break;
    case "moxvouz":
      icon = <Icon icon="mdi:forum" color={socialNetworks.moxvouz.color} />;
      break;
    case "mozganet":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.mozganet.color} />;
      break;
    case "muffingroup":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.muffingroup.color} />;
      break;
    case "music2dj":
      icon = <Icon icon="mdi:music" color={socialNetworks.music2dj.color} />;
      break;
    case "musicbunker":
      icon = <Icon icon="mdi:music" color={socialNetworks.musicbunker.color} />;
      break;
    case "musicone":
      icon = <Icon icon="mdi:music" color={socialNetworks.musicone.color} />;
      break;
    case "muzika":
      icon = <Icon icon="mdi:video" color={socialNetworks.muzika.color} />;
      break;
    case "myfootball1":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.myfootball1.color} />;
      break;
    case "mymailru":
      icon = <LocalIcon file="mymailru.webp" alt="Мой Мир" />;
      break;
    case "mymfans":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.mymfans.color} />;
      break;
    case "mytechbook":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.mytechbook.color} />;
      break;
    case "mytrans":
      icon = <Icon icon="mdi:forum" color={socialNetworks.mytrans.color} />;
      break;
    case "mytucson":
      icon = <Icon icon="mdi:car" color={socialNetworks.mytucson.color} />;
      break;
    case "n8n":
      icon = <Icon icon="simple-icons:n8n" color={socialNetworks.n8n.color} />;
      break;
    case "nameberry":
      icon = <LocalIcon file="nameberry.webp" alt="Nameberry" />;
      break;
    case "narutofan":
      icon = <Icon icon="mdi:animation" color={socialNetworks.narutofan.color} />;
      break;
    case "narutorolegame":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.narutorolegame.color} />;
      break;
    case "necromancers":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.necromancers.color} />;
      break;
    case "nelubit":
      icon = <Icon icon="mdi:heart" color={socialNetworks.nelubit.color} />;
      break;
    case "newlcn":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.newlcn.color} />;
      break;
    case "nfclub":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.nfclub.color} />;
      break;
    case "nicefriendcats":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.nicefriendcats.color} />;
      break;
    case "nicemusic":
      icon = <Icon icon="mdi:music" color={socialNetworks.nicemusic.color} />;
      break;
    case "nicholassparks":
      icon = <Icon icon="mdi:book-open-page-variant" color={socialNetworks.nicholassparks.color} />;
      break;
    case "niflheim":
      icon = <Icon icon="mdi:forum" color={socialNetworks.niflheim.color} />;
      break;
    case "nineinteri":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.nineinteri.color} />;
      break;
    case "ninetysix":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ninetysix.color} />;
      break;
    case "nkcs":
      icon = <LocalIcon file="nkcs.webp" alt="Nk Cs" />;
      break;
    case "nodered":
      icon = <Icon icon="simple-icons:nodered" color={socialNetworks.nodered.color} />;
      break;
    case "nojayurt":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.nojayurt.color} />;
      break;
    case "nokia6233":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.nokia6233.color} />;
      break;
    case "novomoskovsk":
      icon = <Icon icon="mdi:tag" color={socialNetworks.novomoskovsk.color} />;
      break;
    case "nuzar":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.nuzar.color} />;
      break;
    case "nvidiadevforum":
      icon = <Icon icon="simple-icons:nvidia" color={socialNetworks.nvidiadevforum.color} />;
      break;
    case "nyaa":
      icon = <Icon icon="mdi:animation" color={socialNetworks.nyaa.color} />;
      break;
    case "nygunforum":
      icon = <LocalIcon file="nygunforum.webp" alt="Nygunforum" />;
      break;
    case "obkon":
      icon = <Icon icon="mdi:forum" color={socialNetworks.obkon.color} />;
      break;
    case "obmanunet":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.obmanunet.color} />;
      break;
    case "odonvv":
      icon = <Icon icon="mdi:forum" color={socialNetworks.odonvv.color} />;
      break;
    case "ofc65":
      icon = <LocalIcon file="ofc65.webp" alt="Ofc65" />;
      break;
    case "officiating":
      icon = <Icon icon="mdi:forum" color={socialNetworks.officiating.color} />;
      break;
    case "oglaszamy24h":
      icon = <LocalIcon file="oglaszamy24h.webp" alt="Oglaszamy24h" />;
      break;
    case "okmorgru":
      icon = <Icon icon="mdi:post" color={socialNetworks.okmorgru.color} />;
      break;
    case "olx":
      icon = <LocalIcon file="olx.webp" alt="OLX" />;
      break;
    case "omglol":
      icon = <LocalIcon file="omglol.webp" alt="omg.lol" />;
      break;
    case "onanizmclub":
      icon = <LocalIcon file="onanizmclub.webp" alt="Onanizm" />;
      break;
    case "onceuponatimetv":
      icon = <Icon icon="mdi:forum" color={socialNetworks.onceuponatimetv.color} />;
      break;
    case "onesevenninesixweb":
      icon = <LocalIcon file="onesevenninesixweb.webp" alt="1796web" />;
      break;
    case "onetwothreerf":
      icon = <LocalIcon file="onetwothreerf.webp" alt="123RF" />;
      break;
    case "onezeroonevzvod":
      icon = <LocalIcon file="onezeroonevzvod.webp" alt="101vzvod" />;
      break;
    case "onlinemovies":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.onlinemovies.color} />;
      break;
    case "oopkmoskva":
      icon = <Icon icon="mdi:tag" color={socialNetworks.oopkmoskva.color} />;
      break;
    case "openaire":
      icon = <LocalIcon file="openaire.webp" alt="OpenAIRE" />;
      break;
    case "openconversational":
      icon = <LocalIcon file="openconversational.webp" alt="Openconversational" />;
      break;
    case "openframeworks":
      icon = <Icon icon="mdi:code-tags" color={socialNetworks.openframeworks.color} />;
      break;
    case "openwrt":
      icon = <Icon icon="simple-icons:openwrt" color={socialNetworks.openwrt.color} />;
      break;
    case "oskolfishing":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.oskolfishing.color} />;
      break;
    case "ourdjtalk":
      icon = <LocalIcon file="ourdjtalk.webp" alt="OurDJTalk" />;
      break;
    case "ovo":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ovo.color} />;
      break;
    case "ozcardtrader":
      icon = <LocalIcon file="ozcardtrader.webp" alt="Ozcardtrader" />;
      break;
    case "ozvolvo":
      icon = <LocalIcon file="ozvolvo.webp" alt="Oz Volvo" />;
      break;
    case "p1rat":
      icon = <Icon icon="mdi:music" color={socialNetworks.p1rat.color} />;
      break;
    case "p2pu":
      icon = <LocalIcon file="p2pu.webp" alt="P2PU Community" />;
      break;
    case "p38forum":
      icon = <Icon icon="mdi:car" color={socialNetworks.p38forum.color} />;
      break;
    case "p8ntballer":
      icon = <Icon icon="mdi:forum" color={socialNetworks.p8ntballer.color} />;
      break;
    case "panzer35":
      icon = <Icon icon="mdi:medal" color={socialNetworks.panzer35.color} />;
      break;
    case "partner":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.partner.color} />;
      break;
    case "peppernl":
      icon = <LocalIcon file="peppernl.webp" alt="Pepper NL" />;
      break;
    case "pewex":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.pewex.color} />;
      break;
    case "phpbuilder":
      icon = <Icon icon="mdi:code-tags" color={socialNetworks.phpbuilder.color} />;
      break;
    case "piekielni":
      icon = <Icon icon="mdi:forum" color={socialNetworks.piekielni.color} />;
      break;
    case "pihole":
      icon = <Icon icon="simple-icons:pihole" color={socialNetworks.pihole.color} />;
      break;
    case "pik100":
      icon = <Icon icon="mdi:post" color={socialNetworks.pik100.color} />;
      break;
    case "pimoroni":
      icon = <LocalIcon file="pimoroni.webp" alt="Pimoroni Buccaneers" />;
      break;
    case "piobets":
      icon = <Icon icon="mdi:cards-playing" color={socialNetworks.piobets.color} />;
      break;
    case "pirohimic":
      icon = <Icon icon="mdi:flask" color={socialNetworks.pirohimic.color} />;
      break;
    case "pixilart":
      icon = <LocalIcon file="pixilart.webp" alt="Pixilart" />;
      break;
    case "pixls":
      icon = <LocalIcon file="pixls.webp" alt="Pixls" />;
      break;
    case "playlistiptv":
      icon = <Icon icon="mdi:video" color={socialNetworks.playlistiptv.color} />;
      break;
    case "playtime":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.playtime.color} />;
      break;
    case "pluralsight":
      icon = <Icon icon="simple-icons:pluralsight" color={socialNetworks.pluralsight.color} />;
      break;
    case "pmpkbirsk":
      icon = <Icon icon="mdi:school" color={socialNetworks.pmpkbirsk.color} />;
      break;
    case "podolog":
      icon = <Icon icon="mdi:cart" color={socialNetworks.podolog.color} />;
      break;
    case "podolsk":
      icon = <Icon icon="mdi:forum" color={socialNetworks.podolsk.color} />;
      break;
    case "pogz5615":
      icon = <Icon icon="mdi:medal" color={socialNetworks.pogz5615.color} />;
      break;
    case "pokerstrategy":
      icon = <Icon icon="mdi:cards-playing" color={socialNetworks.pokerstrategy.color} />;
      break;
    case "policja2009":
      icon = <Icon icon="mdi:forum" color={socialNetworks.policja2009.color} />;
      break;
    case "popugi":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.popugi.color} />;
      break;
    case "portalcs16":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.portalcs16.color} />;
      break;
    case "poshtovik":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.poshtovik.color} />;
      break;
    case "posit":
      icon = <Icon icon="simple-icons:posit" color={socialNetworks.posit.color} />;
      break;
    case "postman":
      icon = <Icon icon="simple-icons:postman" color={socialNetworks.postman.color} />;
      break;
    case "potystorony":
      icon = <Icon icon="mdi:forum" color={socialNetworks.potystorony.color} />;
      break;
    case "prenatalclub":
      icon = <Icon icon="mdi:school" color={socialNetworks.prenatalclub.color} />;
      break;
    case "prihoz":
      icon = <Icon icon="mdi:forum" color={socialNetworks.prihoz.color} />;
      break;
    case "prizyvnikmoy":
      icon = <LocalIcon file="prizyvnikmoy.webp" alt="Prizyvnikmoy" />;
      break;
    case "procssteam":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.procssteam.color} />;
      break;
    case "prodigy":
      icon = <Icon icon="mdi:music" color={socialNetworks.prodigy.color} />;
      break;
    case "profsouzau":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.profsouzau.color} />;
      break;
    case "prosemirror":
      icon = <Icon icon="simple-icons:prosemirror" color={socialNetworks.prosemirror.color} />;
      break;
    case "prosmart":
      icon = <LocalIcon file="prosmart.webp" alt="ProSmart" />;
      break;
    case "prosvet":
      icon = <Icon icon="mdi:post" color={socialNetworks.prosvet.color} />;
      break;
    case "prosvetlenie":
      icon = <Icon icon="mdi:web" color={socialNetworks.prosvetlenie.color} />;
      break;
    case "provincialynews":
      icon = <Icon icon="mdi:finance" color={socialNetworks.provincialynews.color} />;
      break;
    case "prv":
      icon = <Icon icon="mdi:post" color={socialNetworks.prv.color} />;
      break;
    case "psychotype":
      icon = <Icon icon="mdi:school" color={socialNetworks.psychotype.color} />;
      break;
    case "psydv":
      icon = <Icon icon="mdi:medical-bag" color={socialNetworks.psydv.color} />;
      break;
    case "pubgopgg":
      icon = <LocalIcon file="pubgopgg.webp" alt="OP.GG PUBG" />;
      break;
    case "punx":
      icon = <Icon icon="mdi:music" color={socialNetworks.punx.color} />;
      break;
    case "pythonsu":
      icon = <Icon icon="mdi:forum" color={socialNetworks.pythonsu.color} />;
      break;
    case "pytorch":
      icon = <Icon icon="simple-icons:pytorch" color={socialNetworks.pytorch.color} />;
      break;
    case "quake2":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.quake2.color} />;
      break;
    case "quartertothree":
      icon = <Icon icon="mdi:forum" color={socialNetworks.quartertothree.color} />;
      break;
    case "questionablequesting":
      icon = <Icon icon="mdi:forum" color={socialNetworks.questionablequesting.color} />;
      break;
    case "quickfile":
      icon = <LocalIcon file="quickfile.webp" alt="QuickFile" />;
      break;
    case "quik":
      icon = <Icon icon="mdi:forum" color={socialNetworks.quik.color} />;
      break;
    case "rabotenka":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.rabotenka.color} />;
      break;
    case "radiouchebnik":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.radiouchebnik.color} />;
      break;
    case "rajce":
      icon = <LocalIcon file="rajce.webp" alt="Rajce" />;
      break;
    case "rapbeat":
      icon = <Icon icon="mdi:music" color={socialNetworks.rapbeat.color} />;
      break;
    case "rasa":
      icon = <Icon icon="simple-icons:rasa" color={socialNetworks.rasa.color} />;
      break;
    case "rasslabyxa":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.rasslabyxa.color} />;
      break;
    case "rastrnet":
      icon = <LocalIcon file="rastrnet.webp" alt="Rastrnet" />;
      break;
    case "razborkajapan":
      icon = <Icon icon="mdi:car" color={socialNetworks.razborkajapan.color} />;
      break;
    case "rcloneforum":
      icon = <Icon icon="simple-icons:rclone" color={socialNetworks.rcloneforum.color} />;
      break;
    case "readthedocs":
      icon = <Icon icon="simple-icons:readthedocs" color={socialNetworks.readthedocs.color} />;
      break;
    case "realsp":
      icon = <Icon icon="mdi:cart" color={socialNetworks.realsp.color} />;
      break;
    case "redforum":
      icon = <LocalIcon file="redforum.webp" alt="Red Forum" />;
      break;
    case "reincarnationforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.reincarnationforum.color} />;
      break;
    case "reisefrage":
      icon = <LocalIcon file="reisefrage.webp" alt="Reisefrage" />;
      break;
    case "relasko":
      icon = <LocalIcon file="relasko.webp" alt="Relasko" />;
      break;
    case "remont56":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.remont56.color} />;
      break;
    case "renaultfanclub":
      icon = <Icon icon="mdi:forum" color={socialNetworks.renaultfanclub.color} />;
      break;
    case "resourcemta":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.resourcemta.color} />;
      break;
    case "rielt55":
      icon = <Icon icon="mdi:tag" color={socialNetworks.rielt55.color} />;
      break;
    case "rodgersforum":
      icon = <Icon icon="mdi:forum" color={socialNetworks.rodgersforum.color} />;
      break;
    case "roonlabs":
      icon = <LocalIcon file="roonlabs.webp" alt="Roon Labs Community" />;
      break;
    case "rotarusofi":
      icon = <Icon icon="mdi:music" color={socialNetworks.rotarusofi.color} />;
      break;
    case "rottweiler":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.rottweiler.color} />;
      break;
    case "rrforums":
      icon = <Icon icon="mdi:forum" color={socialNetworks.rrforums.color} />;
      break;
    case "rt20getbb":
      icon = <Icon icon="mdi:forum" color={socialNetworks.rt20getbb.color} />;
      break;
    case "rt21getbb":
      icon = <Icon icon="mdi:forum" color={socialNetworks.rt21getbb.color} />;
      break;
    case "rudtp":
      icon = <LocalIcon file="rudtp.webp" alt="RUDTP" />;
      break;
    case "rurip":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.rurip.color} />;
      break;
    case "ruslangxp":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.ruslangxp.color} />;
      break;
    case "rusmmm":
      icon = <Icon icon="mdi:bitcoin" color={socialNetworks.rusmmm.color} />;
      break;
    case "russemya":
      icon = <Icon icon="mdi:forum" color={socialNetworks.russemya.color} />;
      break;
    case "rustlang":
      icon = <Icon icon="simple-icons:rust" color={socialNetworks.rustlang.color} />;
      break;
    case "rzn":
      icon = <Icon icon="mdi:forum" color={socialNetworks.rzn.color} />;
      break;
    case "salavat":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.salavat.color} />;
      break;
    case "salekhardnews":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.salekhardnews.color} />;
      break;
    case "salutm":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.salutm.color} />;
      break;
    case "samp":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.samp.color} />;
      break;
    case "sampsektor":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.sampsektor.color} />;
      break;
    case "samsungfood":
      icon = <LocalIcon file="samsungfood.webp" alt="Samsung Food" />;
      break;
    case "samsungmobile":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.samsungmobile.color} />;
      break;
    case "sandisk":
      icon = <Icon icon="simple-icons:sandisk" color={socialNetworks.sandisk.color} />;
      break;
    case "satelectronics":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.satelectronics.color} />;
      break;
    case "satisfacktion":
      icon = <Icon icon="mdi:music" color={socialNetworks.satisfacktion.color} />;
      break;
    case "sayty":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.sayty.color} />;
      break;
    case "scalalang":
      icon = <Icon icon="simple-icons:scala" color={socialNetworks.scalalang.color} />;
      break;
    case "scb":
      icon = <Icon icon="mdi:forum" color={socialNetworks.scb.color} />;
      break;
    case "schonin":
      icon = <LocalIcon file="schonin.webp" alt="Schonin" />;
      break;
    case "school1065":
      icon = <Icon icon="mdi:school" color={socialNetworks.school1065.color} />;
      break;
    case "sciax2":
      icon = <Icon icon="mdi:forum" color={socialNetworks.sciax2.color} />;
      break;
    case "scoutwiki":
      icon = <LocalIcon file="scoutwiki.webp" alt="Scoutwiki" />;
      break;
    case "screwfix":
      icon = <Icon icon="mdi:forum" color={socialNetworks.screwfix.color} />;
      break;
    case "scssoft":
      icon = <Icon icon="mdi:forum" color={socialNetworks.scssoft.color} />;
      break;
    case "sebastopol":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.sebastopol.color} />;
      break;
    case "seeedstudio":
      icon = <LocalIcon file="seeedstudio.webp" alt="Seeed Studio Forum" />;
      break;
    case "sefirut":
      icon = <LocalIcon file="sefirut.webp" alt="Sefirut" />;
      break;
    case "seguru":
      icon = <LocalIcon file="seguru.webp" alt="SE.Guru" />;
      break;
    case "selly":
      icon = <LocalIcon file="selly.webp" alt="Selly" />;
      break;
    case "semenovaklass":
      icon = <Icon icon="mdi:school" color={socialNetworks.semenovaklass.color} />;
      break;
    case "sense":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.sense.color} />;
      break;
    case "serwis":
      icon = <Icon icon="mdi:car" color={socialNetworks.serwis.color} />;
      break;
    case "seveneightthree":
      icon = <LocalIcon file="seveneightthree.webp" alt="IVT 78-3" />;
      break;
    case "seventyfourfivezeroseven":
      icon = <Icon icon="mdi:web" color={socialNetworks.seventyfourfivezeroseven.color} />;
      break;
    case "sevenxnetua":
      icon = <Icon icon="mdi:music" color={socialNetworks.sevenxnetua.color} />;
      break;
    case "sevenya":
      icon = <LocalIcon file="sevenya.webp" alt="7ya" />;
      break;
    case "sexforumws":
      icon = <LocalIcon file="sexforumws.webp" alt="Sexforum" />;
      break;
    case "sfd":
      icon = <LocalIcon file="sfd.webp" alt="SFD" />;
      break;
    case "sfinxcats":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.sfinxcats.color} />;
      break;
    case "shanson":
      icon = <Icon icon="mdi:music" color={socialNetworks.shanson.color} />;
      break;
    case "sharzhportret":
      icon = <Icon icon="mdi:palette" color={socialNetworks.sharzhportret.color} />;
      break;
    case "sherwood":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.sherwood.color} />;
      break;
    case "shitpostbot":
      icon = <LocalIcon file="shitpostbot.webp" alt="ShitpostBot5000" />;
      break;
    case "shkolnikov":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.shkolnikov.color} />;
      break;
    case "shmanich":
      icon = <Icon icon="mdi:forum" color={socialNetworks.shmanich.color} />;
      break;
    case "shopsmith":
      icon = <LocalIcon file="shopsmith.webp" alt="Shopsmith" />;
      break;
    case "shotbow":
      icon = <Icon icon="mdi:forum" color={socialNetworks.shotbow.color} />;
      break;
    case "shotcut":
      icon = <Icon icon="simple-icons:shotcut" color={socialNetworks.shotcut.color} />;
      break;
    case "shporgalki":
      icon = <Icon icon="mdi:school" color={socialNetworks.shporgalki.color} />;
      break;
    case "sibcoins":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.sibcoins.color} />;
      break;
    case "sibmama":
      icon = <LocalIcon file="sibmama.webp" alt="Sibmama" />;
      break;
    case "signalusers":
      icon = <Icon icon="mdi:forum" color={socialNetworks.signalusers.color} />;
      break;
    case "silvercollector":
      icon = <LocalIcon file="silvercollector.webp" alt="Silver-collector" />;
      break;
    case "simfmama":
      icon = <Icon icon="mdi:forum" color={socialNetworks.simfmama.color} />;
      break;
    case "sisv":
      icon = <Icon icon="mdi:school" color={socialNetworks.sisv.color} />;
      break;
    case "sixfivefiveiap":
      icon = <Icon icon="mdi:medal" color={socialNetworks.sixfivefiveiap.color} />;
      break;
    case "skeb":
      icon = <LocalIcon file="skeb.webp" alt="Skeb" />;
      break;
    case "sketchup":
      icon = <Icon icon="simple-icons:sketchup" color={socialNetworks.sketchup.color} />;
      break;
    case "sladkiydesert":
      icon = <Icon icon="mdi:forum" color={socialNetworks.sladkiydesert.color} />;
      break;
    case "smartphone":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.smartphone.color} />;
      break;
    case "smartplay":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.smartplay.color} />;
      break;
    case "smartthings":
      icon = <Icon icon="simple-icons:smartthings" color={socialNetworks.smartthings.color} />;
      break;
    case "smashrun":
      icon = <LocalIcon file="smashrun.webp" alt="Smashrun" />;
      break;
    case "snapcraft":
      icon = <Icon icon="simple-icons:snapcraft" color={socialNetworks.snapcraft.color} />;
      break;
    case "snegovayapad":
      icon = <LocalIcon file="snegovayapad.webp" alt="Snegovaya Pad" />;
      break;
    case "so4ineniya":
      icon = <Icon icon="mdi:school" color={socialNetworks.so4ineniya.color} />;
      break;
    case "soborno":
      icon = <Icon icon="mdi:forum" color={socialNetworks.soborno.color} />;
      break;
    case "socforum":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.socforum.color} />;
      break;
    case "softdeniz":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.softdeniz.color} />;
      break;
    case "softgame":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.softgame.color} />;
      break;
    case "softwareinformer":
      icon = <LocalIcon file="softwareinformer.webp" alt="SoftwareInformer" />;
      break;
    case "softwm":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.softwm.color} />;
      break;
    case "sokal":
      icon = <Icon icon="mdi:web" color={socialNetworks.sokal.color} />;
      break;
    case "soloby":
      icon = <Icon icon="mdi:school" color={socialNetworks.soloby.color} />;
      break;
    case "somersoft":
      icon = <LocalIcon file="somersoft.webp" alt="Somersoft" />;
      break;
    case "sonicretro":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.sonicretro.color} />;
      break;
    case "sony127":
      icon = <LocalIcon file="sony127.webp" alt="Sony127" />;
      break;
    case "soobshestva":
      icon = <Icon icon="mdi:web" color={socialNetworks.soobshestva.color} />;
      break;
    case "sorentokiaclub":
      icon = <Icon icon="mdi:forum" color={socialNetworks.sorentokiaclub.color} />;
      break;
    case "soundfactory":
      icon = <LocalIcon file="soundfactory.webp" alt="Sound Factory" />;
      break;
    case "sourceruns":
      icon = <LocalIcon file="sourceruns.webp" alt="Sourceruns" />;
      break;
    case "sovgavan":
      icon = <Icon icon="mdi:forum" color={socialNetworks.sovgavan.color} />;
      break;
    case "splice":
      icon = <LocalIcon file="splice.webp" alt="Splice" />;
      break;
    case "sportlerfrage":
      icon = <LocalIcon file="sportlerfrage.webp" alt="Sportlerfrage" />;
      break;
    case "sportsjournalists":
      icon = <LocalIcon file="sportsjournalists.webp" alt="Sportsjournalists" />;
      break;
    case "sstalkers":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.sstalkers.color} />;
      break;
    case "staroverovka":
      icon = <Icon icon="mdi:forum" color={socialNetworks.staroverovka.color} />;
      break;
    case "starsonice":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.starsonice.color} />;
      break;
    case "steinberg":
      icon = <Icon icon="simple-icons:steinberg" color={socialNetworks.steinberg.color} />;
      break;
    case "stopnarko":
      icon = <Icon icon="mdi:forum" color={socialNetworks.stopnarko.color} />;
      break;
    case "storycorps":
      icon = <LocalIcon file="storycorps.webp" alt="Storycorps" />;
      break;
    case "straightdope":
      icon = <LocalIcon file="straightdope.webp" alt="Straight Dope Message Board" />;
      break;
    case "stroysnami":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.stroysnami.color} />;
      break;
    case "strupravlenie":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.strupravlenie.color} />;
      break;
    case "subeta":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.subeta.color} />;
      break;
    case "sufficit":
      icon = <Icon icon="mdi:post" color={socialNetworks.sufficit.color} />;
      break;
    case "sureai":
      icon = <LocalIcon file="sureai.webp" alt="Sureai" />;
      break;
    case "suzuri":
      icon = <LocalIcon file="suzuri.webp" alt="Suzuri" />;
      break;
    case "svadbaorel":
      icon = <LocalIcon file="svadbaorel.webp" alt="Svadba Orel" />;
      break;
    case "symbian9":
      icon = <LocalIcon file="symbian9.webp" alt="Symbian9" />;
      break;
    case "szenmark":
      icon = <Icon icon="mdi:web" color={socialNetworks.szenmark.color} />;
      break;
    case "szerokikadr":
      icon = <LocalIcon file="szerokikadr.webp" alt="Szerokikadr" />;
      break;
    case "szmer":
      icon = <LocalIcon file="szmer.webp" alt="szmer" />;
      break;
    case "tabun":
      icon = <Icon icon="mdi:web" color={socialNetworks.tabun.color} />;
      break;
    case "tachograph":
      icon = <Icon icon="mdi:forum" color={socialNetworks.tachograph.color} />;
      break;
    case "talimger":
      icon = <Icon icon="mdi:school" color={socialNetworks.talimger.color} />;
      break;
    case "tanuki":
      icon = <Icon icon="mdi:animation" color={socialNetworks.tanuki.color} />;
      break;
    case "tarjaturunen":
      icon = <Icon icon="mdi:finance" color={socialNetworks.tarjaturunen.color} />;
      break;
    case "taskrabbit":
      icon = <LocalIcon file="taskrabbit.webp" alt="Taskrabbit" />;
      break;
    case "tatyanaart":
      icon = <LocalIcon file="tatyanaart.webp" alt="Tatyana Art" />;
      break;
    case "taxibelgorod":
      icon = <Icon icon="mdi:web" color={socialNetworks.taxibelgorod.color} />;
      break;
    case "teampros":
      icon = <Icon icon="mdi:car" color={socialNetworks.teampros.color} />;
      break;
    case "terminatorium":
      icon = <Icon icon="mdi:movie-open" color={socialNetworks.terminatorium.color} />;
      break;
    case "terminatorscc":
      icon = <Icon icon="mdi:web" color={socialNetworks.terminatorscc.color} />;
      break;
    case "terralight":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.terralight.color} />;
      break;
    case "tgi":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.tgi.color} />;
      break;
    case "thaicat":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.thaicat.color} />;
      break;
    case "theatre":
      icon = <Icon icon="mdi:palette" color={socialNetworks.theatre.color} />;
      break;
    case "theorizeit":
      icon = <LocalIcon file="theorizeit.webp" alt="Information Systems Theories" />;
      break;
    case "theprodigy":
      icon = <LocalIcon file="theprodigy.webp" alt="Theprodigy" />;
      break;
    case "thetattooforum":
      icon = <LocalIcon file="thetattooforum.webp" alt="Thetattooforum" />;
      break;
    case "theturboforums":
      icon = <LocalIcon file="theturboforums.webp" alt="Theturboforums" />;
      break;
    case "tkgr":
      icon = <LocalIcon file="tkgr.webp" alt="Tkgr" />;
      break;
    case "tomshardware":
      icon = <LocalIcon file="tomshardware.webp" alt="TomsHardware" />;
      break;
    case "toneto":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.toneto.color} />;
      break;
    case "top10allservers":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.top10allservers.color} />;
      break;
    case "topcheats":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.topcheats.color} />;
      break;
    case "tottenhamhotspur":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.tottenhamhotspur.color} />;
      break;
    case "trainzvl":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.trainzvl.color} />;
      break;
    case "transitclub":
      icon = <Icon icon="mdi:car" color={socialNetworks.transitclub.color} />;
      break;
    case "travisci":
      icon = <Icon icon="simple-icons:travisci" color={socialNetworks.travisci.color} />;
      break;
    case "trays":
      icon = <Icon icon="mdi:forum" color={socialNetworks.trays.color} />;
      break;
    case "truckersmp":
      icon = <LocalIcon file="truckersmp.webp" alt="TruckersMP Forum" />;
      break;
    case "truckersmpru":
      icon = <LocalIcon file="truckersmpru.webp" alt="TruckersMP" />;
      break;
    case "tsibulskiy":
      icon = <Icon icon="mdi:cellphone" color={socialNetworks.tsibulskiy.color} />;
      break;
    case "tunefind":
      icon = <LocalIcon file="tunefind.webp" alt="Tunefind" />;
      break;
    case "tvigra":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.tvigra.color} />;
      break;
    case "tvucoz":
      icon = <Icon icon="mdi:web" color={socialNetworks.tvucoz.color} />;
      break;
    case "twitcasting":
      icon = <LocalIcon file="twitcasting.webp" alt="Twitcasting" />;
      break;
    case "twoelfive":
      icon = <Icon icon="mdi:forum" color={socialNetworks.twoelfive.color} />;
      break;
    case "twofastforu":
      icon = <Icon icon="mdi:car" color={socialNetworks.twofastforu.color} />;
      break;
    case "twpro":
      icon = <LocalIcon file="twpro.webp" alt="Twpro" />;
      break;
    case "uaksu":
      icon = <Icon icon="mdi:forum" color={socialNetworks.uaksu.color} />;
      break;
    case "uaodessa":
      icon = <Icon icon="mdi:forum" color={socialNetworks.uaodessa.color} />;
      break;
    case "ucozforum":
      icon = <LocalIcon file="ucozforum.webp" alt="uCoz Forum" />;
      break;
    case "ugri":
      icon = <Icon icon="mdi:post" color={socialNetworks.ugri.color} />;
      break;
    case "uhiv":
      icon = <Icon icon="mdi:medical-bag" color={socialNetworks.uhiv.color} />;
      break;
    case "uipath":
      icon = <Icon icon="simple-icons:uipath" color={socialNetworks.uipath.color} />;
      break;
    case "ukbusinessforums":
      icon = <LocalIcon file="ukbusinessforums.webp" alt="UK Business Forums" />;
      break;
    case "ultrasdiary":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ultrasdiary.color} />;
      break;
    case "umhoops":
      icon = <LocalIcon file="umhoops.webp" alt="UMHOOPS" />;
      break;
    case "uncua":
      icon = <LocalIcon file="uncua.webp" alt="UNC.UA" />;
      break;
    case "uncyclopedia":
      icon = <LocalIcon file="uncyclopedia.webp" alt="Uncyclopedia" />;
      break;
    case "upbyte":
      icon = <LocalIcon file="upbyte.webp" alt="Upbyte" />;
      break;
    case "uralsloboda":
      icon = <Icon icon="mdi:briefcase" color={socialNetworks.uralsloboda.color} />;
      break;
    case "urmaiurmaevo":
      icon = <Icon icon="mdi:forum" color={socialNetworks.urmaiurmaevo.color} />;
      break;
    case "usalife":
      icon = <LocalIcon file="usalife.webp" alt="USA Life" />;
      break;
    case "usersoft":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.usersoft.color} />;
      break;
    case "usman48":
      icon = <LocalIcon file="usman48.webp" alt="Usman48" />;
      break;
    case "uwr1":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.uwr1.color} />;
      break;
    case "v3de":
      icon = <Icon icon="mdi:laptop" color={socialNetworks.v3de.color} />;
      break;
    case "valorantopgg":
      icon = <LocalIcon file="valorantopgg.webp" alt="OP.GG Valorant" />;
      break;
    case "vdvbelarus":
      icon = <Icon icon="mdi:medal" color={socialNetworks.vdvbelarus.color} />;
      break;
    case "vegalab":
      icon = <LocalIcon file="vegalab.webp" alt="VegaLab" />;
      break;
    case "velozone":
      icon = <Icon icon="mdi:car" color={socialNetworks.velozone.color} />;
      break;
    case "vgorah":
      icon = <Icon icon="mdi:airplane" color={socialNetworks.vgorah.color} />;
      break;
    case "videhelpcomp":
      icon = <Icon icon="mdi:newspaper-variant" color={socialNetworks.videhelpcomp.color} />;
      break;
    case "videoforums":
      icon = <Icon icon="mdi:video" color={socialNetworks.videoforums.color} />;
      break;
    case "videomuzon":
      icon = <Icon icon="mdi:music" color={socialNetworks.videomuzon.color} />;
      break;
    case "vilo4nik":
      icon = <Icon icon="mdi:forum" color={socialNetworks.vilo4nik.color} />;
      break;
    case "vipcccp":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.vipcccp.color} />;
      break;
    case "vipicq":
      icon = <Icon icon="mdi:chat" color={socialNetworks.vipicq.color} />;
      break;
    case "virtualauto":
      icon = <Icon icon="mdi:palette" color={socialNetworks.virtualauto.color} />;
      break;
    case "virtualireland":
      icon = <Icon icon="mdi:forum" color={socialNetworks.virtualireland.color} />;
      break;
    case "visualparadigm":
      icon = <Icon icon="simple-icons:visualparadigm" color={socialNetworks.visualparadigm.color} />;
      break;
    case "vitalfootball":
      icon = <Icon icon="mdi:forum" color={socialNetworks.vitalfootball.color} />;
      break;
    case "viupetra":
      icon = <Icon icon="mdi:medal" color={socialNetworks.viupetra.color} />;
      break;
    case "voice123":
      icon = <LocalIcon file="voice123.webp" alt="Voice123" />;
      break;
    case "volkodavcaoko":
      icon = <Icon icon="mdi:forum" color={socialNetworks.volkodavcaoko.color} />;
      break;
    case "volkswagenlviv":
      icon = <Icon icon="mdi:car" color={socialNetworks.volkswagenlviv.color} />;
      break;
    case "voxelshop":
      icon = <Icon icon="mdi:cube-outline" color={socialNetworks.voxelshop.color} />;
      break;
    case "vracing":
      icon = <Icon icon="mdi:car" color={socialNetworks.vracing.color} />;
      break;
    case "vse1":
      icon = <Icon icon="mdi:finance" color={socialNetworks.vse1.color} />;
      break;
    case "vsemobile":
      icon = <Icon icon="mdi:forum" color={socialNetworks.vsemobile.color} />;
      break;
    case "vwbus":
      icon = <Icon icon="mdi:car" color={socialNetworks.vwbus.color} />;
      break;
    case "w2lg":
      icon = <Icon icon="mdi:forum" color={socialNetworks.w2lg.color} />;
      break;
    case "wago":
      icon = <LocalIcon file="wago.webp" alt="WAGO Automation Community" />;
      break;
    case "wakeup":
      icon = <Icon icon="mdi:forum" color={socialNetworks.wakeup.color} />;
      break;
    case "wallpost":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.wallpost.color} />;
      break;
    case "warcraft3ft":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.warcraft3ft.color} />;
      break;
    case "warface":
      icon = <LocalIcon file="warface.webp" alt="Warface" />;
      break;
    case "warframeucoz":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.warframeucoz.color} />;
      break;
    case "warhammergames":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.warhammergames.color} />;
      break;
    case "watchmemore":
      icon = <Icon icon="mdi:video" color={socialNetworks.watchmemore.color} />;
      break;
    case "weaponsas":
      icon = <Icon icon="mdi:medal" color={socialNetworks.weaponsas.color} />;
      break;
    case "webdom":
      icon = <LocalIcon file="webdom.webp" alt="Webdom" />;
      break;
    case "weblate":
      icon = <Icon icon="simple-icons:weblate" color={socialNetworks.weblate.color} />;
      break;
    case "webmedia":
      icon = <Icon icon="mdi:music" color={socialNetworks.webmedia.color} />;
      break;
    case "webru":
      icon = <Icon icon="mdi:forum" color={socialNetworks.webru.color} />;
      break;
    case "websecurity":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.websecurity.color} />;
      break;
    case "weddingimage":
      icon = <Icon icon="mdi:camera" color={socialNetworks.weddingimage.color} />;
      break;
    case "weld":
      icon = <Icon icon="mdi:forum" color={socialNetworks.weld.color} />;
      break;
    case "whonix":
      icon = <LocalIcon file="whonix.webp" alt="Whonix Forum" />;
      break;
    case "wikifur":
      icon = <Icon icon="mdi:palette" color={socialNetworks.wikifur.color} />;
      break;
    case "wimkin":
      icon = <LocalIcon file="wimkin.webp" alt="WIMKIN" />;
      break;
    case "wmmailwmmail":
      icon = <LocalIcon file="wmmailwmmail.webp" alt="Wmmail Wmmail" />;
      break;
    case "wmmaximum":
      icon = <Icon icon="mdi:finance" color={socialNetworks.wmmaximum.color} />;
      break;
    case "wmucoz":
      icon = <Icon icon="mdi:cart" color={socialNetworks.wmucoz.color} />;
      break;
    case "wolfram":
      icon = <Icon icon="simple-icons:wolfram" color={socialNetworks.wolfram.color} />;
      break;
    case "wordnik":
      icon = <LocalIcon file="wordnik.webp" alt="Wordnik" />;
      break;
    case "wordreference":
      icon = <LocalIcon file="wordreference.webp" alt="WordReference Forums" />;
      break;
    case "wowcircle":
      icon = <Icon icon="mdi:forum" color={socialNetworks.wowcircle.color} />;
      break;
    case "wrestlezone":
      icon = <Icon icon="mdi:trophy" color={socialNetworks.wrestlezone.color} />;
      break;
    case "wwork":
      icon = <Icon icon="mdi:cards-playing" color={socialNetworks.wwork.color} />;
      break;
    case "wyze":
      icon = <Icon icon="simple-icons:wyze" color={socialNetworks.wyze.color} />;
      break;
    case "xakerminus":
      icon = <Icon icon="mdi:incognito" color={socialNetworks.xakerminus.color} />;
      break;
    case "xanga":
      icon = <Icon icon="mdi:feather" color={socialNetworks.xanga.color} />;
      break;
    case "xh2o":
      icon = <Icon icon="mdi:forum" color={socialNetworks.xh2o.color} />;
      break;
    case "xitlar":
      icon = <Icon icon="mdi:music" color={socialNetworks.xitlar.color} />;
      break;
    case "xorazmviloyati":
      icon = <Icon icon="mdi:music" color={socialNetworks.xorazmviloyati.color} />;
      break;
    case "xristosvouz":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.xristosvouz.color} />;
      break;
    case "xyuivetmailcpy":
      icon = <LocalIcon file="xyuivetmailcpy.webp" alt="Xyuivet Mailcpy" />;
      break;
    case "yandexmarket":
      icon = <LocalIcon file="yandexmarket.webp" alt="Yandex Market" />;
      break;
    case "yauchitel":
      icon = <Icon icon="mdi:school" color={socialNetworks.yauchitel.color} />;
      break;
    case "yras":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.yras.color} />;
      break;
    case "yuque":
      icon = <LocalIcon file="yuque.webp" alt="Yuque" />;
      break;
    case "zabselo":
      icon = <Icon icon="mdi:forum" color={socialNetworks.zabselo.color} />;
      break;
    case "zapisatsyakvrachu24":
      icon = <Icon icon="mdi:medical-bag" color={socialNetworks.zapisatsyakvrachu24.color} />;
      break;
    case "zareshetkoi":
      icon = <Icon icon="mdi:post" color={socialNetworks.zareshetkoi.color} />;
      break;
    case "zbiornik":
      icon = <LocalIcon file="zbiornik.webp" alt="Zbiornik" />;
      break;
    case "zdorov10":
      icon = <LocalIcon file="zdorov10.webp" alt="Zdorov10" />;
      break;
    case "zebest":
      icon = <Icon icon="mdi:music" color={socialNetworks.zebest.color} />;
      break;
    case "zenitbol":
      icon = <LocalIcon file="zenitbol.webp" alt="Zenitbol" />;
      break;
    case "zennenhund":
      icon = <Icon icon="mdi:puzzle" color={socialNetworks.zennenhund.color} />;
      break;
    case "zerkalastekla":
      icon = <Icon icon="mdi:cart" color={socialNetworks.zerkalastekla.color} />;
      break;
    case "zerok":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.zerok.color} />;
      break;
    case "zhyk":
      icon = <Icon icon="mdi:forum" color={socialNetworks.zhyk.color} />;
      break;
    case "ziducoz":
      icon = <Icon icon="mdi:forum" color={socialNetworks.ziducoz.color} />;
      break;
    case "zmarsa":
      icon = <Icon icon="mdi:account-group" color={socialNetworks.zmarsa.color} />;
      break;
    case "zmey":
      icon = <LocalIcon file="zmey.webp" alt="Zmey" />;
      break;
    case "znanylekarz":
      icon = <LocalIcon file="znanylekarz.webp" alt="ZnanyLekarz" />;
      break;
    case "zonegame":
      icon = <Icon icon="mdi:gamepad-variant" color={socialNetworks.zonegame.color} />;
      break;
    case "zoomdevforum":
      icon = <Icon icon="simple-icons:zoom" color={socialNetworks.zoomdevforum.color} />;
      break;
    case "zorin":
      icon = <Icon icon="simple-icons:zorin" color={socialNetworks.zorin.color} />;
      break;
    case "zornet":
      icon = <LocalIcon file="zornet.webp" alt="Zornet" />;
      break;
    case "zpmama":
      icon = <Icon icon="mdi:map-marker" color={socialNetworks.zpmama.color} />;
      break;
    case "zvukinadezdy":
      icon = <Icon icon="mdi:music" color={socialNetworks.zvukinadezdy.color} />;
      break;
    default:
      icon = <Icon icon="mdi:share-variant-outline" />;
      break;
  }

  return icon;
};

export default SocialIcons;
