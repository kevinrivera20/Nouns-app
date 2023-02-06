import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

function App() {
  const obtResult = useRef(null);

  const [result, setResult] = useState("");

  // function isVowel(c) {
  //   return ["l", "r", "b", "d", "v", "f", "t", "a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
  // }

  const sliceRemove = (text, index) => {
    return text.slice(index);
  };

  const removeLetterIndex = (text, index) => {
    return text.substring(0, text.length + index);
  };

  const ruleOne = (text) => {
    let textResult = "";
    textResult = text + "s";
    console.log(text);
    setResult(textResult);
  };

  const ruleTwo = (text) => {
    const lastLetters = sliceRemove(text, -2);
    const ultimateLetter = sliceRemove(text, -1);
    let textResultTwo = "";
    if (
      lastLetters === "sh" ||
      lastLetters === "ch" ||
      ultimateLetter === "x" ||
      ultimateLetter === "z" ||
      ultimateLetter === "o"
    ) {
      textResultTwo = text + "es";
      console.log("Se cumple la condicion");
      setResult(textResultTwo);
    }
  };

  // const ruleThree = (text) => {
  //   const lastTwo = text.split("")[text.length - 2];
  //   const last = sliceRemove(text, -1);
  //   const isVowelPenultimateLetter = isVowel(lastTwo);
  //   const isVowelLastLetter = isVowel(last);
  //   let textResultThree = "";
  //   console.log(isVowelPenultimateLetter, isVowelLastLetter);
  // };

  const ruleFour = (text) => {
    const lastLetters = sliceRemove(text, -2);
    const removeLetters = removeLetterIndex(text, -2);
    let textResultTwo = "";
    if (lastLetters === "fe") {
      textResultTwo = removeLetters + "ves";
      setResult(textResultTwo);
    }
  };

  const handleClick = () => {
    const text = obtResult.current.value;
    setResult(obtResult.current.value);
    ruleOne(text);
    ruleTwo(text);
    ruleFour(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Plural Nouns</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter a noun"
              ref={obtResult}
            />
            <Form.Text className="text-muted">
              Enter a noun, to make it plural
            </Form.Text>
          </Form.Group>
          <Button onClick={handleClick}>See result</Button>
          <h1 className="resultado">Result: {result}</h1>
        </Form>
      </header>
    </div>
  );
}

export default App;
