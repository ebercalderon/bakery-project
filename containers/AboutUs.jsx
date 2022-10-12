import servicesData from 'data/services.data';

const AboutUs = () => {
    return (
        <section className='relative md:py-24 py-16'>
            <div className='container'>
                <div className='grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]'>
                    <div className='lg:col-span-5 md:col-span-6'>
                        <img
                            src='assets/images/food/about.gif'
                            className='rounded-md shadow dark:shadow-gray-800'
                            alt=''
                        />
                    </div>
                    <div className='lg:col-span-7 md:col-span-6'>
                        <div className='lg:ml-6'>
                            <h4 className='my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'>
                                Food is our common ground, <br/> a universal experience.
                            </h4>
                            <p className='text-slate-400 text-lg mb-0'>
                                The phrasal sequence of the Lorem Ipsum text is now so
                                widespread and commonplace that many DTP programmes can generate
                                dummy text using the starting sequence "Lorem ipsum".
                            </p>

                            <p className='text-slate-400'>
                                Fortunately, the phrase 'Lorem Ipsum' is now recognized by
                                electronic pre-press systems and, when found, an alarm can be
                                raised. This avoids a publication going to print with overlooked
                                dummy text.
                            </p>
                        </div>
                    </div>
                </div>
                {/*grid*/}
            </div>
            {/*end container*/}
            <div className='container md:mt-24 mt-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]'>
                    {servicesData.map((item, index) => (
                        <div
                            key={index}
                            className='md:px-6 transition duration-500 rounded-2xl text-center'
                        >
                            <div
                                className='w-20 h-20 bg-indigo-600/5 mx-auto text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800'>
                                <i className={item.icon}/>
                            </div>
                            <div className='content mt-7'>
                                <a
                                    href='page-services.html'
                                    className='title h5 text-lg font-medium hover:text-indigo-600'
                                >
                                    {item.title}
                                </a>
                                <p className='text-slate-400 mt-3'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
