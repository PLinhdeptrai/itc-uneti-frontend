import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from '../asset/image/slider.png';
import "../asset/css/slider.css";
function UncontrolledExample() {
    return (
        <div className='wrapper'>
            <Carousel className='slider'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ImageSlider}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slider"
                    src={ImageSlider}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-slider"
                    src={ImageSlider}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default UncontrolledExample;