import react from "react";

const PokeInfo = () => {
  return (
    <>
      <h1>リザードン</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt=""
      />
      <div className="abilities">
        <div className="group">
          <h2>blaze</h2>
        </div>
        <div className="group">
          <h2>solar-power</h2>
        </div>
        <div className="base-stat">
          <h3>HP:30</h3>
          <h3>HP:30</h3>
          <h3>HP:30</h3>
          <h3>HP:30</h3>
          <h3>HP:30</h3>
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
