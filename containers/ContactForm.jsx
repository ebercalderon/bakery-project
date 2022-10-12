import {useState} from 'react';

const ContactForm = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <div id='contact-form' className='lg:col-span-5 md:col-span-6 mt-8 md:mt-0'>
            <div className='lg:ml-5'>
                <div className='bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6'>
                    <h3 className='mb-6 text-2xl leading-normal font-medium'>
                        Ponte en contacto
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <p className='mb-0' id='error-msg'/>
                        <div id='simple-msg'/>
                        <div className='grid lg:grid-cols-12 lg:gap-6'>
                            <div className='lg:col-span-6 mb-5'>
                                <div className='text-left'>
                                    <label htmlFor='name' className='font-semibold'>
                                        Nombres:
                                    </label>
                                    <div className='form-icon relative mt-2'>
                                        <i
                                            data-feather='user'
                                            className='w-4 h-4 absolute top-3 left-4'
                                        />
                                        <input
                                            value={value.name}
                                            onChange={handleChange}
                                            name='name'
                                            id='name'
                                            type='text'
                                            className='form-input pl-11'
                                            placeholder='Nombres'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:col-span-6 mb-5'>
                                <div className='text-left'>
                                    <label htmlFor='email' className='font-semibold'>
                                        Correo:
                                    </label>
                                    <div className='form-icon relative mt-2'>
                                        <i
                                            data-feather='mail'
                                            className='w-4 h-4 absolute top-3 left-4'
                                        />
                                        <input
                                            value={value.email}
                                            onChange={handleChange}
                                            name='email'
                                            id='email'
                                            type='email'
                                            className='form-input pl-11'
                                            placeholder='Correo'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1'>
                            <div className='mb-5'>
                                <div className='text-left'>
                                    <label htmlFor='subject' className='font-semibold'>
                                        Consulta:
                                    </label>
                                    <div className='form-icon relative mt-2'>
                                        <i
                                            data-feather='book'
                                            className='w-4 h-4 absolute top-3 left-4'
                                        />
                                        <input
                                            value={value.subject}
                                            onChange={handleChange}
                                            name='subject'
                                            id='subject'
                                            className='form-input pl-11'
                                            placeholder='Asunto'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='text-left'>
                                    <label htmlFor='comments' className='font-semibold'>
                                        Comentarios:
                                    </label>
                                    <div className='form-icon relative mt-2'>
                                        <i
                                            data-feather='message-circle'
                                            className='w-4 h-4 absolute top-3 left-4'
                                        />
                                        <textarea
                                            value={value.message}
                                            onChange={handleChange}
                                            name='message'
                                            id='comments'
                                            className='form-input pl-11 h-28'
                                            placeholder='Mensaje'
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type='submit'
                            id='submit'
                            name='send'
                            className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
