import multicolorBackImg from "../../assets/multicolorBack.png";
import "./InstructionsScreen.css";

interface InstructionsScreenProps {
  onStart: () => void;
}

export default function InstructionsScreen({ onStart }: InstructionsScreenProps) {
  return (
    <div className="instructions-screen">
      <img
        src={multicolorBackImg}
        aria-hidden="true"
        className="instructions-screen__bg-rotate"
        draggable={false}
      />
      <div className="instructions-frame">
        <h2 className="instructions-frame__title">COMMENT JOUER&nbsp;?</h2>

        <div className="instructions-frame__text">
          <h3>Contexte</h3>
          <p>
            La Terre est en danger. Les ressources s'épuisent, le climat se dérègle, la biodiversité
            s'effondre. Mais il est encore temps d'agir ! Dans Terra, chaque décision compte.
          </p>

          <h3>Matériel</h3>
          <p>Un écran, une planète 3D et 20 dilemmes écologiques.</p>

          <h3>Mise en place</h3>
          <p>
            Lancez le jeu. La planète apparaît à l'écran, abîmée. Votre mission : la restaurer en
            faisant les bons choix.
          </p>

          <h3>Déroulement</h3>
          <ol>
            <li>Saisissez le numéro d'un dilemme (1 à 20).</li>
            <li>Lisez la situation décrite sur la carte.</li>
            <li>Choisissez l'option A ou l'option B.</li>
            <li>Si votre réponse est écoresponsable, la planète se transforme positivement.</li>
            <li>Si votre réponse est incorrecte, rien ne change — mais vous pouvez réessayer.</li>
            <li>Suivez votre progression grâce à la barre en haut de l'écran.</li>
            <li>Résolvez tous les dilemmes pour sauver la planète !</li>
          </ol>

          <p className="instructions-frame__note">
            Chaque bonne réponse déclenche une animation sur la planète. Observez bien les
            transformations : elles reflètent l'impact réel de vos choix sur l'environnement.
          </p>
        </div>

        <button
          className="btn-multicolor instructions-frame__btn"
          onClick={onStart}
        >
          C'est parti !
        </button>
      </div>
    </div>
  );
}
