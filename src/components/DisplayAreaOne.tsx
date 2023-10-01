import ChallengesCard from "./ChallengesCard";

const DisplayAreaOne = () => {
  return (
    <div className="flex flex-row w-screen">
      <div className="flex flex-col w-1/4 p-20 gap-6">
        <div className="text-xl font-bold mb-4">Services</div>
        <div className="text-base font-semibold">Managed Services</div>
        <div className="text-base font-semibold">IT Consulting & Advisory</div>
        <div className="text-base font-semibold">Cyber Security</div>
        <div className="text-base font-semibold">Web Development</div>
        <div className="text-base font-semibold">Mobile Development</div>
        <div className="text-base font-semibold">Cloud Services</div>
      </div>
      <div className="flex flex-col w-2/4 p-20 gap-2" id="challenges">
        <div className="text-xl font-bold mb-4">Business Challenges</div>
        <div className="flex flex-row w-full">
          <ChallengesCard
            iconName={"transformation"}
            challengeName={"Digital Transformation"}
          />
          <ChallengesCard iconName={"shield"} challengeName={"Security"} />
        </div>
        <div className="flex flex-row w-full">
          <ChallengesCard iconName={"gears"} challengeName={"Automation"} />
          <ChallengesCard
            iconName={"speedometer"}
            challengeName={"Gaining Efficiency"}
          />
        </div>
      </div>
      <div className="relative flex flex-col w-1/4 p-20 gap-8 bg-slate-100" id="focus">
        <div className="absolute -left-20 top-0 rounded-full w-36 h-36 bg-white flex items-center justify-center z-10">
          <img
            src="/assets/challenges/target.png"
            alt="target"
            className="w-24 h-24"
          />
        </div>
        <div className="text-xl font-bold mb-4">Industry Focus</div>
        <div className="text-base font-semibold">Industry Manufacturing</div>
        <div className="text-base font-semibold">Transportation Logistics</div>
        <div className="text-base font-semibold">Healthcare</div>
        <div className="text-base font-semibold">Banks & insurance</div>
        <div className="text-base font-semibold">Consulting Providers</div>
        <div className="text-base font-semibold">Non Profit</div>
        <div className="text-base font-semibold">
          <a
            href="#"
            className="text-blue-400 hover:underline underline-offset-2"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayAreaOne;
