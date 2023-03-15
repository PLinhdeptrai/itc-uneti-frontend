import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer/Footer'
import Newpost from './NewPost'
import BodyCour from './BodyCour'
import './courItem.css'

// Import Image:
import Cplusplus from '../../asset/image/CourseItem/c++.jpg'
import Python from '../../asset/image/CourseItem/python.png'
import Javascript from '../../asset/image/CourseItem/courjs.jpeg'

import Hd1 from '../../asset/image/CourseItem/hd1.jpg'
import Hd2 from '../../asset/image/CourseItem/hd2.jpg'
import Hd3 from '../../asset/image/CourseItem/hd5.jpg'

const cardCour = [
  {
    id: 1,
    image: Cplusplus,
    name: 'KHóa học C++'
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
    image: Hd1,
    name: 'Chương trình tri ân các anh hùng dân tộc' 
  },
  {
    id: 2,
    image: Hd2,
    name: 'Lễ bế giảng và trao bằng tốt nghiệp khóa 12'
  },
  {
    id: 3,
    image: Hd3,
    name: 'Nhóm lập trình Website'
  }
]
function CourItem() {
  return (
      <div>
        <Header />
        <div className='containerCour'>
              <div className='post-and-cour'>
                  <Newpost item={cardCour} text='KHÓA HỌC LIÊN QUAN'/>
                  <Newpost item={cardActive} text='BÀI VIẾT MỚI NHẤT'/>
              </div>
              <BodyCour />
        </div>
        <Footer />
      </div>
  )
}

export default CourItem
