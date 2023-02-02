const Reset = (props) => {
  return (
    <div
      className="reset"
      onClick={() => {
        props.setCounter(0);
      }}
    >
      <button className="text">Reset</button>
    </div>
  );
};

export default Reset;
