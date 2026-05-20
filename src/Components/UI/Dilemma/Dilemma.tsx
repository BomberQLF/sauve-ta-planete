import "./Dilemma.css";
import { dilemmas } from "../../../data/dilemmas.json";

interface DilemmaProps {
  myDilemma: string;
  setUnfloodPlanet: (unfloodPlanet: boolean) => void;
  setGrowTrees: (growTrees: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setUnmeltIce: (meltIce: boolean) => void;
  setTurnPlanetGreen: (turnPlanetGreen: boolean) => void;
  setCleanAir: (cleanAir: boolean) => void;
  setCleanWater: (cleanWater: boolean) => void;
}

export function Dilemma({
  myDilemma,
  setUnfloodPlanet,
  setGrowTrees,
  setIsPlaying,
  setUnmeltIce,
  setTurnPlanetGreen,
  setCleanAir,
  setCleanWater,
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
        setUnmeltIce(true);
        setUnfloodPlanet(true);
        break;
      case "2":
        setIsPlaying(true);
        setTurnPlanetGreen(true);
        break;
      case "3":
        setIsPlaying(true);
        setGrowTrees(true);
        break;
      case "4":
        setIsPlaying(true);
        setCleanAir(true);
        break;
      case "5":
        setIsPlaying(true);
        setCleanWater(true);
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
