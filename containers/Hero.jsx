import Link from 'next/link';

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: 'url(assets/images/bgd01.jpg)',
            }}
            className='flex md:h-screen py-36 items-center bg-no-repeat bg-fixed bg-top'
        >
            <div className='absolute inset-0 bg-black opacity-30'/>
            <div className='container'>
                <div className='grid grid-cols-1 justify-center text-center'>
                    <div className=''>
                        <h1 className='font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5'>
                            Panadería Grisela <br/> Panes de alta calidad
                        </h1>
                        <p className='text-white/70 text-lg max-w-xl mx-auto'>
                            Todos nuestros productos son saludables, elaborados con pasión  talento e innovamos según las necesidades de nuestros clientes.
                        </p>
                        <div className='mt-8'>
                            <Link href='/products'>
                                <a className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'>
                                    <i className='uil uil-restaurant'/> Productos
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*end container*/}
        </section>
    );
};

export default Hero;
