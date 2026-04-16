import { useRef } from "react";
import "./Button.css";

interface ButtonProps {
  setIsPlaying: (isPlaying: boolean) => void;
  setMyDilemma: (dilemma: string) => void;
}

export const Button = ({ setIsPlaying, setMyDilemma }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null!);

  return (
    <>
      {/* <div className="button-container" onClick={changePlanet}>
        <p>Change planet</p>
      </div> */}
      <button
        className="button"
        ref={buttonRef}
        onClick={() => {
          setIsPlaying(false);
          setMyDilemma("0");
        }}
      >
        Continuer
      </button>
    </>
  );
};
