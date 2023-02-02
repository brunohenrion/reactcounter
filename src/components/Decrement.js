const Decrement = (props) => {
  return (
    props.counter > 0 && (
      <button
        className="minus"
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        -
      </button>
    )
  );
};

export default Decrement;
