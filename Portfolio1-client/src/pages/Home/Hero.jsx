import { motion } from "motion/react";
import profilePic from "../../assets/pic-2.jpg";
const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
      <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30" />
      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          {/* img div */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-4 mt-24 "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilePic}
              alt="Rabiya Rumi"
              className="w-[250px] h-[250px] rounded-full  relative z-10"
            />
          </motion.div>
          {/* description div */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Hi, I am <br />{" "}
              <span className="text-5xl md:text-6xl">Rabiya Rumi</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am frontend focused MERN Stack Developer. I love to build
              interactive user friendly application
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1ifZWXeRB203Q4fkNdU1TrOEOmQWlXNei/view?usp=sharing"
                  target="_blank"
                  className="btn btn-primary w-fit"
                >
                View Resume
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
               View Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* <motion.div animate={{y:[0, 15,0]}} transition={{duration:3, repeat: Infinity, ease: "easeInOut"}} className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl" >
        </motion.div> */}

      </div>
    </div>
  );
};

export default Hero;
