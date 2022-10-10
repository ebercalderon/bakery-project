import BackToTop from 'components/BackToTop';
import Footer from 'layouts/Footer';
import Navbar from 'layouts/Navbar';
import Switcher from 'components/Switcher';
import Head from 'next/head';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';

function MyApp({Component, pageProps}) {
    return (
        <div className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>
            <Head>
                <meta charSet='UTF-8'/>

                <title>
                    Techwind - Tailwind CSS Multipurpose Landing Page Template
                </title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, shrink-to-fit=no'
                />
                <meta
                    content='Tailwind CSS Saas & Software Landing Page Template'
                    name='description'
                />
                <meta name='author' content='Shreethemes'/>
                <meta name='website' content='https://shreethemes.in/'/>
                <meta name='email' content='support@shreethemes.in'/>
                <meta name='version' content='1.4.0'/>

                <link rel='shortcut icon' href='assets/images/favicon.ico'/>

                <link href='assets/libs/tobii/css/tobii.min.css' rel='stylesheet'/>
                <link
                    href='assets/libs/js-datepicker/datepicker.min.css'
                    rel='stylesheet'
                />
                <link
                    href='assets/libs/%40iconscout/unicons/css/line.css'
                    type='text/css'
                    rel='stylesheet'
                />
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link rel='stylesheet' href='assets/css/icons.min.css'/>
                <link rel='stylesheet' href='assets/css/tailwind.min.css'/>
            </Head>

            <ThemeProvider attribute='class' defaultTheme='light'>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
                <BackToTop/>
                <Switcher/>
            </ThemeProvider>

            <Script
                strategy='beforeInteractive'
                src='assets/libs/feather-icons/feather.min.js'
            ></Script>

            <Script
                strategy='afterInteractive'
                src='assets/libs/tobii/js/tobii.min.js'
            ></Script>
            <Script
                strategy='afterInteractive'
                src='assets/libs/shufflejs/shuffle.min.js'
            ></Script>
            <Script
                strategy='afterInteractive'
                src='assets/libs/js-datepicker/datepicker.min.js'
            ></Script>

            <Script
                strategy='afterInteractive'
                src='assets/js/plugins.init.js'
            ></Script>
            <Script strategy='afterInteractive' src='assets/js/app.js'></Script>
        </div>
    )
}

export default MyApp
