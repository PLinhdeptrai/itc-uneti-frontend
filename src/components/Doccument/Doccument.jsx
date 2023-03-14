import React from 'react'
import '../../asset/css/doccument.css'

import Laptrinh from '../../asset/image/Doccument/laptrinh.png'
import Dohoa from '../../asset/image/Doccument/dohoa.png'
import Giaithuat from '../../asset/image/Doccument/giaithuat.png'

const docum = [
    {
        id: 1,
        img: Laptrinh,
        name: 'Lập trình',
        bgColor: 'chartreuse'
    },
    {
        id: 2,
        img: Dohoa,
        name: 'Đồ họa',
        bgColor: 'cornflowerblue'
    },
    {
        id: 3,
        img: Giaithuat,
        name: 'Giải thuật',
        bgColor: 'alevioletred'
    },
    {
        id: 4,
        img: Laptrinh,
        name: 'Lập trình',
        bgColor: 'chartreuse'
    },
    {
        id: 5,
        img: Dohoa,
        name: 'Đồ họa',
        bgColor: 'cornflowerblue'
    },
    {
        id: 6,
        img: Giaithuat,
        name: 'Giải thuật',
        bgColor: 'alevioletred'
    },
    
]
function Doccument() {
  return (
    <div className='Doc'>
        <div className='TitleDoc'>
            <h1>TÀI LIỆU HỌC TẬP</h1>
        </div>
        <div className='ListDoc'>
            {docum.map((item) => (
                <div key={item.id} className='card-circle'>
                    <div className='card-item'>
                        <img src={item.img} alt='error'></img>
                        <p className='nameDoc'>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Doccument
