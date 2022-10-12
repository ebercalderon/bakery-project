import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import ProductTitle from 'containers/ProductTitle';
import Products from 'containers/Products';
import Order from 'containers/Order';
import Testimonials from 'containers/Testimonials';
import Instagram from 'containers/Instagram';

export default function Home() {
    return (
        <>
            <div>
                <Hero/>
                <AboutUs/>
                <ProductTitle/>
                <Products/>
                <Order/>
                <Testimonials/>
                <Instagram/>
            </div>
        </>
    );
}
