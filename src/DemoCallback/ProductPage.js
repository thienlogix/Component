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

  const test3 = () => {
    console.log("test3");
  };

  const test4 = 123;

  return (
    <>
      <div>ProductPage: {count}</div>
      <button onClick={increaseCallback}>Callback {count}</button>
      <ShippingForm test={test4} />
      {/* <ShippingClass test={test3} /> */}
    </>
  );
}

ProductPage.propTypes = {};

export default ProductPage;
