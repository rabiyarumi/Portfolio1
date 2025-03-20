import Marquee from "react-fast-marquee";

const Skills = () => {

    const skills = [
        { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
        { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript.svg' },
        { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
        { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { name: 'Express.js', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
        { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      ]; 
    return (
        <section className="pb-8 px-6 sm:px-12 lg:px-2  w-[90%]  mx-auto">
            <div className="bg-gradient-to-b from-white via-white to-[#081C15]/50 bg-clip-text w-fit mx-auto">
        <h2 className="text-5xl font-bold  mb-2 text-center  text-transparent">
          About Me
        </h2>

      </div>

      <Marquee pauseOnClick={true} speed={40}>
        
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 w-32 shadow-md rounded-lg  ml-10 "
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className=" h-16 mb-4"
            />
            <h3 className="text-lg font-medium ">{skill.name}</h3>
          </div>
        ))}
       
      </Marquee>
        </section>
    );
};

export default Skills;