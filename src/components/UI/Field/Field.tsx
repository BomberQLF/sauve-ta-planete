import { useState } from "react";
import "./Field.css";

export function Field({ setMyDilemma }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMyDilemma(input);
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="text-input-container">
          <label>Dilemma:</label>
          <input
            className="text-input"
            type="text"
            value={input}
            onChange={handleChange}
            onClick={handleClick}
            maxLength={2}
          />
        </div>
        <input
          className="submit-button"
          type="submit"
          value="Submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
