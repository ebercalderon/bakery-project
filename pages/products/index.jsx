import Breadcrumb from 'components/Breadcrumb';
import Menu from 'containers/Menu';

const MenuPage = () => {
    return (
        <>
            <Breadcrumb bgImage={'assets/images/cta.jpg'} title='Our Menu' />
            <Menu />
        </>
    );
};

export default MenuPage;
