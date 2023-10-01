/* eslint-disable @typescript-eslint/no-explicit-any */
import gears from "/assets/challenges/gears.png";
import shield from "/assets/challenges/shield.png";
import speedometer from "/assets/challenges/speedometer.png";
import transformation from "/assets/challenges/transformation.png";

const ChallengesCard = (props: { iconName: string; challengeName: string }) => {
  const { iconName, challengeName } = props;

  const iconImages : any = {
    gears,
    shield,
    speedometer,
    transformation,
  };

  const iconImage = iconImages[iconName] || gears;

  return (
    <div className="flex flex-col items-start justify-center w-2/5 border-2 border-gray-300 rounded-lg h-40 mr-2 mb-2 p-6">
      <div className="mb-2">
        <img src={iconImage} alt={challengeName || "placeholder"} className="h-14 w-14"/>
      </div>
      <div className="font-semibold">{challengeName || "placeholder"}</div>
    </div>
  );
};

export default ChallengesCard;
