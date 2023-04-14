import bg from '../assests/bgimg.jpg'
import hero from '../assests/hero.jpg'
import "./hero.css"
const Hero = () => {
    return (
        <div className='hero h-[100vh]'>
            <div className='h-[100vh] md:px-24 sm:px-8 px-6 bg-[rgba(0,0,0,0.7)] relative'>
                <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center h-full'>
                    <img className='xl:max-w-[450px] lg:max-w-[380px] md:max-w-[340px] max-w-[300px] rounded-full' src={hero} alt="" />
                    <div className='lg:max-w-[50%] max-w-[100%] lg:mt-0 mt-6 lg:text-start text-center'>
                        <h1 className='xl:text-7xl lg:text-5xl text-4xl font-extrabold text-[#D14095] leading-tight'>SAY NO TO SEXUAL HARASSMENT</h1>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore nihil, adipisci necessitatibus magnam, doloribus doloremque impedit temporibus exercitationem illum, dolore vitae! Voluptas, natus sint.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero