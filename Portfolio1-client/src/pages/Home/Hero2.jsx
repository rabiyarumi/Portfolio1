
const Hero2 = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[url('/your-background.jpg')] bg-cover"></div>

      <div className=" h-[300px]">
        <div className="p-6 max-w-sm bg-[#081C15]/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl font-semibold">Glassmorphism</h2>
          <p
            className="text-white/80 mt-2 p-2 bg-[#081C15] 
          62+6222border border-white/20 rounded-2xl shadow-lg"
          >
            A beautiful glass effect with Tailwind CSS.
          </p>
        </div>

        <div className="p-6 max-w-sm bg-white/10  backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl font-semibold">Glassmorphism</h2>
          <p className="text-white/80 mt-2">
            A beautiful glass effect with Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero2;
