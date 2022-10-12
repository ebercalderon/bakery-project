import TestimonialCard from 'components/TestimonialCard';
import testimonialsData from 'data/testimonials.data';
import {useEffect, useState} from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
    const [screenWidth, setScreenWidth] = useState(1200);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screenWidth <= 600 ? 1 : screenWidth <= 900 ? 2 : 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        if (window) {
            if (screenWidth !== window.innerWidth) {
                setScreenWidth(window.innerWidth);
            }
        }
    });
    return (
        <section className='relative md:py-24 py-16 bg-indigo-600/5'>
            <div className='container'>
                <div className='grid grid-cols-1 pb-8 text-center'>
                    <h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>
                        ¿Qué dicen nuestros clientes?
                    </h3>
                    <p className='text-slate-400 max-w-xl mx-auto'>
                        Nuestros clientes nos recomiendan y valoran nuestros productos y servicios
                    </p>
                </div>
                {/*end grid*/}
                <div className='grid grid-cols-1 mt-8'>
                    <Slider {...settings}>
                        {testimonialsData.map((item, index) => (
                            <TestimonialCard key={index} item={item}/>
                        ))}
                    </Slider>
                </div>
                {/*end grid*/}
            </div>
            {/*end container*/}
        </section>
    );
};

export default Testimonials;
