import {useEffect, useState} from 'react';
import ReactStars from 'react-stars';

const TestimonialCard = ({item}) => {
    const [firstTime, setFirstTime] = useState(true);

    useEffect(() => {
        if (firstTime) {
            setFirstTime(false);
        }
    }, []);

    if (firstTime) return null;
    return (
        <div className='tiny-slide text-center'>
            <div className='customer-testi'>
                <div
                    className='content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900'>
                    <i className='mdi mdi-format-quote-open mdi-48px text-indigo-600'/>
                    <p className='text-slate-400'>{item.text}</p>
                    <div className='list-none mb-0 text-amber-400 mt-3 flex justify-center'>
                        <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                            size={24}
                            color2={'#ffd700'}
                        />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <img
                        src={item.avatar}
                        className='h-14 w-14 rounded-full shadow-md mx-auto'
                        alt=''
                    />
                    <h6 className='mt-2 font-semibold'>{item.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
