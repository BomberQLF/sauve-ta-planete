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
    setMyDilemma(String(parseInt(input, 10)));
  }

  const displayValue = input.length === 1 ? "0" + input : input;

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">Votre numéro de dilemme</label>

        <div className="digit-display">
          {[0, 1].map((i) => (
            <span key={i} className="field-digit">
              {displayValue[i] ?? " "}
            </span>
          ))}
          <input
            className="text-input-hidden"
            type="text"
            value={input}
            onChange={handleChange}
            onClick={handleClick}
            maxLength={2}
            autoComplete="off"
            autoFocus={true}
          />
        </div>

        <button className="btn-multicolor submit-btn" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}
