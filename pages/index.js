import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import MenuTitle from 'containers/MenuTitle';
import Menu from 'containers/Menu';
import Reservation from 'containers/Reservation';
import Testimonials from 'containers/Testimonials';
import Instagram from 'containers/Instagram';

export default function Home() {
    return (
        <>
            <div>
                <Hero/>
                <AboutUs/>
                <MenuTitle/>
                <Menu/>
                <Reservation/>
                <Testimonials/>
                <Instagram/>
            </div>
        </>
    );
}
