import { useRef } from "react";
import "./Button.css";

export const Button = ({ setIsPlaying, setMyDilemma }) => {
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
