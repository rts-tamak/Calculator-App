
import Wrapper from "./components/Wrapper.js";
// @babel/plugin-proposal-private-property-in-object
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./components/Button.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <Screen/>
      <ButtonBox>
        
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
