const Footer = () => {
    return (
        <footer className='footer bg-dark-footer relative text-gray-200 dark:text-gray-200'>
            <div className='container'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <div className='py-[60px] px-0'>
                            <div className='grid lg:grid-cols-3 md:grid-cols-6 justify-center gap-[30px]'>
                                <div className='text-center'>
                                    <h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
                                        Horario de Atención
                                    </h5>
                                    <p className='mb-2'>Lunes - Sábado: 6 AM - 10 PM</p>
                                    <p className='mb-0'>Domingos: 6:30 AM - 1 PM</p>
                                </div>
                                <div className='text-center'>
                                    <h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
                                        Reservas
                                    </h5>
                                    <p className='mb-2'>
                                        <a href='tel:+152534-468-854' className='text-gray-200'>
                                            +01 564-6456
                                        </a>
                                    </p>
                                    <p className='mb-0'>
                                        <a
                                            href='mailto:contact@example.com'
                                            className='text-gray-200'
                                        >
                                            contact@example.com
                                        </a>
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <h5 className='tracking-[1px] text-gray-100 font-semibold mb-4'>
                                        Dirección
                                    </h5>
                                    <p className='mb-2'>Panadería Grisela</p>
                                    <p className='mb-0'>
                                        Calle Sta Rosalía 482, Cercado de Lima 15088
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-12'>
                                <div className='text-center'>
                                    <img
                                        src='assets/images/logo-icon-80.png'
                                        className='block mx-auto'
                                        alt=''
                                    />
                                    <p className='max-w-xl mx-auto mt-6'>
                                        Nuestra prioridad es ofrecer servicios flexibles
                                        para adaptarnos a sus necesidades
                                    </p>
                                </div>
                                <ul className='list-none text-center mt-6'>
                                    <li className='inline'>
                                        <a
                                            href='http://linkedin.com/company/shreethemes'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i className='uil uil-linkedin' title='Linkedin'/>
                                        </a>
                                    </li>
                                    <li className='inline'>
                                        <a
                                            href='https://www.facebook.com/shreethemes'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i
                                                className='uil uil-facebook-f align-middle'
                                                title='facebook'
                                            />
                                        </a>
                                    </li>
                                    <li className='inline'>
                                        <a
                                            href='https://www.instagram.com/shreethemes/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i
                                                className='uil uil-instagram align-middle'
                                                title='instagram'
                                            />
                                        </a>
                                    </li>
                                    <li className='inline'>
                                        <a
                                            href='https://twitter.com/shreethemes'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i
                                                className='uil uil-twitter align-middle'
                                                title='twitter'
                                            />
                                        </a>
                                    </li>
                                    <li className='inline'>
                                        <a
                                            href='mailto:support@shreethemes.in'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i
                                                className='uil uil-envelope align-middle'
                                                title='email'
                                            />
                                        </a>
                                    </li>
                                    <li className='inline'>
                                        <a
                                            href='https://forms.gle/QkTueCikDGqJnbky9'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'
                                        >
                                            <i
                                                className='uil uil-file align-middle'
                                                title='customization'
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[30px] px-0 border-t border-slate-800'>
                <div className='container text-center'>
                    <div className='grid md:grid-cols-1'>
                        <p className='mb-0'>
                            © Powered by{' '}
                            <span target='_blank' className='text-reset'>
								Eber Calderon
							</span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
