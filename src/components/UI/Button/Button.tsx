import { useRef } from "react";
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
  const continueRef = useRef<HTMLButtonElement>(null!);
  const endRef = useRef<HTMLButtonElement>(null!);
  const restartRef = useRef<HTMLButtonElement>(null!);

  return (
    <div className="button-container">
      <button
        className="btn-multicolor button"
        ref={continueRef}
        onClick={() => {
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Continuer
      </button>
      <button
        className="btn-multicolor button"
        ref={endRef}
        onClick={() => {
          setIsPlaying(false);
          setEndGame(true);
        }}
      >
        Terminer
      </button>
      <button
        className="btn-multicolor button"
        ref={restartRef}
        onClick={() => {
          onRestart?.();
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Recommencer
      </button>
    </div>
  );
};
