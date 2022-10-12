import Breadcrumb from 'components/Breadcrumb';
import Products from 'containers/Products';

const MenuPage = () => {
    return (
        <>
            <Breadcrumb bgImage={'assets/images/cta.jpg'} title='NUESTROS PRODUCTOS' />
            <Products />
        </>
    );
};

export default MenuPage;
