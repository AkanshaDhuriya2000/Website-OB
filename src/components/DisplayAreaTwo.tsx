const DisplayAreaTwo = () => {
  return (
    <div className="flex flex-row w-screen">
      <div className="flex flex-col w-1/4 px-20 py-6 gap-6">
        <div className="font-bold text-4xl">
          Simplifying IT For Complex World
        </div>
      </div>
      <div className="flex flex-col w-2/4 px-20 py-6 items-center">
        <div className="flex flex-col gap-4">
          <div className="text-base font-semibold">About us</div>
          <div className="text-base font-semibold">Why us</div>
          <div className="text-base font-semibold">Team</div>
          <div className="text-base font-semibold">Careers</div>
          <div className="text-base font-semibold">
            Partners & Certifications
          </div>
          <div className="text-base font-semibold">Reviews & Awards</div>
        </div>
      </div>
      <div className="relative flex flex-col w-1/4 px-20 gap-2 py-6 bg-slate-100">
        <div className="text-xl font-bold mb-4">Platform Partnerships</div>

        <div className="flex flex-row items-center">
          <img
            src="/assets/brands/aws.svg"
            alt="AWS logo"
            className="w-8 h-8 mr-4"
          />
          <div className="text-base font-semibold">Amazon Web Service</div>
        </div>

        <div className="flex flex-row items-center">
          <img
            src="/assets/brands/google-cloud.svg"
            alt="Google cloud logo"
            className="w-8 h-8 mr-4"
          />
          <div className="text-base font-semibold">Google Cloud</div>
        </div>

        <div className="flex flex-row items-center">
          <img
            src="/assets/brands/microsoft.svg"
            alt="Microsoft logo"
            className="w-8 h-8 mr-4"
          />
          <div className="text-base font-semibold">Microsoft</div>
        </div>

        <div className="flex flex-row items-center">
          <img
            src="/assets/brands/salesforce.svg"
            alt="Salesforce logo"
            className="w-8 h-8 mr-4"
          />
          <div className="text-base font-semibold">Salesforce</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAreaTwo;
