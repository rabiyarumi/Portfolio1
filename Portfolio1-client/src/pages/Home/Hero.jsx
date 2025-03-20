import profilePic from "../../assets/pic-4_crooped.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
const Hero = () => {
  return (
    <motion.div className="bg-[#081C15]/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center py-20 w-[85%] mx-auto">
      <img src={profilePic} className="h-[300px] w-[300px] rounded-4xl" alt="" />
      <div>
      <p className="text-start">Hi I'm</p>
      <h2 className="text-8xl ">Rabiya </h2>
      <h2 className="text-9xl ">Rumi</h2>
      </div>
      
      <h3 className="mt-2 text-2xl text-start">
          I'm a
          <Typewriter
            words={[
              " Web Developer",
              " MERN Stack Developer",
              " JavaScript and React Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </h3>
      <motion.div className="flex gap-3 mt-4">
    
      <motion.button
                whileHover={{ scale: 1.05 }}
                className=""
              >
                <a
                  href="https://drive.google.com/file/d/1ifZWXeRB203Q4fkNdU1TrOEOmQWlXNei/view?usp=sharing"
                  target="_blank"
                  className=" w-fit flex items-center gap-2 px-6 py-3  bg-white/70 border-[#081C15] text-black rounded-xl font-medium text-lg hover:bg-white/90 transition-colors"
                >
                  <MdOutlineFileDownload size={20} className="" />
                <span>Resume</span>
                </a>
              </motion.button>
                     
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <LuEye size={20} />
              <span> View Work</span>
              </motion.button>
      </motion.div>
  
    </motion.div>

   
  );
};

export default Hero;



 // <div className="relative overflow-clip  text-white bg-[linear-gradient(to_bottom,#020d18,#04172a_35%,#0b4071_67%,#0b4071_85%)]">
    //   <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#020d18_85%,#0b4071)] top-[450px] border-[1px] border-[#85c2fe]/30" />
    //   <div className="container relative mx-auto px-4 pt-12 pb-14">
    //     <div className="flex flex-col items-center justify-center text-center z-10">
    //       {/* img div */}
    //        <motion.div
    //         initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.8 }}
    //         className="relative mb-4 mt-24 "
    //       >
    //         <div className="absolute inset-0 bg-gradient-to-b from-[#0b4071]-500/20 to-transparent rounded-full blur-3xl"></div>
    //         <img
    //           src={profilePic}
    //           alt="Rabiya Rumi"
    //           className="w-[250px] h-[250px] rounded-full  relative z-10"
    //         />
    //       </motion.div>
    //       {/* description div */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="max-w-2xl"
    //       >
    //         <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
    //           Hi, I am <br />{" "}
    //           <span className="text-5xl md:text-6xl">Rabiya Rumi</span>
    //         </h1>
    //         <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
    //           I am frontend focused MERN Stack Developer. I love to build
    //           interactive user friendly application
    //         </p>

    //         <div className="flex gap-4 justify-center">
    //           <motion.button
    //             whileHover={{ scale: 1.05 }}
    //             className="px-6 py-3 bg-[#0060ba] rounded-full font-medium hover:bg-[#0b4071] transition-colors"
    //           >
    //             <a
    //               href="https://drive.google.com/file/d/1ifZWXeRB203Q4fkNdU1TrOEOmQWlXNei/view?usp=sharing"
    //               target="_blank"
    //               className="btn btn-primary w-fit"
    //             >
    //             View Resume
    //             </a>
    //           </motion.button>
    //           <motion.button
    //             whileHover={{ scale: 1.05 }}
    //             className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
    //           >
    //            View Work
    //           </motion.button>
    //         </div>
    //       </motion.div>
    //     </div>

    //     {/* <motion.div animate={{y:[0, 15,0]}} transition={{duration:3, repeat: Infinity, ease: "easeInOut"}} className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl" >
    //     </motion.div> */}

    //   </div>
    // </div>