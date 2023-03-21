import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImageCour from '../../asset/image/CourseItem/courjs.png'
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './courItem.css'
import '../../asset/css/GlobleStyle.css'

function BodyCour({item, text}) {
  const handleClick = () => {
    alert(`Chúc mừng bạn đăng kí thành công khoá học ${text}`)
  }
  return (
    <div className='bodyCour'>
      <Carousel className='slideCour' interval={1500}>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={ImageCour}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={ImageCour}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={ImageCour}
            alt="Third slide"
        />
    </Carousel.Item>
      </Carousel>
      <div className='infoCour'>
          {item.map((item) => (
            <div key={item.id} className='bodyItem'>
              <h1>{item.nameCour}</h1>
              <div className='rating'>
                <FaStar color="#ffc107" size='24'/>
                <FaStar color="#ffc107" size='24'/>
                <FaStar color="#ffc107" size='24'/>
                <FaStar color="#ffc107" size='24'/>
                <FaStar color="#ffc107" size='24'/>
              </div>
              <Button className='btn-singin' variant="warning" onClick={handleClick}>Đăng kí ngay</Button>{' '}
              <div className='lineAfter'></div>
              <h5 style={{textDecoration: 'underline', fontStyle: 'italic'}}>Người hướng dẫn</h5>
              <div className='teacher'>
                  <p className='jobtea'>{item.jobTeach}: </p>
                  <p className='nametea'>{item.nameTeach}</p>
              </div>
              <h5 style={{textDecoration: 'underline', fontStyle: 'italic'}}>Nội dung khoá học</h5>
              <span>{item.content}</span>
            </div>
          ))}
      </div>
      <div className='bonusCour'>
        {item.map((item) => (
            <div key={item.id}>
              <h5  className='info' style={{textDecoration: 'underline', fontStyle: 'italic'}}>Thông tin bổ sung khoá học</h5>
              <span>{item.bonus}</span>
              <h5 className='info' style={{textDecoration: 'underline', fontStyle: 'italic'}}>Giới thiệu ngôn ngữ {item.nameCour}</h5>
              <iframe width="100%" height="420" src="https://www.youtube.com/embed/1HakS7KsbCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        ))}
        
      </div>
    </div>
  )
}
export default BodyCour