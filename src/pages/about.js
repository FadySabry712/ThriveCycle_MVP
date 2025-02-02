const About = () => {
  return (
    <div className="aboutbg flex flex-col items-center">
      <div className="div mt-[120px]"></div>
      <div className="container w-[100%] justify-between">
        <div className="xl:flex gap-[100px] my-[70px]">
          <div className="flex flex-col justify-center text-center ">
            <h1 className="font-bold text-[40px] text-white mb-[40px]">
              Our Vision
            </h1>
            <p className="text-white text-[18px] mb-[50px] xl:mb-0">
              To be the leading RCM billing partner for healthcare providers
              nationwide, recognized for our innovative technology, exceptional
              service, and unwavering commitment to compliance.
            </p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="font-bold text-[40px] text-white mb-[40px]">
              Our Mission
            </h1>
            <p className="text-white text-[18px] ">
              To empower healthcare providers with efficient and accurate
              medical billing solutions, maximizing their revenue recovery while
              ensuring seamless patient experiences.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-[40px] flex flex-col items-center justify-center w-[100%] text-center  text-white mb-[40px]">
            Our Goals
          </h1>
          <p className="text-white text-[18px] text-center pb-[100px] ">
            Launching a virtual Revenue Cycle Management <br /> (RCM) company{" "}
            dedicated to overseeing the financial intricacies <br />
            of healthcare facilities, clinics, and individual practitioners
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
