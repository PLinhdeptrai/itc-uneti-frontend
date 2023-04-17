import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tkdh from '../../asset/image/Contest/tkdh.jpg'
import './newsItem.css'
function NavNews() {
  return (
    <Container className='nav-contest'>
      <Row>
        <Col>
            <div className='nav_items'>
                <img className='nav_image' src={Tkdh} alt='error'></img>
                <div className='info_news'>
                    <p className='name_news'>Cuoc thi thiet ke do hoa</p>
                    <div className='description_news'>
                        <p className='time_news'>28 AUG, 2022</p>
                        <p className='view_news'> 100 Views</p>
                    </div>             
                </div>
            </div>
        </Col>
        <Col>
            <div className='nav_items'>
                <img className='nav_image' src={Tkdh} alt='error'></img>
                <div className='info_news'>
                    <p className='name_news'>Cuoc thi thiet ke do hoa</p>
                    <div className='description_news'>
                        <p className='time_news'>28 AUG, 2022</p>
                        <p className='view_news'> 100 Views</p>
                    </div>             
                </div>
            </div>
        </Col>
        <Col>
            <div className='nav_items'>
                <img className='nav_image' src={Tkdh} alt='error'></img>
                <div className='info_news'>
                    <p className='name_news'>Cuoc thi thiet ke do hoa</p>
                    <div className='description_news'>
                        <p className='time_news'>28 AUG, 2022</p>
                        <p className='view_news'> 100 Views</p>
                    </div>             
                </div>
            </div>
        </Col>
        <Col>
            <div className='nav_items'>
                <img className='nav_image' src={Tkdh} alt='error'></img>
                <div className='info_news'>
                    <p className='name_news'>Cuoc thi thiet ke do hoa</p>
                    <div className='description_news'>
                        <p className='time_news'>28 AUG, 2022</p>
                        <p className='view_news'> 100 Views</p>
                    </div>             
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NavNews;
