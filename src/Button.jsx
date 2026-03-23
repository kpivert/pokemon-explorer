// import { useState } from "react";

const Button = (props) => {
  return (
    <button
      onClick={() =>
        props.setPokemonData(
          props.pokemons.filter((d) => d.type === props.group),
        )
      }>
      {props.group}!
    </button>
  );
};

export default Button;
