import Navbar from "../components/Navbar";

export default function Home() {
  const fontStyle = {
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#F4F4F4] text-[#22223b]"
      style={fontStyle}
    >
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-30 py-15">
        <h4 className="text-lg sm:text-xl mb-6">Hey there, my name is 👋</h4>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-tight">
          Sparshaa
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-[#4a4e69]">
          I design and develop clean, efficient, and user-focused applications.
          Passionate about solving real-world problems using modern
          technologies.
        </p>

        <h4 className="text-lg sm:text-xl font-medium">
          Full Stack Developer | Java & React
        </h4>
      </div>
    </section>
  );
}
