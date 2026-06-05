import consignesImg from "../../assets/consignes.png";
import btnImg from "../../assets/BTN.png";
import "./InstructionsScreen.css";

interface InstructionsScreenProps {
  onStart: () => void;
}

export default function InstructionsScreen({ onStart }: InstructionsScreenProps) {
  return (
    <div className="instructions-screen">
      <div className="instructions-frame">
        <img
          src={consignesImg}
          alt="Comment jouer ?"
          className="instructions-frame__bg"
          draggable={false}
        />
        <div className="instructions-frame__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante.
          </p>
        </div>
        <button className="instructions-frame__btn" onClick={onStart}>
          <img src={btnImg} alt="Jouer" draggable={false} />
        </button>
      </div>
    </div>
  );
}
