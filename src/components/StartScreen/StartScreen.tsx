import terraLogo from "../../assets/terra_logo.png";
import multicolorBackImg from "../../assets/multicolorBack.png";
import "./StartScreen.css";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start-screen">
      <img
        src={multicolorBackImg}
        aria-hidden="true"
        className="start-screen__bg-rotate"
        draggable={false}
      />
      <img src={terraLogo} alt="Terra" className="start-screen__logo" />
      <button className="btn-multicolor start-screen__button" onClick={onStart}>
        JOUER
      </button>
    </div>
  );
}
