import Carousel from 'react-bootstrap/Carousel';
import ImageLogo from "../../asset/image/logo.png";
import "../../asset/css/slider.css";
function UncontrolledExample() {
    return (
        <Carousel className='slider'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageLogo}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageLogo}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageLogo}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;