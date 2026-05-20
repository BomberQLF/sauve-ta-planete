import "./Dilemma.css";
import { data } from "../../../data/dilemmas.json";
// import data from "../../../data/data.json";

interface DilemmaProps {
  myDilemma: string;
  setUnfloodPlanet: (unfloodPlanet: boolean) => void;
  setGrowTrees: (growTrees: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setUnmeltIce: (meltIce: boolean) => void;
  setTurnPlanetGreen: (turnPlanetGreen: boolean) => void;
  setCleanAir: (cleanAir: boolean) => void;
  setCleanWater: (cleanWater: boolean) => void;
  setReplaceBuildings: (replaceBuildings: boolean) => void;
  setCleanWaste: (cleanWaste: boolean) => void;
}

const history: number[] = [];

export function Dilemma({
  myDilemma,
  setUnfloodPlanet,
  setGrowTrees,
  setIsPlaying,
  setUnmeltIce,
  setTurnPlanetGreen,
  setCleanAir,
  setCleanWater,
  setReplaceBuildings,
  setCleanWaste,
}: DilemmaProps) {
  let dilemma = data.find((e) => e.id === myDilemma);
  if (!dilemma) return;

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      // playAnimations(dilemma.id);
      const available = [1, 2, 3, 4, 5, 6, 7].filter(
        (n) => !history.includes(n),
      );
      const consequence =
        available[Math.floor(Math.random() * available.length)];
      playAnimations(consequence.toString());
      history.push(consequence);
      console.log(history);
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
      case "6":
        setIsPlaying(true);
        setReplaceBuildings(true);
        break;
      case "7":
        setIsPlaying(true);
        setCleanWaste(true);
        break;
    }
  };
  return (
    <div className="info-container">
      <div className="dilemma-container">
        <h2>{dilemma.title}</h2>
        <p>{dilemma.desc}</p>
        <p>{dilemma.options[0].desc}</p>
        <p>{dilemma.options[1].desc}</p>
      </div>
      <div className="option-container">
        {dilemma.options.map((option) => (
          <button
            key={option.id}
            className="option-button"
            onClick={() => {
              handleClick(option.isCorrect);
            }}
          >
            {option.id}
          </button>
        ))}
      </div>
    </div>
  );
}
