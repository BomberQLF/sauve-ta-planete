import rectangleDesignImg from "../../../assets/rectangleDesign.png";
import backReponseImg from "../../../assets/backReponse.png";
import "./Dilemma.css";
import data from "../../../data/data.json";

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
  const text = data.find((e) => String(e.id) === myDilemma);
  if (!text) return null;

  const options = [
    {
      id: `${text.id}A`,
      desc: text.option_A,
      isCorrect: text.option_ecoresponsable === "A",
    },
    {
      id: `${text.id}B`,
      desc: text.option_B,
      isCorrect: text.option_ecoresponsable === "B",
    },
  ];

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      playAnimations(String(text.id));
    } else {
      setIsPlaying(true);
    }
  };

  const playAnimations = (dilemmaId: string) => {
    switch (dilemmaId) {
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
      default:
        setIsPlaying(true);
        break;
    }
  };

  const paddedId = String(text.id).padStart(2, "0");

  return (
    <div className="info-container">

      {/* ── Carte dilemme (droite) ── */}
      <div className="dilemma-wrapper">
        <img src={rectangleDesignImg} alt="" className="dilemma-frame" draggable={false} />
        <div className="dilemma-overlay">
          <div className="dilemma-number">
            {paddedId.split("").map((digit, i) => (
              <span key={i} className="dilemma-digit">{digit}</span>
            ))}
          </div>
          <div className="dilemma-visual" />
          <p className="dilemma-desc">{text.situation}</p>
        </div>
      </div>

      {/* ── Réponses (bas gauche) ── */}
      <div className="reponses-wrapper">
        <img src={backReponseImg} alt="" className="reponses-frame" draggable={false} />
        <div className="reponses-overlay">
          {options.map((option) => (
            <button
              key={option.id}
              className="option-button"
              onClick={() => handleClick(option.isCorrect)}
            >
              {option.desc}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
