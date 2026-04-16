import "./Dilemma.css";
import { dilemmas } from "../../../data/dilemmas.json";

interface DilemmaProps {
  myDilemma: string;
  setFloodPlanet: (floodPlanet: boolean) => void;
  setGrowTrees: (growTrees: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setMeltIce: (meltIce: boolean) => void;
}

export function Dilemma({
  myDilemma,
  setFloodPlanet,
  setGrowTrees,
  setIsPlaying,
  setMeltIce,
}: DilemmaProps) {
  let text = dilemmas.find((e) => e.id === myDilemma);
  if (!text) return;

  const handleClick = () => {
    switch (text.id) {
      case "1":
        setIsPlaying(true);
        setGrowTrees(true);
        break;
      case "2":
        setIsPlaying(true);
        setMeltIce(true);
        setFloodPlanet(true);
        break;
      case "3":
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
            onClick={() => (option.isCorrect ? handleClick() : null)}
          >
            {option.desc}
          </button>
        ))}
      </div>
    </div>
  );
}
