import {useForm} from 'react-hook-form';

const times = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
];

const Order = () => {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        console.log('data: ', data);
    };
    return (
        <section
            className='relative md:py-24 py-16  bg-no-repeat bg-fixed bg-top'
            id='table'
            style={{
                backgroundImage: 'url(assets/images/cta.jpg)',
            }}
        >
            <div className='absolute inset-0 bg-black/50'/>
            <div className='container'>
                <div className='flex justify-end'>
                    <div className='lg:w-1/2 md:w-2/3'>
                        <div
                            className='bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md lg:p-12 p-6 lg:ml-12'>
                            <div className='section-title mb-4'>
								<span
                                    className='bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5'>
									Pedidos
								</span>
                                <h4 className='text-4xl font-bold uppercase my-4'>
                                    Haz tu consulta
                                </h4>
                                <p className='text-slate-400 mx-auto para-desc'>
                                    Nuestra prioridad es ofrecer servicios flexibles para satisfacer sus necesidades.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(submit)}>
                                <div className='grid md:grid-cols-2 gap-4 mt-6'>
                                    <div>
                                        <label className='font-semibold'>Nombres:</label>
                                        <input
                                            {...register('name', {required: true})}
                                            type='text'
                                            className='form-input mt-2'
                                            placeholder='Nombres'
                                        />
                                    </div>
                                    <div>
                                        <label className='font-semibold'>Correo:</label>
                                        <input
                                            {...register('email')}
                                            type='email'
                                            className='form-input mt-2'
                                            placeholder='Correo'
                                        />
                                    </div>
                                    <div>
                                        <label className='font-semibold'>Celular</label>
                                        <input
                                            type='phone'
                                            {...register('phone')}
                                            id='phone-number'
                                            className='form-input mt-2'
                                            placeholder='N° celular'
                                        />
                                    </div>
                                    <div>
                                        <label className='font-semibold'>Cantidad</label>
                                        <input
                                            type='number'
                                            {...register('qty', {
                                                required: true,
                                                min: 0,
                                                max: 8,
                                            })}
                                            min={0}
                                            max={8}
                                            className='form-input mt-2'
                                            placeholder='N° Productos'
                                        />
                                    </div>
                                    <div>
                                        <label className='font-semibold'>Fecha</label>
                                        <input
                                            {...register('date', {
                                                required: true,
                                            })}
                                            type='date'
                                            className='form-input mt-2 start'
                                            placeholder='(ex: mm/ dd/ yy)'
                                        />
                                    </div>
                                    <div>
                                        <label className='font-semibold'>Hora</label>
                                        <select {...register('time')} className='form-input mt-2'>
                                            {times.map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div>
                                        <label htmlFor='comments' className='font-semibold'>
                                            Detalles:
                                        </label>
                                        <div className='form-icon relative mt-2'>
                                            <i
                                                data-feather='message-circle'
                                                className='w-4 h-4 absolute top-3 left-4'
                                            />
                                            <textarea
                                                name='message'
                                                id='comments'
                                                className='form-input pl-11 h-28'
                                                placeholder='Detallanos lo que podemos ofrecerte'
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*end grid*/}
                                <div className='grid grid-cols-1 mt-4'>
                                    <input
                                        type='submit'
                                        className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full'
                                        defaultValue='Enviar'
                                    />
                                </div>
                                {/*end grid*/}
                            </form>
                            {/*end form*/}
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end grid*/}
            </div>
            {/*end container*/}
        </section>
    );
};

export default Order;
