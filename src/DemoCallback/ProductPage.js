import React from "react";
import PropTypes from "prop-types";
import ShippingForm from "./ShippingForm";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import ShippingClass from "./ShippingClass";

function ProductPage(props) {
  const [count, setCount] = useState(0);

  const increaseCallback = () => {
    setCount((_) => _ + 1);
  };

  const test = useCallback(() => {
    console.log("log");
  }, []);

  const test2 = useMemo(() => <ShippingForm />, []);

  return (
    <>
      <div>ProductPage: {count}</div>
      <button onClick={increaseCallback}>Callback {count}</button>
      {/* <ShippingForm count={val} /> */}
      <ShippingClass test={test2} />
    </>
  );
}

ProductPage.propTypes = {};

export default ProductPage;
