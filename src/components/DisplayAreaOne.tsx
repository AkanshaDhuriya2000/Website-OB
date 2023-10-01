import ChallengesCard from "./ChallengesCard";

const DisplayAreaOne = () => {
  return (
    <div className="flex flex-row w-screen">
      <div className="flex flex-col w-1/4 p-20 gap-2">
        <div className="text-xl font-bold mb-4">Services</div>
        <div className="text-base font-semibold">Managed Services</div>
        <div className="text-base font-semibold">IT Consulting & Advisory</div>
        <div className="text-base font-semibold">Cyber Security</div>
        <div className="text-base font-semibold">Web Development</div>
        <div className="text-base font-semibold">Mobile Development</div>
        <div className="text-base font-semibold">Cloud Services</div>
      </div>
      <div className="flex flex-col w-2/4 p-20 gap-2">
        <div className="text-xl font-bold mb-4">Business Challenges</div>
        <div className="flex flex-row w-full">
          <ChallengesCard
            logo={"faGears"}
            challengeName={"Digital Transformation"}
          />
          <ChallengesCard logo={"faGears"} challengeName={"Security"} />
        </div>
        <div className="flex flex-row w-full">
          <ChallengesCard logo={"faGears"} challengeName={""} />
          <ChallengesCard logo={"faGears"} challengeName={""} />
        </div>
      </div>
      <div className="flex flex-col w-1/4">sec 3</div>
    </div>
  );
};

export default DisplayAreaOne;
