import "./Sample.scss";
import { socialNetworks } from "../utils/socialNetwork";
import SocialIcons from "./SocialIcons";
import { useState } from "react";

const Sample = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [whiteIcons, setWhiteIcons] = useState(false);
  const [networkColorAsBG, setNetworkColorAsBG] = useState(false);

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
      <div
        className="grid"
        data-darkmode={darkMode}
        data-whiteicons={whiteIcons}
        data-networkcolorasbg={networkColorAsBG}
      >
        {Object.keys(socialNetworks)
          .sort((a, b) => a.localeCompare(b))
          .map((network) => (
            <div
              key={network}
              className="item"
              style={
                networkColorAsBG
                  ? {
                      backgroundColor: socialNetworks[network].color,
                    }
                  : {}
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
    </>
  );
};

export default Sample;
