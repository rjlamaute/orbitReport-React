import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
        {displaySats.map((sat,id) => {
          return (
            <button onClick={() =>
            filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          )
        })}
      <button onClick={() =>
      satData(setSat)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
