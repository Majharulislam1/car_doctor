
import first from '../assets/about_us/person.jpg';
import parts from '../assets/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 items-center">
                <div className='py-20'>
                    <div className="relative w-full max-w-lg mx-auto">
                      
                        <div className="relative">
                            <img
                                src={first}
                                alt="Mechanic"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        
                        <div className="absolute border-2 border-white rounded-xl bottom-0 right-0 w-[40%] sm:w-[50%] md:w-[45%] -mb-8 -mr-8">
                            <img
                                src={parts}
                                alt="Car Tools"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>


                <div>
                     <h4 className='text-xl font-bold text-primary'>About  Us</h4>
                     <h1 className='text-5xl font-bold py-4 w-1/2'>We are qualified & of experience in this field</h1>
                     <p className='w-1/2 text-[#737373] mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
                     <p className='w-1/2 text-[#737373] mb-4'>the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
                     <button className='bg-primary px-4 py-2 rounded-lg text-white'>Get More Info</button>
                </div>

            </div>
        </div>
    );
};

export default About;