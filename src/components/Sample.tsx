import "./Sample.scss";
import { socialNetworks } from "../utils/socialNetwork";
import SocialIcons from "./SocialIcons";
import { useState } from "react";

const Sample = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [whiteIcons, setWhiteIcons] = useState(false);
  const [networkColorAsBG, setNetworkColorAsBG] = useState(false);
  const categories = Array.from(
    new Set(Object.values(socialNetworks).map((network) => network.category))
  );

  return (
    <>
      <div className="actions">
        <button onClick={() => setDarkMode((prev) => !prev)}>
          Toggle dark mode
        </button>
        <button onClick={() => setWhiteIcons((prev) => !prev)}>
          Toggle white icons
        </button>
        <button onClick={() => setNetworkColorAsBG((prev) => !prev)}>
          Toggle network color as background
        </button>
      </div>

      {categories.map((c) => (
        <Icons
          key={c}
          category={c}
          networkColorAsBG={networkColorAsBG}
          darkMode={darkMode}
          whiteIcons={whiteIcons}
        />
      ))}
    </>
  );
};

export default Sample;

type Props = {
  category: string;
  networkColorAsBG: boolean;
  darkMode: boolean;
  whiteIcons: boolean;
};

export const Icons = ({
  category,
  networkColorAsBG,
  darkMode,
  whiteIcons,
}: Props) => {
  return (
    <div className="wrapper">
      <h2>{category}</h2>

      <div
        className="grid"
        data-darkmode={darkMode}
        data-whiteicons={whiteIcons}
        data-networkcolorasbg={networkColorAsBG}
      >
        {Object.keys(socialNetworks)
          .filter((network) => socialNetworks[network].category === category)
          .sort((a, b) => a.localeCompare(b))
          .map((network) => (
            <div
              key={network}
              className="item"
              style={
                networkColorAsBG
                  ? { backgroundColor: socialNetworks[network].color }
                  : undefined
              }
            >
              <SocialIcons source={network} />{" "}
              <h4>
                {socialNetworks[network].name ?? <b>{network}</b>}
                <small>{network}</small>
              </h4>
              <div
                className="color"
                style={{ backgroundColor: socialNetworks[network].color }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
