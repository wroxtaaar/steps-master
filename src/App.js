import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const style = { backgroundColor: "#7950f2", color: "#fff" };

  // let step = 1;

  function goNext() {
    if (step < 3) setStep(step + 1);
  }

  function goback() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            {/* <button style={style} onClick={() => {goback()}}>
          Previous
        </button>
        <button style={style} onClick={() => {goNext()}}>
          Next
        </button> */}
            <Button style={style} direction={goback} text="Previous" />
            <Button style={style} direction={goNext} text="Next" />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ style, direction, text }) {
  return (
    <button style={style} onClick={direction}>
      {text}
    </button>
  );
}
