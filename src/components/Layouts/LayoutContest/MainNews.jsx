import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa'
import Olympic from '../../../asset/image/Contest/olympic.png'
import Thang11 from '../../../asset/image/Contest//thang11.jpg'
import Tkdh from '../../../asset/image/Contest/tkdh.jpg'
import './newsItem.css'
const NewsInfo = [
    {
        id: 1,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    },
    {
        id: 2,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    },
    {
        id: 3,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    },
    {
        id: 4,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    },
    {
        id: 5,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    },
    {
        id: 6,
        image: Thang11,
        name: "Curae lacinia consec tetur varius",
        time: "2 SEP, 2023",
        view: 103
    }
]
function MainNews() {
  return (
        <div className='main_Content'>
            <Container>
            <Row>
                <Col sm={9}>
                <Carousel indicators={false} controls={true} interval={1000}>
                    <Carousel.Item>
                        <div className='carou-item'>
                            <img className='d-block w-100 h-100' src={Olympic} alt='First slide'></img>
                            <h1 className='main_name'>Lorem ipsum dolor sit amet, consectetur iscing elit. pharetra magna. </h1>
                            <p className='des_news'>Lorem ipsum dolor sit amet, consectetur iscing elit. Suspendisse sed pharetra magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='carou-item'>
                            <img className='d-block w-100' src={Thang11} alt='First slide'></img>
                            <h1 className='main_name'>Lorem ipsum dolor sit amet, consectetur iscing elit. pharetra magna. </h1>
                            <p className='des_news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='carou-item'>
                            <img className='d-block w-100' src={Tkdh} alt='First slide'></img>
                            <h1 className='main_name'>Lorem ipsum dolor sit amet, consectetur iscing elit. pharetra magna. </h1>
                            <p className='des_news'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pharetra magna. </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col sm={3} className='Bonus_new'>
                    <h5><FaCircle size={16}/>  POPULAR CONTEST __________</h5>
                    {NewsInfo.map((item) =>(
                        <div key={item.id} className='slider_news'>
                            <h1 style={{width: "10%"}}>{item.id}.</h1>
                            <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                                <p className='name_slider'>{item.name}</p>
                                <div style={{display: "flex", justifyContent: "space-between", paddingRight: 30, fontSize: 16}}>
                                    <p>{item.time}</p>
                                    <p>{item.view} Views</p>
                                </div>
                            </div>
                            <img className='image_news' src={item.image} alt='error'></img>
                        </div>
                    ))}
                </Col>
            </Row>
            </Container>
        </div>
  );
}

export default MainNews;