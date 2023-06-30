import SVG_About from "../../Components/SVG_Icons/SVG_About";

const About = () => {
  return (
    <div>
      <div
        name="about"
        className="w-full lg:h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="lg:h-full flex flex-col justify-center items-center pt-16 lg:pt-0">
          <h1 className="text-center  text-4xl  ">About Me</h1>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" max-w-3xl mx-auto "
          >
            <div className=" shadow-2xl rounded-lg p-4 lg:p-6">
              <div className="flex justify-center items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLFzqFmD7j0UGsx4gTKKnrU5fHkP58IGnSxm3-wV2&s"
                />
              </div>
              <p className=" mb-6 text-xl lg:text-2xl">
                Hello there! My name is , and I'm a passionate superhero toy
                lover. For as long as I can remember, these incredible figures
                have held a special place in my heart and sparked my
                imagination. Growing up, I was captivated by the extraordinary
                abilities and captivating stories of superheroes. From the pages
                of comic books to the big screen, these characters became my
                heroes, and collecting their toys became a way for me to bring
                their adventures to life in my own little world.
              </p>
              <div>
                <SVG_About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
