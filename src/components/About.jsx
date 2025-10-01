import AboutImage from "../assets/About-image-2.jpg"



const About = () => {
    return (
        <div className="py-12 sm:py-0 relative" id="about">
            <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl  font-semibold text-center "
                style={{ marginTop: '2.5rem', marginBottom: '1rem' }}
            >ABOUT <span className="text-primary animate-pulse group-hover:scale-105 duration-200">ME</span></h1>
            <div className="md:container min-h-[500px] flex items-center px-5"
                style={{ marginTop: '2rem' }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* image section */}
                    <div data-aos="fade-up" data-aos-once="false">
                        {/* <img src={BannerPng} alt="" className="w-full max-w-[400px]" /> */}
                        <img className="w-full  md:max-w-[500px] border " src={AboutImage} alt="" />
                    </div>
                    {/* text content section */}
                    <div className=" lg:pr-10 relative">
                        <div className="relative z-10 space-y-5">
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-3xl lg:text-4xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-300"
                                style={{ marginBottom: '1.5rem' }}
                            >
                                Discover More About Me
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="500">
                                A Computer Science graduate (B.Sc.) and a self-taught software developer passionate about building impactful digital solutions. I specialize in frontend development and have hands-on experience with modern technologies such as React, Next.js, Angular, and Tailwind CSS.

                                I’m also skilled in building mobile user interfaces and integrating APIs to enhance functionality and make development easier for my teams. I’m currently expanding my skills to become a full-stack developer, diving deeper into backend technologies and databases. In addition, I’m pursuing knowledge in cybersecurity to strengthen my understanding of secure and reliable software development.

                                I approach every project with creativity, dedication, and a mindset focused on growth — aiming to make each experience a meaningful step toward mastering my craft and creating wonderful memories through technology.
                            </p>


                        </div>
                        {/* backgrond color blob */}
                        <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
