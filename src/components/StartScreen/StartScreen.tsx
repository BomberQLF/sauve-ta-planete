import terraLogo from "../../assets/terra_logo.png";
import "./StartScreen.css";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start-screen">
      <img src={terraLogo} alt="Terra" className="start-screen__logo" />
      <button className="start-screen__button" onClick={onStart}>
        JOUER
      </button>
    </div>
  );
}
