const Frame = ({ children, style, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="frame"
      style={{
        border: "3px solid #246eff",
        borderRadius: 8,
        backgroundColor: "#FFF9C4",
        padding: 16,
        margin: 10,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Frame;
