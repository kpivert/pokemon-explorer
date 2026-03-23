const Values = ({ variable, value }) => {
  return (
    <>
      <span style={{ fontFamily: "Futura", fontWeight: 800, color: "#050505" }}>
        {variable}&nbsp;
      </span>
      <span style={{ fontFamily: "Gill Sans", color: "#050505" }}>{value}</span>
    </>
  );
};

export default Values;
