import Breadcrumb from 'components/Breadcrumb';
import ContactForm from 'containers/ContactForm';

const ContactsPage = () => {
    return (
        <>
            <div>
                <Breadcrumb bgImage={'assets/images/market.jpg'} title='CONTÁCTANOS'/>
                <section className='relative md:py-24 py-16'>
                    <div className='container'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
                            <div className='text-center px-6 mt-6'>
                                <div
                                    className='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto'>
                                    <i className='uil uil-phone'/>
                                </div>
                                <div className='content mt-7'>
                                    <h5 className='title h5 text-xl font-medium'>Celular</h5>
                                    <p className='text-slate-400 mt-3'>
                                        Llamamos o envíanos un WhatsApp para tus consultas
                                    </p>
                                    <div className='mt-5'>
                                        <a
                                            href='tel:+51991150180'
                                            className='btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'
                                        >
                                            +51 991 150 180
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center px-6 mt-6'>
                                <div
                                    className='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto'>
                                    <i className='uil uil-envelope'/>
                                </div>
                                <div className='content mt-7'>
                                    <h5 className='title h5 text-xl font-medium'>Email</h5>
                                    <p className='text-slate-400 mt-3'>
                                        Solicitanos información más detallada por correo
                                    </p>
                                    <div className='mt-5'>
                                        <a
                                            href='mailto:contact@example.com'
                                            className='btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'
                                        >
                                            panaderiagrisela@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center px-6 mt-6'>
                                <div
                                    className='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto'>
                                    <i className='uil uil-map-marker'/>
                                </div>
                                <div className='content mt-7'>
                                    <h5 className='title h5 text-xl font-medium'>Location</h5>
                                    <p className='text-slate-400 mt-3'>
                                        Calle Sta Rosalía 482 <br/>
                                        Lima 15088, Perú
                                    </p>
                                    <div className='mt-5'>
                                        <a
                                            href='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7803.3662749566865!2d-77.07432144034652!3d-12.065308954678951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd850e8222620594e!2sPanaderia%2C%20Pasteria%20Y%20Bodega%20Grisela!5e0!3m2!1sen!2sus!4v1665613208295!5m2!1sen!2sus'
                                            data-type='iframe'
                                            className='video-play-icon read-more lightbox btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'
                                        >
                                            Ver en Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end grid*/}
                    </div>
                    {/*end container*/}
                    <div className='container md:mt-24 mt-16'>
                        <div className='grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]'>
                            <div className='lg:col-span-7 md:col-span-6'>
                                <img src='assets/images/contact.svg' alt=''/>
                            </div>
                            <ContactForm/>
                        </div>
                    </div>
                    {/*end container*/}
                </section>
                <div className='container-fluid relative'>
                    <div className='grid grid-cols-1'>
                        <div className='w-full leading-[0] border-0'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7803.3662749566865!2d-77.07432144034652!3d-12.065308954678951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd850e8222620594e!2sPanaderia%2C%20Pasteria%20Y%20Bodega%20Grisela!5e0!3m2!1sen!2sus!4v1665613208295!5m2!1sen!2sus'
                                style={{border: 0}}
                                className='w-full h-[500px]'
                                allowFullScreen
                            />
                        </div>
                    </div>
                    {/*end grid*/}
                </div>
            </div>
        </>
    );
};

export default ContactsPage;
