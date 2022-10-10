import instagramData from 'data/instagram.data';
import {useEffect, useState} from 'react';
import Slider from 'react-slick';

const Instagram = () => {
    const [screenWidth, setScreenWidth] = useState(1200);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screenWidth <= 600 ? 3 : screenWidth <= 900 ? 9 : 10,
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
        <div className='container-fluid relative px-8 bg-indigo-600/5'>
            <div className='grid grid-cols-1 relative '>
                <Slider {...settings} className='bg-dark-footer'>
                    {instagramData.map((item, index) => (
                        <div key={index} className='card border-0 rounded-0 '>
                            <div className='card-body p-0'>
                                <a href={item} className='lightbox d-inline-block' title=''>
                                    <img src={item} className='' alt='Insta Post'/>
                                    <div className='overlay bg-dark'/>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div
                    className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-center hidden md:block'>
                    <a
                        href='https://www.instagram.com/shreethemes/'
                        target='_blank'
                        className='btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'
                    >
                        Follow Now
                    </a>
                </div>
            </div>
            {/*end grid*/}
        </div>
    );
};

export default Instagram;
