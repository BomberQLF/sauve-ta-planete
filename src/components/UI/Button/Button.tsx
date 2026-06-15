import { useRef, useState } from "react";
import "./Button.css";

interface ButtonProps {
  setIsPlaying: (isPlaying: boolean) => void;
  setMyDilemma: (dilemma: string) => void;
  setEndGame: (endGame: boolean) => void;
  onRestart?: () => void;
}

export const Button = ({
  setIsPlaying,
  setMyDilemma,
  setEndGame,
  onRestart,
}: ButtonProps) => {
  const [terminated, setTerminated] = useState(false);

  return (
    <div className={`button-container ${terminated ? " single" : ""}`}>
      {/* Continuer */}
      <button
        className={`btn-multicolor button${terminated ? " button--fade-out" : ""}`}
        onClick={() => {
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Continuer
      </button>

      {/* Terminer */}
      <button
        className={`btn-multicolor button${terminated ? " button--fade-out" : ""}`}
        onClick={() => {
          setTerminated(true);
          setEndGame(true);
          // setIsPlaying(false);
        }}
      >
        Terminer
      </button>

      {/* Recommencer — toujours dans le DOM, opacity 0 au départ */}
      <button
        className={`btn-multicolor button button--restart${terminated ? " button--restart--visible" : ""}`}
        onClick={() => onRestart?.()}
      >
        Recommencer
      </button>
    </div>
  );
};
