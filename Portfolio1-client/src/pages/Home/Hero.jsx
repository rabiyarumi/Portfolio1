import React from 'react';

const Hero = () => {
    return (
        <div className='relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]'>
            Herooo
            <div className='absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30'/>
        </div>
    );
};

export default Hero;