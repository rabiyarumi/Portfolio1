
import { motion } from "motion/react"
import profilePic from "../../assets/pic-2.jpg"
const Hero = () => {
    return (
        <div className='relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]'>
            Herooo
            <div className='absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30'/>

            <div className='container relative mx-auto px-4 pt-12 pb-24'>
           <motion.div 
           initial={{opacity: 0, scale: 0.5}}
           animate={{opacity: 1, scale: 1}}
           transition={{duration: 0.8}}
           className='relative mb-8 mt-24'
           >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img src={profilePic} alt="Rabiya Rumi" className="w-[250px] relative z-10" />
           </motion.div>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y: 0}}
            transition={{duration:0.8}} className="max-w-2xl" ></motion.div>

            </div>


        </div>
    );
};

export default Hero;