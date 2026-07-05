import ConnectingDots from "../components/ConnectingCots";
import Navbar from "../components/Navbar";

export default function Home() {
  const fontStyle = {
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 min-h-screen bg-[#E0DBD1] text-[#22223b]"
      style={fontStyle}
    >
      <Navbar />
      <ConnectingDots />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-15 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h4 className="text-lg sm:text-xl mb-1" style={{ color: "#4a4e69" }}>
            Hey there, my name is 👋
          </h4>

          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl  mb-10 leading-tight">
            Sparsha U K
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-[#4a4e69]">
            Computer Science graduate passionate about building responsive and
            user-focused web applications.
            <br /> I enjoy creating modern interfaces with React and developing
            efficient backend solutions using Java while continuously learning
            new technologies.
          </p>

          <h4 className="text-lg sm:text-xl font-medium text-[#4a4e69]  ">
            📍 Bengaluru, India <br />
            🎓 BE Computer Science | CGPA 8.65
          </h4>
        </div>

        <div className="flex justify-end">
          <img
            src="/homee.png"
            alt="Home Illustration"
            className="w-[350px] sm:w-[320px] md:w-[420px] lg:w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
