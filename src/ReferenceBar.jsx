const ReferenceBar = ({ individualVar, maxVar }) => {
  return (
    <div
      style={{
        position: "relative",
        width: maxVar + "px",
        height: 10,
        margin: 4,
      }}>
      {/* Grey background track */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#cccccc",
          borderRadius: 4,
        }}
      />
      {/* Colored HP bar on top */}
      <div
        style={{
          position: "absolute",
          width: individualVar + "px",
          height: "100%",
          backgroundColor: "red",
          borderRadius: 4,
        }}
      />
    </div>
  );
};

export default ReferenceBar;
