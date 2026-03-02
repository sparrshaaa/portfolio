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

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-20 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h4 className="text-lg sm:text-xl mb-6">Hey there, my name is 👋</h4>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-tight">
            Sparshaa
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-[#4a4e69]">
            I design and develop clean, efficient, and user-focused
            applications. Passionate about solving real-world problems using
            modern technologies.
          </p>

          <h4 className="text-lg sm:text-xl font-medium">
            Full Stack Developer | Java & React
          </h4>
        </div>

        <div className="flex justify-end">
          <img
            src="/homee.png"
            alt="Home Illustration"
            className="w-[400px] sm:w-[420px] md:w-[520px] lg:w-[620px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
