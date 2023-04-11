import { useMemo } from "react";
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
    setCounter((c) => c + 1);
    if (counter === 1) {
      setParams((currentState) => ({
        ...currentState,
        test: 1,
      }));
    }
  }

  function test() {}

  const columns = [];

  const wrapTest = useCallback(test, []);
  const wrapColumn = useMemo(() => columns, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>outter increase</button>
      {/* Render props */}
      <FunctionComponent method={() => "test"} />
      <FunctionMemoComponent columns={wrapColumn} test={wrapTest} />
      <ClassPureComponent columns={wrapColumn} test={wrapTest} />
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
    console.log("class component rendering");
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
        <button onClick={this.setCounter}>increase {this.state.counter}</button>
        <Test onTest={this.setCounter} column={this.state.counter} />
      </div>
    );
  }

  setCounter = () => {
    this.setState({
      counter: 0,
    });
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

    const colun = [];
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
