import "./Dilemma.css";
import { dilemmas } from "../../../data/dilemmas.json";

interface DilemmaProps {
  myDilemma: string;
  setFloodPlanet: (floodPlanet: boolean) => void;
  setGrowTrees: (growTrees: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setMeltIce: (meltIce: boolean) => void;
  setTurnPlanetGreen: (turnPlanetGreen: boolean) => void;
}

export function Dilemma({
  myDilemma,
  setFloodPlanet,
  setGrowTrees,
  setIsPlaying,
  setMeltIce,
  setTurnPlanetGreen,
}: DilemmaProps) {
  let text = dilemmas.find((e) => e.id === myDilemma);
  if (!text) return;

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      playAnimations(text.id);
    } else {
      setIsPlaying(true);
    }
  };

  const playAnimations = (dilemma: string) => {
    switch (dilemma) {
      case "1":
        setIsPlaying(true);
        setMeltIce(true);
        setFloodPlanet(true);
        break;
      case "2":
        setIsPlaying(true);
        setTurnPlanetGreen(true);
        break;
      case "3":
        setIsPlaying(true);
        setGrowTrees(true);
        break;
    }
  };
  return (
    <div className="info-container">
      <div className="dilemma-container">
        <h2>{text.title}</h2>
        <p>{text.desc}</p>
      </div>
      <div className="option-container">
        {text.options.map((option) => (
          <button
            key={option.id}
            className="option-button"
            onClick={() => {
              handleClick(option.isCorrect);
            }}
          >
            {option.desc}
          </button>
        ))}
      </div>
    </div>
  );
}
