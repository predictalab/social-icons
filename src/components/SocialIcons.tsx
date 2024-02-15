import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon,
  FaTelegramPlane as TelegramIcon,
  FaLinkedinIn as LinkedinIcon,
  FaWhatsapp as WhatsappIcon,
  FaSkype as SkypeIcon,
  FaGithub as GithubIcon,
  FaSnapchatGhost as SnapchatIcon,
  FaYoutube as YoutubeIcon,
  FaReddit as RedditIcon,
  FaPinterest as PinterestIcon,
  FaXbox as XboxIcon,
  FaPlaystation as PlaystationIcon,
  FaMastodon as MastodonIcon,
  FaVk as VkIcon,
  FaGitlab as GitlabIcon,
  FaSteam as SteamIcon,
  FaKaggle as KaggleIcon,
  FaTrello as TrelloIcon,
  FaDocker as DockerIcon,
  FaTwitch as TwitchIcon,
  FaMedium as MediumIcon,
  FaFlickr as FlickrIcon,
  FaTiktok as TikTokIcon,
  FaDiscord as DiscordIcon,
  FaPaypal as PaypalIcon,
  FaQuora as QuoraIcon,
  FaPeriscope as PeriscopeIcon,
  FaPatreon as PatreonIcon,
  FaSpotify as SpotifyIcon,
  FaAirbnb as AirbnbIcon,
  FaFoursquare as FoursquareIcon,
  FaStrava as StravaIcon,
  FaChessPawn as ChessComIcon,
  FaTumblr as TumblrIcon,
  FaEtsy as EtsyIcon,
  FaKeybase as KeybaseIcon,
  FaApple as AppleIcon,
} from "react-icons/fa";
import {
  SiGravatar as GravatarIcon,
  SiMyspace as MyspaceIcon,
  SiImgur as ImgurIcon,
  SiGiphy as GiphyIcon,
  SiDisqus as DisqusIcon,
  SiVirustotal as VirusTotalIcon,
  SiAskfm as AskfmIcon,
  SiDuolingo as DuolingoIcon,
  SiAboutdotme as AboutDotMeIcon,
  SiHaveibeenpwned as HaveIBeenPwnedIcon,
  SiFitbit as FitbitIcon,
  SiNike as NikeIcon,
  SiNotion as NotionIcon,
  SiAdidas as RuntasticIcon,
  SiSubstack as SubstackIcon,
  SiBereal as BerealIcon,
} from "react-icons/si";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { BsSignal as SignalIcon } from "react-icons/bs";
import { TbBrandPicsart as PicsArtIcon } from "react-icons/tb";
import { BiLogoMicrosoftTeams as TeamsIcon } from "react-icons/bi";
import { ImOnedrive as OnedriveIcon } from "react-icons/im";
import { LiaHashtagSolid as DehashedIcon } from "react-icons/lia";
import { PiShareNetwork as NetworkIcon } from "react-icons/pi";

import protonmailsvg from "../assets/social-icons/protonmail.svg";
import sellixsvg from "../assets/social-icons/sellix.svg";
import vivinopng from "../assets/social-icons/vivino.png";
import myfitnesspalpng from "../assets/social-icons/myfitnesspal.png";
import whatsmynamejpg from "../assets/social-icons/whatsmyname.jpg";
import yandexpng from "../assets/social-icons/yandex.png";
import imageshackpng from "../assets/social-icons/imageshack.png";
import taringapng from "../assets/social-icons/taringa.png";
import shotgunpng from "../assets/social-icons/shotgun.png";
import wewardpng from "../assets/social-icons/weward.png";
import life360png from "../assets/social-icons/life360.png";
import okrupng from "../assets/social-icons/okru.png";
import clubhousesvg from "../assets/social-icons/clubhouse.svg";
import eyeconsvg from "../assets/social-icons/eyecon.svg";
import touchtunespng from "../assets/social-icons/touchtunes.png";
import locketpng from "../assets/social-icons/locket.png";
import mocospacepng from "../assets/social-icons/mocospace.png";
import whoxypng from "../assets/social-icons/whoxy.png";
import runkeeperpng from "../assets/social-icons/runkeeper.png";
import garminpng from "../assets/social-icons/garmin.png";
import bibleapppng from "../assets/social-icons/bible.png";
import goodreadspng from "../assets/social-icons/goodreads.png";
import monopolygopng from "../assets/social-icons/monopolygo.png";
import scrabblegopng from "../assets/social-icons/scrabblego.png";
import hudsonrockpng from "../assets/social-icons/hudsonrock.png";
import imvupng from "../assets/social-icons/imvu.png";

import { sn } from "./socialNetwork";

type PropsTypes = {
  source?: string;
};

/**
 * @param source Req. a string containing the social network label, ex : 'facebook', 'twitter', etc
 */

const SocialNetworkIcon = ({ source }: PropsTypes): JSX.Element | null => {
  let icon: null | JSX.Element = null;

  if (!source) return icon;

  switch (source.toLocaleLowerCase()) {
    case "facebook":
    case "fb":
      icon = <FacebookIcon color={sn.facebook.color} />;
      break;
    case "twitter":
    case "tw":
    case "twitter archived profile":
    case "twitter archived tweets":
      icon = <TwitterIcon color={sn.twitter.color} />;
      break;
    case "instagram":
    case "picuki":
    case "ig":
      icon = <InstagramIcon color={sn.instagram.color} />;
      break;
    case "telegram":
    case "tg":
      icon = <TelegramIcon color={sn.telegram.color} />;
      break;
    case "linkedin":
    case "ln":
      icon = <LinkedinIcon color={sn.linkedin.color} />;
      break;
    case "whatsapp":
    case "wa":
      icon = <WhatsappIcon color={sn.whatsapp.color} />;
      break;
    case "skype":
    case "sk":
      icon = <SkypeIcon color={sn.skype.color} />;
      break;
    case "github":
    case "gitHub":
    case "gh":
      icon = <GithubIcon color={sn.github.color} />;
      break;
    case "gravatar":
    case "gr":
      icon = <GravatarIcon color={sn.gravatar.color} />;
      break;
    case "feelinsonice":
    case "snapchat":
    case "sn":
    case "snapchat Stories":
      icon = <SnapchatIcon color={sn.snapchat.color} />;
      break;
    case "youtube":
    case "yt":
      icon = <YoutubeIcon color={sn.youtube.color} />;
      break;
    case "myspace":
      icon = <MyspaceIcon color={sn.myspace.color} />;
      break;
    case "reddit":
      icon = <RedditIcon color={sn.reddit.color} />;
      break;
    case "imgur":
      icon = <ImgurIcon color={sn.imgur.color} />;
      break;
    case "pinterest":
      icon = <PinterestIcon color={sn.pinterest.color} />;
      break;
    case "xbox Gamertag":
    case "xbox":
      icon = <XboxIcon color={sn.xbox.color} />;
      break;
    case "playstation":
      icon = <PlaystationIcon color={sn.playstation.color} />;
      break;
    case "mastodon":
      icon = <MastodonIcon color={sn.mastodon.color} />;
      break;
    case "vk":
    case "vkontakte":
      icon = <VkIcon color={sn.vk.color} />;
      break;
    case "gitlab":
    case "gitLab":
      icon = <GitlabIcon color={sn.gitlab.color} />;
      break;
    case "steam":
      icon = <SteamIcon color={sn.steam.color} />;
      break;
    case "kaggle":
      icon = <KaggleIcon color={sn.kaggle.color} />;
      break;
    case "trello":
      icon = <TrelloIcon color={sn.trello.color} />;
      break;
    case "docker":
    case "dockerHub":
      icon = <DockerIcon color={sn.docker.color} />;
      break;
    case "twitch":
    case "th":
      icon = <TwitchIcon color={sn.twitch.color} />;
      break;
    case "medium":
      icon = <MediumIcon color={sn.medium.color} />;
      break;
    case "flickr":
    case "fk":
      icon = <FlickrIcon color={sn.flickr.color} />;
      break;
    case "google":
      icon = <GoogleIcon color={sn.google.color} />;
      break;
    case "signal":
      icon = <SignalIcon color={sn.signal.color} />;
      break;
    case "tiktok":
      icon = <TikTokIcon color={sn.tiktok.color} />;
      break;
    case "discord":
      icon = <DiscordIcon color={sn.discord.color} />;
      break;
    case "paypal":
      icon = <PaypalIcon color={sn.paypal.color} />;
      break;
    case "quora":
      icon = <QuoraIcon color={sn.quora.color} />;
      break;
    case "periscope":
      icon = <PeriscopeIcon color={sn.periscope.color} />;
      break;
    case "giphy":
      icon = <GiphyIcon color={sn.giphy.color} />;
      break;
    case "disqus":
      icon = <DisqusIcon color={sn.disqus.color} />;
      break;
    case "patreon":
      icon = <PatreonIcon color={sn.patreon.color} />;
      break;
    case "virustotal":
      icon = <VirusTotalIcon color={sn.virustotal.color} />;
      break;
    case "spotify":
      icon = <SpotifyIcon color={sn.spotify.color} />;
      break;
    case "askfm":
      icon = <AskfmIcon color={sn.askfm.color} />;
      break;
    case "duolingo":
      icon = <DuolingoIcon color={sn.duolingo.color} />;
      break;
    case "airbnb":
      icon = <AirbnbIcon color={sn.airbnb.color} />;
      break;
    case "foursquare":
      icon = <FoursquareIcon color={sn.foursquare.color} />;
      break;
    case "strava":
      icon = <StravaIcon color={sn.strava.color} />;
      break;
    case "aboutme":
    case "about.me":
      icon = <AboutDotMeIcon color={sn.aboutme.color} />;
      break;
    case "chess.com":
    case "chess":
      icon = <ChessComIcon color={sn.chess.color} />;
      break;
    case "hibp":
      icon = <HaveIBeenPwnedIcon color={sn.hibp.color} />;
      break;
    case "tumblr":
      icon = <TumblrIcon color={sn.tumblr.color} />;
      break;
    case "etsy":
      icon = <EtsyIcon color={sn.etsy.color} />;
      break;
    case "fitbit":
      icon = <FitbitIcon color={sn.fitbit.color} />;
      break;
    case "nikerunningclub":
      icon = <NikeIcon color={sn.nikerunningclub.color} />;
      break;
    case "notion":
      icon = <NotionIcon color={sn.notion.color} />;
      break;
    case "keybase":
      icon = <KeybaseIcon color={sn.keybase.color} />;
      break;
    case "runtastic":
      icon = <RuntasticIcon color={sn.runtastic.color} />;
      break;
    case "substack":
      icon = <SubstackIcon color={sn.substack.color} />;
      break;
    case "picsart":
      icon = <PicsArtIcon color={sn.picsart.color} />;
      break;
    case "apple":
      icon = <AppleIcon color={sn.apple.color} />;
      break;
    case "teams":
      icon = <TeamsIcon color={sn.teams.color} />;
      break;
    case "onedrive":
      icon = <OnedriveIcon color={sn.onedrive.color} />;
      break;
    case "bereal":
      icon = <BerealIcon color={sn.bereal.color} />;
      break;
    case "dehashed":
      icon = <DehashedIcon color={sn.dehashed.color} />;
      break;

    case "protonmail":
      icon = <img src={protonmailsvg} alt="ProtonMail" />;
      break;
    case "sellix":
      icon = <img src={sellixsvg} alt="Sellix" />;
      break;
    case "vivino":
      icon = <img src={vivinopng} alt="Vivino" />;
      break;
    case "myfitnesspal":
      icon = <img src={myfitnesspalpng} alt="MyFitnessPal" />;
      break;
    case "whatsmyname":
      icon = <img src={whatsmynamejpg} alt="WhatsMyName" />;
      break;
    case "yandex":
      icon = <img src={yandexpng} alt="Yandex" />;
      break;
    case "imageshack":
      icon = <img src={imageshackpng} alt="Imageshack" />;
      break;
    case "taringa":
      icon = <img src={taringapng} alt="Taringa" />;
      break;
    case "shotgun":
      icon = <img src={shotgunpng} alt="Shotgun" />;
      break;
    case "weward":
      icon = <img src={wewardpng} alt="Weward" />;
      break;
    case "life360":
      icon = <img src={life360png} alt="Life360" />;
      break;
    case "okru":
      icon = <img src={okrupng} alt="Okru" />;
      break;
    case "clubhouse":
      icon = <img src={clubhousesvg} alt="Clubhouse" />;
      break;
    case "eyecon":
      icon = <img src={eyeconsvg} alt="Eyecon" />;
      break;
    case "locket":
      icon = <img src={locketpng} alt="Locket" />;
      break;
    case "touchtunes":
      icon = <img src={touchtunespng} alt="Touchtunes" />;
      break;
    case "mocospace":
      icon = <img src={mocospacepng} alt="Mocospace" />;
      break;
    case "whoxy":
      icon = <img src={whoxypng} alt="Whoxy" />;
      break;
    case "runkeeper":
      icon = <img src={runkeeperpng} alt="Runkeeper" />;
      break;
    case "garmin":
      icon = <img src={garminpng} alt="Garmin" />;
      break;
    case "bibleapp":
      icon = <img src={bibleapppng} alt="BibleApp" />;
      break;
    case "goodreads":
      icon = <img src={goodreadspng} alt="Goodreads" />;
      break;
    case "monopolygo":
      icon = <img src={monopolygopng} alt="MonopolyGo" />;
      break;
    case "scrabblego":
      icon = <img src={scrabblegopng} alt="ScrabbleGo" />;
      break;
    case "cavalier":
      icon = <img src={hudsonrockpng} alt="Cavalier" />;
      break;
    case "imvu":
      icon = <img src={imvupng} alt="IMVU" />;
      break;

    default:
      icon = <NetworkIcon />;
      break;
  }

  return icon;
};

export default SocialNetworkIcon;
