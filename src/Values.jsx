const Values = ({ variable, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 4,
        whiteSpace: "nowrap",
      }}>
      <span style={{ fontFamily: "Futura", fontWeight: 800, color: "#050505" }}>
        {variable}
      </span>
      <span style={{ fontFamily: "Gill Sans", color: "#050505" }}>{value}</span>
    </div>
  );
};

export default Values;
