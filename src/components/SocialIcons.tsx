import { Icon } from "@iconify/react";
import LocalIcon from "./LocalIcon";
import { socialNetworks } from "../utils/socialNetwork";
import { ReactNode } from "react";

type PropsTypes = { source?: string };

/**
 * @param source Req. a string containing the social network label, ex : 'facebook', 'twitter', etc
 */
const SocialIcons = ({ source }: PropsTypes): ReactNode | null => {
  if (!source) return null;
  // own keys only: "constructor" or "toString" must fall back like any unknown source
  const network = Object.prototype.hasOwnProperty.call(socialNetworks, source)
    ? socialNetworks[source]
    : undefined;
  if (!network) return <Icon icon="mdi:share-variant-outline" />;
  if (network.logo) return <LocalIcon file={network.logo} alt={network.name ?? source} />;
  return <Icon icon={network.icon} color={network.color} />;
};

export default SocialIcons;
