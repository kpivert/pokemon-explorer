const ReferenceBar = ({ individualVar, maxVar, variable }) => {
  return (
    <div
      style={{
        position: "relative",
        width: maxVar + "px",
        height: 10,
        margin: "4px 4px 4px 0",
        alignSelf: "stretch",
      }}>
      {/* Grey background track */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#cccccc",
          borderRadius: "0 3px 3px 0",
        }}
      />
      {/* Colored HP bar on top */}
      <div
        style={{
          position: "absolute",
          width: individualVar + "px",
          height: "100%",
          // backgroundColor: "red",
          backgroundColor: variable === "hp" ? "#00C000" : "#FF8C00",
          borderRadius: "0 3px 3px 0",
        }}
      />
    </div>
  );
};

export default ReferenceBar;
