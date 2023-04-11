import React, { useContext, useEffect, useState } from "react";
import StudentContext from "./StudentContext";

function FunctionComponent(props) {
  // Way 1
  const context = useContext(StudentContext);
  //console.log("funnction-component outside", context);

  // DEMO
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]); // <- dependencies

  const [orders, fetchOrders] = useListOrder();
  useEffect(() => {
    // componentDidMount
    console.log("funnction-component outside", context);
    // first call after rendered component
    fetchOrders();

    // updated each props or state change
    return () => {
      // componentWillUnmount
      // destroy component when move out of view
    };

    // when has dependencies, componentDidUpdate
  }, []); // <- dependencies

  function increase() {
    setCounter((currentState) => currentState + 1);
    //setCounter((currentState) => currentState + 1);
    //setCounter((currentState) => currentState + 1);

    // Avoid
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }

  return (
    <StudentContext.Consumer>
      {/* {(context) => { */}
      {({ author, students }) => {
        return (
          <>
            <button onClick={increase}>
              {props.counter} FunctionComponent {counter}: {author}: {students}:
              orders {orders}
            </button>
          </>
        );
      }}
    </StudentContext.Consumer>
  );
}

// HOOK
function useListOrder() {
  const [items, setItems] = useState([]);

  async function listAsync() {
    // calling API
    const items = 12;
    setItems(items);
  }

  return [items, listAsync];
}

FunctionComponent.propTypes = {};
FunctionComponent.defaultProps = {};

export default FunctionComponent;
