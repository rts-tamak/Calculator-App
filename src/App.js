import Wrapper from "./components/Wrapper.jsx";
import "./App.css";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { wrapper } from "./components/WrapperStyles.js";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const handleButtonClick = (value) => {
    // Handle button click logic here
    console.log("Button clicked:", value);
  };

  return (
 
    <Wrapper className={wrapper}>
      <Screen value="0" />
      <Screen />
      <ButtonBox>
        {btnValues.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((value, colIndex) => (
              <div key={colIndex} className="button">
                <Button
                  key={colIndex}
                  value={value}
                  onClick={() => handleButtonClick(value)}
                />
              </div>
            ))}
          </div>
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
