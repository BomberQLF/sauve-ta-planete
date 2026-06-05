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
  setTransitionEnergy: (transitionEnergy: boolean) => void;
  setAddAnimals: (addAnimals: boolean) => void;
  setExtinguishFire: (extinguishFire: boolean) => void;
  onCorrectAnswer: (id: string) => void;
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
  setTransitionEnergy,
  setAddAnimals,
  setExtinguishFire,
  onCorrectAnswer,
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
      onCorrectAnswer(String(text.id));
      const available = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
        (n) => !history.includes(n),
      );
      if (available.length === 0) {
        setIsPlaying(true);
      }
      if (history.length === 0) {
        const consequence = 1;
        playAnimations(consequence.toString());
        history.push(consequence);
      } else if (history.length === 1) {
        const consequence = 2;
        playAnimations(consequence.toString());
        history.push(consequence);
      } else {
        const consequence =
          available[Math.floor(Math.random() * available.length)];
        playAnimations(consequence.toString());
        history.push(consequence);
      }
    } else {
      setIsPlaying(true);
    }
  };

  const playAnimations = (dilemmaId: string) => {
    switch (dilemmaId) {
      case "1":
        setIsPlaying(true);
        setExtinguishFire(true);
        break;
      case "2":
        setIsPlaying(true);
        setUnmeltIce(true);
        setUnfloodPlanet(true);
        break;
      case "3":
        setIsPlaying(true);
        setTurnPlanetGreen(true);
        break;
      case "4":
        setIsPlaying(true);
        setGrowTrees(true);
        break;
      case "5":
        setIsPlaying(true);
        setCleanAir(true);
        break;
      case "6":
        setIsPlaying(true);
        setCleanWater(true);
        break;
      case "7":
        setIsPlaying(true);
        setReplaceBuildings(true);
        break;
      case "8":
        setIsPlaying(true);
        setCleanWaste(true);
        break;
      case "9":
        setIsPlaying(true);
        setTransitionEnergy(true);
        break;
      case "10":
        setIsPlaying(true);
        setAddAnimals(true);
        break;
      default:
        setIsPlaying(true);
        break;
    }
  };

  const paddedId = String(text.id).padStart(2, "0");
  const dilemmaImg = new URL(
    `../../../assets/img/${paddedId}.jpg`,
    import.meta.url,
  ).href;

  return (
    <div className="info-container">
      {/* ── Carte dilemme (droite) ── */}
      <div className="dilemma-wrapper">
        <img
          src={rectangleDesignImg}
          alt=""
          className="dilemma-frame"
          draggable={false}
        />
        <div className="dilemma-overlay">
          <div className="dilemma-number">
            {paddedId.split("").map((digit, i) => (
              <span key={i} className="dilemma-digit">
                {digit}
              </span>
            ))}
          </div>
          {/* <img
            src={dilemmaImg}
            alt={`Dilemme ${paddedId}`}
            className="dilemma-visual"
            draggable={false}
          /> */}
          <p className="dilemma-desc">{text.situation}</p>
        </div>
      </div>

      {/* ── Carte dilemme (haut droite) ── */}
      <div className="dilemma-card">
        <div className="dilemma-number">
          {paddedId.split("").map((digit, i) => (
            <span key={i} className="dilemma-digit">{digit}</span>
          ))}
        </div>
        <img
          src={dilemmaImg}
          alt={`Dilemme ${paddedId}`}
          className="dilemma-visual"
          draggable={false}
        />
        <p className="dilemma-desc">{text.situation}</p>
      </div>

      {/* ── Panneau réponses (bas) ── */}
      <div className="reponses-card">
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
  );
}
