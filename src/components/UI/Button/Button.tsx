import { useRef } from "react";
import "./Button.css";

interface ButtonProps {
  setIsPlaying: (isPlaying: boolean) => void;
  setMyDilemma: (dilemma: string) => void;
  onTerminate?: () => void;
}

export const Button = ({ setIsPlaying, setMyDilemma, onTerminate }: ButtonProps) => {
  const continueRef = useRef<HTMLButtonElement>(null!);
  const endRef = useRef<HTMLButtonElement>(null!);

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
          onTerminate?.();
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Terminer
      </button>
    </div>
  );
};
