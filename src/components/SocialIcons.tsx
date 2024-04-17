import {
  FaFacebookF as FacebookIcon,
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
  FaDropbox as DropboxIcon,
} from "react-icons/fa";
import {
  FaXTwitter as TwitterXIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";
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
import {
  BsSignal as SignalIcon,
  BsDatabaseExclamation as ClearStreamIcon,
} from "react-icons/bs";
import { TbBrandPicsart as PicsArtIcon } from "react-icons/tb";
import { BiLogoMicrosoftTeams as TeamsIcon } from "react-icons/bi";
import { ImOnedrive as OnedriveIcon } from "react-icons/im";
import { LiaHashtagSolid as DehashedIcon } from "react-icons/lia";
import { PiShareNetwork as NetworkIcon } from "react-icons/pi";
import { IoIosRocket as RocketReachIcon } from "react-icons/io";

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
import pagesjaunessvg from "../assets/social-icons/pagesjaunes.svg";
import copainsdavantsvg from "../assets/social-icons/copainsdavant.svg";

import { socialNetworks } from "../utils/socialNetwork";
import { SourceTypes } from "../types/sourceTypes";

type PropsTypes = { source?: string };

/**
 * @param source Req. a string containing the social network label, ex : 'facebook', 'twitter', etc
 */

const SocialIcons = ({ source }: PropsTypes): JSX.Element | null => {
  let icon: null | JSX.Element = null;

  if (!source) return icon;

  switch (source as SourceTypes) {
    case "facebook":
      icon = <FacebookIcon color={socialNetworks.facebook.color} />;
      break;
    case "twitter":
      icon = <TwitterIcon color={socialNetworks.twitter.color} />;
      break;
    case "x":
      icon = <TwitterXIcon color={socialNetworks.x.color} />;
      break;
    case "instagram":
      icon = <InstagramIcon color={socialNetworks.instagram.color} />;
      break;
    case "telegram":
      icon = <TelegramIcon color={socialNetworks.telegram.color} />;
      break;
    case "linkedin":
      icon = <LinkedinIcon color={socialNetworks.linkedin.color} />;
      break;
    case "whatsapp":
      icon = <WhatsappIcon color={socialNetworks.whatsapp.color} />;
      break;
    case "skype":
      icon = <SkypeIcon color={socialNetworks.skype.color} />;
      break;
    case "github":
      icon = <GithubIcon color={socialNetworks.github.color} />;
      break;
    case "gravatar":
      icon = <GravatarIcon color={socialNetworks.gravatar.color} />;
      break;
    case "snapchat":
      icon = <SnapchatIcon color={socialNetworks.snapchat.color} />;
      break;
    case "youtube":
      icon = <YoutubeIcon color={socialNetworks.youtube.color} />;
      break;
    case "myspace":
      icon = <MyspaceIcon color={socialNetworks.myspace.color} />;
      break;
    case "reddit":
      icon = <RedditIcon color={socialNetworks.reddit.color} />;
      break;
    case "imgur":
      icon = <ImgurIcon color={socialNetworks.imgur.color} />;
      break;
    case "pinterest":
      icon = <PinterestIcon color={socialNetworks.pinterest.color} />;
      break;
    case "xbox":
      icon = <XboxIcon color={socialNetworks.xbox.color} />;
      break;
    case "playstation":
      icon = <PlaystationIcon color={socialNetworks.playstation.color} />;
      break;
    case "mastodon":
      icon = <MastodonIcon color={socialNetworks.mastodon.color} />;
      break;
    case "vk":
      icon = <VkIcon color={socialNetworks.vk.color} />;
      break;
    case "gitlab":
      icon = <GitlabIcon color={socialNetworks.gitlab.color} />;
      break;
    case "steam":
      icon = <SteamIcon color={socialNetworks.steam.color} />;
      break;
    case "kaggle":
      icon = <KaggleIcon color={socialNetworks.kaggle.color} />;
      break;
    case "trello":
      icon = <TrelloIcon color={socialNetworks.trello.color} />;
      break;
    case "docker":
      icon = <DockerIcon color={socialNetworks.docker.color} />;
      break;
    case "twitch":
      icon = <TwitchIcon color={socialNetworks.twitch.color} />;
      break;
    case "medium":
      icon = <MediumIcon color={socialNetworks.medium.color} />;
      break;
    case "flickr":
      icon = <FlickrIcon color={socialNetworks.flickr.color} />;
      break;
    case "google":
      icon = <GoogleIcon color={socialNetworks.google.color} />;
      break;
    case "signal":
      icon = <SignalIcon color={socialNetworks.signal.color} />;
      break;
    case "tiktok":
      icon = <TikTokIcon color={socialNetworks.tiktok.color} />;
      break;
    case "discord":
      icon = <DiscordIcon color={socialNetworks.discord.color} />;
      break;
    case "paypal":
      icon = <PaypalIcon color={socialNetworks.paypal.color} />;
      break;
    case "quora":
      icon = <QuoraIcon color={socialNetworks.quora.color} />;
      break;
    case "periscope":
      icon = <PeriscopeIcon color={socialNetworks.periscope.color} />;
      break;
    case "giphy":
      icon = <GiphyIcon color={socialNetworks.giphy.color} />;
      break;
    case "disqus":
      icon = <DisqusIcon color={socialNetworks.disqus.color} />;
      break;
    case "patreon":
      icon = <PatreonIcon color={socialNetworks.patreon.color} />;
      break;
    case "virustotal":
      icon = <VirusTotalIcon color={socialNetworks.virustotal.color} />;
      break;
    case "spotify":
      icon = <SpotifyIcon color={socialNetworks.spotify.color} />;
      break;
    case "askfm":
      icon = <AskfmIcon color={socialNetworks.askfm.color} />;
      break;
    case "duolingo":
      icon = <DuolingoIcon color={socialNetworks.duolingo.color} />;
      break;
    case "airbnb":
      icon = <AirbnbIcon color={socialNetworks.airbnb.color} />;
      break;
    case "foursquare":
      icon = <FoursquareIcon color={socialNetworks.foursquare.color} />;
      break;
    case "strava":
      icon = <StravaIcon color={socialNetworks.strava.color} />;
      break;
    case "aboutme":
      icon = <AboutDotMeIcon color={socialNetworks.aboutme.color} />;
      break;
    case "chess":
      icon = <ChessComIcon color={socialNetworks.chess.color} />;
      break;
    case "hibp":
      icon = <HaveIBeenPwnedIcon color={socialNetworks.hibp.color} />;
      break;
    case "tumblr":
      icon = <TumblrIcon color={socialNetworks.tumblr.color} />;
      break;
    case "etsy":
      icon = <EtsyIcon color={socialNetworks.etsy.color} />;
      break;
    case "fitbit":
      icon = <FitbitIcon color={socialNetworks.fitbit.color} />;
      break;
    case "nikerunningclub":
      icon = <NikeIcon color={socialNetworks.nikerunningclub.color} />;
      break;
    case "notion":
      icon = <NotionIcon color={socialNetworks.notion.color} />;
      break;
    case "keybase":
      icon = <KeybaseIcon color={socialNetworks.keybase.color} />;
      break;
    case "runtastic":
      icon = <RuntasticIcon color={socialNetworks.runtastic.color} />;
      break;
    case "substack":
      icon = <SubstackIcon color={socialNetworks.substack.color} />;
      break;
    case "picsart":
      icon = <PicsArtIcon color={socialNetworks.picsart.color} />;
      break;
    case "apple":
      icon = <AppleIcon color={socialNetworks.apple.color} />;
      break;
    case "teams":
      icon = <TeamsIcon color={socialNetworks.teams.color} />;
      break;
    case "onedrive":
      icon = <OnedriveIcon color={socialNetworks.onedrive.color} />;
      break;
    case "bereal":
      icon = <BerealIcon color={socialNetworks.bereal.color} />;
      break;
    case "dehashed":
      icon = <DehashedIcon color={socialNetworks.dehashed.color} />;
      break;
    case "rocketreach":
      icon = <RocketReachIcon color={socialNetworks.rocketreach.color} />;
      break;
    case "dropbox":
      icon = <DropboxIcon color={socialNetworks.dropbox.color} />;
      break;
    case "clearstream":
      icon = <ClearStreamIcon color={socialNetworks.clearstream.color} />;
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
    case "hudsonrock":
      icon = <img src={hudsonrockpng} alt="Cavalier" />;
      break;
    case "imvu":
      icon = <img src={imvupng} alt="IMVU" />;
      break;
    case "pagesjaunes":
      icon = <img src={pagesjaunessvg} alt="Pages Jaunes" />;
      break;
    case "copainsdavant":
      icon = <img src={copainsdavantsvg} alt="Copains d'avant" />;
      break;

    default:
      icon = <NetworkIcon />;
      break;
  }

  return icon;
};

export default SocialIcons;
