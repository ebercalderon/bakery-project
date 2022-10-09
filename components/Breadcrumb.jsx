import Link from 'next/link';
import {useRouter} from 'next/router';

const Breadcrumb = ({bgImage, title}) => {
    const router = useRouter();
    const path = router.asPath.slice(1).split('/');
    return (
        <>
            <section
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
                className='relative table w-full py-32 lg:py-40  bg-no-repeat bg-center'
            >
                <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black'/>
                <div className='container'>
                    <div className='grid grid-cols-1 pb-8 text-center mt-10'>
                        <h3 className='mb-3 text-3xl leading-normal font-medium text-white'>
                            {title}
                        </h3>
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className='absolute text-center z-10 bottom-5 right-0 left-0 mx-3'>
                    <ul className='breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block'>
                        <li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
                            <Link href={'/'}>
                                <a>Techwind</a>
                            </Link>
                        </li>
                        <li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
                            <Link href={`/${path[0]}`}>
                                <a>{path[0]}</a>
                            </Link>
                        </li>
                        {path.length > 1 ? (
                            <li
                                className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white'
                                aria-current='page'
                            >
                                Detail
                            </li>
                        ) : null}
                    </ul>
                </div>
            </section>
            <div className='relative'>
                <div
                    className='shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900'>
                    <svg
                        className='w-full h-auto'
                        viewBox='0 0 2880 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'
                            fill='currentColor'
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
