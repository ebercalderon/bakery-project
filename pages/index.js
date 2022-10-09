import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import MenuTitle from 'containers/MenuTitle';
import Menu from 'containers/Menu';

export default function Home() {
    return (
        <>
            <div>
                <Hero/>
                <AboutUs />
                <MenuTitle />
                <Menu />
            </div>
        </>
    );
}
