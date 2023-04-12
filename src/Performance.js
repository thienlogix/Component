import { useEffect, useMemo } from "react";
import { useState, memo, useCallback, PureComponent, Component } from "react";

function onOuterFunction() {}

export default function Performance() {
  const [counter, setCounter] = useState(0);
  const [params, setParams] = useState({
    test: ["a", "b"],
    counter: () => {},
  });

  function increase() {
    // console.log("counter value: ", counter);
    setCounter((_) => _ + 1);

    if (counter === 1) {
      setParams((_) => ({
        ..._,
        test: 1,
      }));
    }
  }

  function testa() {
    console.log(params);
  }

  useEffect(() => {
    testa();
  });

  const columns = [];

  const wrapTest = useCallback(testa, []);
  const wrapColumn = useMemo(() => columns, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>outter increase</button>
      {/* Render props */}
      {/* <FunctionComponent method={() => "test"} />
      <FunctionMemoComponent columns={wrapColumn} test={wrapTest} />
      <ClassPureComponent columns={wrapColumn} test={wrapTest} />
       */}
      <ClassComponent />
    </div>
  );
}
//stateless or statefull
const FunctionComponent = function (props) {
  console.log("function component rendering");

  const [counter, setCounter] = useState(1);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        marginTop: "16px",
      }}
    >
      <div>Function Component</div>
      {props.method()}
      <button onClick={() => setCounter(0)}>increase {counter}</button>
    </div>
  );
};

const FunctionMemoComponent = memo(function () {
  console.log("function memo component rendering");

  const [counter, setCounter] = useState(1);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        marginTop: "16px",
      }}
    >
      <div>Function Memo Component</div>
      <button onClick={() => setCounter(0)}>increase {counter}</button>
    </div>
  );
});

class ClassComponent extends Component {
  state = {
    counter: 1,
    items: [],
  };

  render() {
    //console.log("class component rendering");
    const colu = [];
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "16px",
          marginTop: "16px",
        }}
      >
        <div>Class Component</div>
        <button onClick={this.setCounter2}>
          increase {this.state.counter}
        </button>
        <Test onTest={this.setCounter} column={this.state.counter} />
      </div>
    );
  }

  setCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  setCounter2 = () => {
    this.setState((_) => ({ counter: _.counter + 1 }));
  };
}

const Test = memo(() => {
  console.log("test component");
  return "test";
});

class ClassPureComponent extends PureComponent {
  state = {
    counter: 1,
  };

  render() {
    console.log("class pure component rendering");

    return (
      <div
        style={{
          border: "1px solid black",
          padding: "16px",
          marginTop: "16px",
        }}
      >
        <div>Class Pure Component</div>
        <button onClick={this.setCounter}>increase {this.state.counter}</button>
      </div>
    );
  }

  setCounter = () => {
    console.log(this);
    this.setState({
      counter: 0,
    });
  };
}
