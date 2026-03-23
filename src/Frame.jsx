const Frame = ({ children }) => {
  return (
    <div
      class="frame"
      style={{
        border: "2px solid #00468b",
        borderRadius: 8,
        backgroundColor: "#ffffff",
        padding: 16,
      }}>
      {children}
    </div>
  );
};

export default Frame;
