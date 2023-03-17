import React from 'react' 
import '../../asset/css/cour.css'
import '../../asset/css/GlobleStyle.css'
import { Link } from 'react-router-dom'

import Oop from '../../asset/image/Courses/Oop.jpg'
import Web from '../../asset/image/Courses/Web.jpg'
import Python from '../../asset/image/Courses/python.png'
function Cour() {
    const demoCourse = [
        {
            id: 1,
            img: Oop,
            nameCourse: 'Lap Trinh Huong Doi Tuong',
            teacher: 'Pham Thuy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 2,
            img: Web,
            nameCourse: 'Lap Trinh Web',
            teacher: 'Hai Long',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 3,
            img: Python,
            nameCourse: 'Lap trinh voi Python',
            teacher: 'Nguyen Van A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 4,
            img: Python,
            nameCourse: 'Lap trinh voi Python',
            teacher: 'Nguyen Van A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 5,
            img: Oop,
            nameCourse: 'Lap Trinh Huong Doi Tuong',
            teacher: 'Pham Thuy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 6,
            img: Web,
            nameCourse: 'Lap Trinh Web',
            teacher: 'Hai Long',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
    ]
    const Course = demoCourse
    return (
        <div className='Cour'>
            <div className='Title'>
                <h1>CÁC KHÓA HỌC</h1>
            </div>
            <div className='ListCourse'>
            {Course.map((item) => (
                <div key={item.id} className='card'>
                    <Link to={`/cour/${item.id}`} style={{textDecoration: 'none'}}>
                        <img className='img-top' src={item.img} alt='error'></img> 
                        <div className='body-card' >
                        <h4 className='nameCour' >{item.nameCourse}</h4>
                        <div className='teacher'>
                            <p className='p1-teacher' >Nguoi day: </p>
                            <p className='p2-teacher' >{item.teacher}</p>
                        </div>
                        <p className='descrip'>{item.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Cour
