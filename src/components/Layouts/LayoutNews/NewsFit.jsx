import React from 'react'
import Header from '../../header/header'
import Footer from '../../Footer/Footer'
import Newpost from '../LayoutCour/NewPost'
import './newsItem.css'
// import '../LayoutCour/courItem.css'
import image1 from '../../../asset/image/Contest/image1.jpg'
import image2 from '../../../asset/image/Contest/image2.jpg'
import image3 from '../../../asset/image/Contest/image3.jpg'
import Cplusplus from '../../../asset/image/CourseItem/c++.jpg'
import Python from '../../../asset/image/CourseItem/python.png'
import Javascript from '../../../asset/image/CourseItem/courjs.png'
import Hd1 from '../../../asset/image/CourseItem/hd1.jpg'
import Hd2 from '../../../asset/image/CourseItem/hd2.jpg'
import Hd3 from '../../../asset/image/CourseItem/hd5.jpg'
import {FaCalendarAlt,FaChartBar,FaFacebook, FaTwitter, FaWhatsapp, FaPinterest} from 'react-icons/fa'

function NewsFit() {
  const newsfit = {
    title: "Hơn 100 doanh nghiệp tham gia chương trình “Ngày hội việc làm Uneti năm 2023”",
    time: " 25/03/2023",
    view: 361,
    image1,
    image2,
    image3
  }
  const cardCour = [
    {
      id: 1,
      image: Cplusplus,
      name: 'Khóa học C++'
    },
    {
      id: 2,
      image: Python,
      name: 'Khóa học Python'
    },
    {
      id: 3,
      image: Javascript,
      name: 'Khóa học Javascript'
    }
  ]
  const cardActive = [
    {
      id: 1,
      image: Hd2,
      name: 'Chương trình tri ân các anh hùng dân tộc' 
    },
    {
      id: 2,
      image: Hd3,
      name: 'Lễ bế giảng và trao bằng tốt nghiệp'
    },
    {
      id: 3,
      image: Hd1,
      name: 'Nhóm lập trình Website'
    }
  ]
  return (
    <div>
      <Header />
      <div className='containerNews'>
            <div className='mainNews'>
                <h2>{newsfit.title}</h2>
                <div className='navNews'>
                    <div className='nav-left'>
                      <div className='nav-time'><FaCalendarAlt/> Ngày đăng: {newsfit.time}</div>
                      <div className='nav-views'><FaChartBar/> Lượt xem: {newsfit.view}</div>
                    </div>
                    <div className='nav-right'>
                      <div className="fab">
                        <FaFacebook size={25} />
                      </div>
                      <div className="fab">
                        <FaTwitter size={25} />
                      </div>
                      <div className="fab">
                        <FaWhatsapp size={25}/>
                      </div>
                      <div className="fab">
                        <FaPinterest size={25}/>
                      </div>
                      </div>
                </div>
                <div className='text-body'>
                <span>
                Với mong muốn cung cấp thông tin bổ ích và thiết thực, tạo điều kiện để sinh viên cuối khóa tìm kiếm cơ hội phát triển nghề nghiệp phù hợp với năng lực, chuyên ngành đào tạo, sáng ngày 25/03/2023, Trường Đại học Kinh tế – Kỹ thuật Công nghiệp phối hợp cùng Liên đoàn lao động Quận Hai Bà Trưng tổ chức chương trình “Ngày hội việc làm Uneti năm 2023” với hơn 100 doanh nghiệp tham gia các gian hàng tuyển dụng và gần 5.000 lượt sinh viên tham dự.
                Tham dự chương trình, về phía đại biểu khách mời có: 
                <br></br>
                1. Đồng chí Phan Văn Phúc - Ủy viên ban thường vụ Quận ủy - Phó Chủ tịch UBND quận Hai Bà Trưng;
                <br></br>
                2. Đồng chí Tạ văn Dưỡng - Trưởng ban chính sách và Quan hệ lao động, Liên đoàn lao động TP Hà Nội.
                <br></br>
                Về phía LĐLĐ Quận Hai Bà Trưng, đơn vị phối hợp tổ chức:
                <br></br>
                1. Đồng chí Nguyễn Thị Kim Dung - Chủ tịch Liên đoàn lao động Quận Hai Bà Trưng;
                <br></br>
                2. Đồng chí Vũ Thị Trình - Phó chủ tịch Liên đoàn lao động Quận Hai Bà Trưng;
                <br></br>
                3. Đồng chí Trần Thị Thanh Hải - Phó chủ tịch Liên đoàn lao động Quận Hai Bà Trưng.
                <br></br>
                Cùng phóng viên Đài truyền hình Hà Nội, Đài truyền hình Nam Định, Tạp chí Công thương và các đơn vị báo chí đưa tin sự kiện.
                <br></br>
                Về phía lãnh đạo Nhà trường tham dự có:
                <br></br>
                1. TS Trần Hoàng Long - Phó Bí thư Đảng ủy, Hiệu trưởng Nhà trường;
                <br></br>
                2. NGƯT.TS Trần Đức Cân - Bí thư Đảng ủy, Phó Hiệu trưởng Nhà trường;
                <br></br>
                3. TS Nguyễn Ngọc Khương - Đảng ủy viên, Phó Hiệu trưởng Nhà trường;
                <br></br>
                4. PGS.TS Nguyễn Hữu Quang - TVĐU, Phó Hiệu trưởng Nhà trường.
                <br></br>
                Cùng các thầy, cô giáo lãnh đạo các đơn vị chức năng, các CBGV và các em sinh viên Uneti tham dự
                </span>
                <img src={newsfit.image1} className='img-text-body' alt='error'></img>
                <span>Trong phần lễ được diễn ra tại Hội trường tầng 2 nhà HA10 cơ sở 218 Lĩnh Nam – Hà Nội, Trước khi chương trình diễn ra, đội văn nghệ Nhà trường trình diễn các tiết mục đặc sắc</span>
                <img src={newsfit.image3} className='img-text-body' alt='error'></img>

                </div>
            </div>
            <div className='sliderNews'>
              <Newpost item={cardCour} text='KHÓA HỌC LIÊN QUAN' circle={false}/>
              <Newpost item={cardActive} text='BÀI VIẾT MỚI NHẤT' circle={true}/>
              <Newpost item={cardActive} text='BÀI VIẾT MỚI NHẤT' circle={true}/>
            </div>
        </div>
      <Footer />
      </div>
  )
}

export default NewsFit