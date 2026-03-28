const Maxbar = (props) => {
  return (
    <div
      style={{
        width: props.value + "px",
        height: 10,
        backgroundColor: "#cccccc",
        margin: 4,
      }}></div>
  );
};

export default Maxbar;
