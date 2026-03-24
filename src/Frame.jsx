const Frame = ({ children, style, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      class="frame"
      style={{
        border: "2px solid #246eff",
        borderRadius: 8,
        backgroundColor: "#fefefe",
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
