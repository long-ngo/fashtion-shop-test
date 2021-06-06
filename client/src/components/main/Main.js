import About from './about/About';
import WhyUs from './why-us/WhyUs';
import Menu from './menu/Menu';
import Specials from './specials/Specials';
import Events from './events/Events';
import Book from './book/Book';
import Gallery from './gallery/Gallery';
import Chefs from './chefs/Chefs';
import Testimonials from './testimonials/Testimonials';
import Contact from './contact/Contact';

const Main = () => {
    return (
        <main id="main">
            <About />
            <WhyUs />
            <Menu />
            <Specials />
            <Events />
            <Book />
            <Gallery />
            <Chefs />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Main;
