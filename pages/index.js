import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import MenuTitle from 'containers/MenuTitle';

export default function Home() {
    return (
        <>
            <div>
                <Hero/>
                <AboutUs />
                <MenuTitle />
            </div>
        </>
    );
}
