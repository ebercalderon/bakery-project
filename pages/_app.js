import Navbar from 'components/Navbar';
import Head from 'next/head';
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';

function MyApp({Component, pageProps}) {
    return (
        <div className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>
            <Head>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='assets/css/icons.min.css'/>
                <link rel='stylesheet' href='assets/css/tailwind.min.css'/>
            </Head>
            <ThemeProvider attribute='class' defaultTheme='light'>
                <Navbar/>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}

export default MyApp
