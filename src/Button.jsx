// import { useState } from "react";

// const Button = (props) => {
//   return (
//     <button
//       onClick={() =>
//         props.setPokemonData(
//           props.pokemons.filter((d) => d.type === props.group),
//         )
//       }>
//       {props.group}
//     </button>
//   );
// };

// export default Button;

import fireIcon from "./assets/fire.svg";
import waterIcon from "./assets/water.svg";
import grassIcon from "./assets/grass.svg";
import electricIcon from "./assets/electric.svg";
import psychicIcon from "./assets/psychic.svg";
import normalIcon from "./assets/normal.svg";
import ghostIcon from "./assets/ghost.svg";
import fightingIcon from "./assets/fighting.svg";
import rockIcon from "./assets/rock.svg";
import dragonIcon from "./assets/dragon.svg";

const TYPE_ICONS = {
  Fire: fireIcon,
  Water: waterIcon,
  Grass: grassIcon,
  Electric: electricIcon,
  Psychic: psychicIcon,
  Normal: normalIcon,
  Ghost: ghostIcon,
  Fighting: fightingIcon,
  Rock: rockIcon,
  Dragon: dragonIcon,
};

const Button = (props) => {
  return (
    <button
      className="type-button"
      onClick={() =>
        props.setPokemonData(
          props.pokemons.filter((d) => d.type === props.group),
        )
      }
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        borderRadius: "10px",
      }}>
      <img src={TYPE_ICONS[props.group]} alt="" width={16} height={16} />
      {props.group}
    </button>
  );
};

export default Button;
