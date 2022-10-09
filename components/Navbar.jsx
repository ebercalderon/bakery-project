import Link from 'next/link';
import {useEffect} from 'react';

const Navbar = () => {
    const navbars = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'Menu',
            url: '/menu',
        },
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Contact',
            url: '/contact',
        },
    ];

    function toggleMenu() {
        document.getElementById('isToggle').classList.toggle('open');
        var isOpen = document.getElementById('navigation');
        if (isOpen.style.display === 'block') {
            isOpen.style.display = 'none';
        } else {
            isOpen.style.display = 'block';
        }
    }

    return (
        <nav id='topnav' className='defaultscroll is-sticky'>
            <div className='container'>
                <Link href='/'>
                    <a className='logo pl-0'>
						<span className='inline-block dark:hidden'>
							<img
                                src='assets/images/logo-dark.png'
                                className='l-dark'
                                height={24}
                                alt=''
                            />
							<img
                                src='assets/images/logo-light.png'
                                className='l-light'
                                height={24}
                                alt=''
                            />
						</span>
                        <img
                            src='assets/images/logo-light.png'
                            height={24}
                            className='hidden dark:inline-block'
                            alt=''
                        />
                    </a>
                </Link>
                <div className='menu-extras'>
                    <div className='menu-item'>
                        <a
                            className='navbar-toggle'
                            id='isToggle'
                            onClick={() => toggleMenu()}
                        >
                            <div className='lines'>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </a>
                    </div>
                </div>

                <div id='navigation'>
                    <ul className='navigation-menu nav-light'>
                        {navbars.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url}>
                                    <a className='sub-menu-item'>{item.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
