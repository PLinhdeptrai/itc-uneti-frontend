import React from 'react'

import Image1 from '../../asset/image/News/image1.png'
import Image2 from '../../asset/image/News/image2.png'
import '../../asset/css/news.css'
import {Link} from 'react-router-dom'
const news = [
    {
        id:1,
        name: 'CÂU LẠC BỘ ITC',
        title: 'INFOMATION TECHNOLOGY CLUB',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
        thumbnail: Image1
    },
    {
        id:2,
        name: 'TRỰC THUỘC ITC',
        title: 'TRỰC THUỘC KHOA CNTT UNETI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
        thumbnail: Image2
    }
]
function News() {
  return (
    
    <div className='News'>
        <p className='title'>TỔNG QUAN</p>
        {news.map((item) => (
                <Link to={`/news/${item.id}`} key={item.id} className='itemNews'>
                    <img className='imageNews' src={item.thumbnail} alt='error'></img>
                    <div className='contentNews'>
                        <h1 className='nameNews'>{item.name}</h1>
                        <p className='titleNews'>{item.title}</p>
                        <span className='desNews'>{item.description}</span>
                    </div>
                </Link>
        ))}
    </div>
  )
}

export default News
