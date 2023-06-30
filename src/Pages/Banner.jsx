import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div name="home" className="w-full lg:h-screen bg-[#0a192f]">
      <div className="text-white lg:h-full flex  justify-center  items-center px-4 pt-16 lg:pt-0 ">
        {/* heading section */}
        <section>
          <p className="text-xl">Hi, I'm</p>
          <h1 className="text-7xl">AH Fahim</h1>

          <h2 className=" text-2xl lg:text-4xl">I am a full stack developer</h2>
          <p className="max-w-[600px] py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            repellendus obcaecati! Nemo sapiente dolorem eum dignissimos ipsam
            ex sit, fugit nostrum corrupti reprehenderit. Eveniet eos quaerat
            voluptatum illum impedit nam.
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn btn-outline text-white">
              View Work <FaArrowRight />
            </button>
            <button className="btn btn-outline text-white">
              Download Resume
            </button>
          </div>
        </section>
        {/* image section */}
      </div>
    </div>
  );
};

export default Banner;
