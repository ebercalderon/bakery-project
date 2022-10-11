import Breadcrumb from 'components/Breadcrumb';
import featuresData from 'data/features.data';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <>
            <Breadcrumb bgImage={'assets/images/menu.jpg'} title='SOBRE NOSOTROS'/>

            <section className='relative md:py-24 py-16'>
                <div className='container'>
                    <div className='grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]'>
                        <div className='lg:col-span-5 md:col-span-6'>
                            <div className='grid grid-cols-12 gap-6 items-center'>
                                <div className='col-span-6'>
                                    <div className='grid grid-cols-1 gap-6'>
                                        <img
                                            src='assets/images/about/ab03.jpg'
                                            className='shadow rounded-md'
                                            alt=''
                                        />
                                        <img
                                            src='assets/images/about/ab02.jpg'
                                            className='shadow rounded-md'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='col-span-6'>
                                    <div className='grid grid-cols-1 gap-6'>
                                        <img
                                            src='assets/images/about/ab01.jpg'
                                            className='shadow rounded-md'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-7 md:col-span-6'>
                            <div className='lg:ml-5'>
                                <div className='flex mb-4'>
									<span className='text-indigo-600 text-2xl font-bold mb-0'>
                                        +
										<span
                                            className='counter-value text-6xl font-bold'
                                            data-target={15}
                                        >
											20
										</span>

									</span>
                                    <span className='self-end font-medium ml-2'>
										Años de <br/> Experiencia
									</span>
                                </div>
                                <h3 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'>
                                    ¿Quiénes somos?
                                </h3>
                                <p className='text-slate-400 max-w-xl'>
                                    Somos una empresa dedicada a la elaboración, producción y distribución de gran variedad de pan,
                                    tenemos una importante cartera de clientes, gracias a nuestros 25 años de existencia dentro del distrito de
                                    Cercado de Lima.
                                </p>
                                <div className='mt-6'>
                                    <Link href='/contact'>
                                        <a className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2'>
                                            <i className='uil uil-envelope'/> Contáctanos
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800'>
                <div className='container'>
                    <div className='grid grid-cols-1 pb-8 text-center'>
                        <h3 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'>
                            Misión
                        </h3>
                        <p className='text-slate-400 max-w-xl mx-auto'>
                            Ofrecer a nuestros clientes productos alimenticios elaborados con óptima
                            calidad que satisfagan completamente sus necesidades, nos identificamos por
                            ser una empresa que trabaja con amor, carisma y alta eficacia operacional que
                            permita crear una relación duradera con nuestros clientes.
                        </p>
                    </div>
                    {/*end grid*/}
                    <div className='grid grid-cols-1 pb-8 text-center'>
                        <h3 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'>
                            Visión
                        </h3>
                        <p className='text-slate-400 max-w-xl mx-auto'>
                            Llegar a ser la empresa líder en la elaboración, venta por mostrador de
                            productos alimenticios de panadería mediante la constante innovación,
                            procesos y servicios que marquen la pauta creciendo rentablemente y
                            logrando mayor desarrollo y bienestar para sus inversionistas y trabajadores.
                        </p>
                    </div>
                    {/*end grid*/}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8'>
                        {featuresData.map((item, index) => (
                            <div
                                key={index}
                                className='flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'
                            >
                                <div
                                    className='flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3'>
                                    <i className={`${item.icon}  h-5 w-5 rotate-45`}/>
                                </div>
                                <div className='flex-1 '>
                                    <h4 className='mb-0 text-lg font-medium'>{item.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
