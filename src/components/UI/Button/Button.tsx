import { useRef } from "react";
import "./Button.css";

interface ButtonProps {
  setIsPlaying: (isPlaying: boolean) => void;
  setMyDilemma: (dilemma: string) => void;
}

export const Button = ({ setIsPlaying, setMyDilemma }: ButtonProps) => {
  const continueRef = useRef<HTMLButtonElement>(null!);
  const endRef = useRef<HTMLButtonElement>(null!);

  const endGame = () => {};

  return (
    <div className="button-container">
      {/* <div className="button-container" onClick={changePlanet}>
        <p>Change planet</p>
      </div> */}
      <button
        className="button"
        ref={continueRef}
        onClick={() => {
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Continuer
      </button>
      <button
        className="button"
        ref={endRef}
        onClick={() => {
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Terminer
      </button>
    </div>
  );
};
