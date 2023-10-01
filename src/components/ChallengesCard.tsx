import { faGears, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChallengesCard = (props: { logo: string; challengeName: string }) => {
  return (
    <div className="flex flex-col items-start justify-center w-2/5 border-2 border-gray-300 rounded-lg h-28 mr-2 mb-2 p-4">
      <div>
        <FontAwesomeIcon icon={faShieldHalved} size="2x" />
      </div>
      <div>{props.challengeName || "placeholder"}</div>
    </div>
  );
};

export default ChallengesCard;
