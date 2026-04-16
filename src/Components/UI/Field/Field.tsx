import { useState } from "react";
import "./Field.css";

interface FieldProps {
  setMyDilemma: (value: string) => void;
}

export function Field({ setMyDilemma }: FieldProps) {
  const [input, setInput] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput(e.target.value);
  }

  function handleClick(): void {
    setInput("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setMyDilemma(input);
  }

  return (
    <div className="form-wrapper">
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
        />
      </form>
    </div>
  );
}