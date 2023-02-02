const Increment = (props) => {
  return (
    props.counter < 10 && (
      <button
        className="plus"
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        +
      </button>
    )
  );
};

export default Increment;
