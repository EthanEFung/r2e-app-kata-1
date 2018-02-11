const sampleAction = () => {
  //returning a function
  return (dispatch) => dispatch({ type: "DEMONSTRATE_ACTION" });
}

export default sampleAction;