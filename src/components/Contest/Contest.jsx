import React from 'react'
import Olympic from '../../asset/image/Contest/olympic.jpg'
import Thang11 from '../../asset/image/Contest/thang11.jpg'
import Tkdh from '../../asset/image/Contest/tkdh.jpg'
// import Mua from '../../asset/image/Contest/mua.jpg'

import '../../asset/css/contest.css'
import '../../asset/css/GlobleStyle.css'
import { Link } from 'react-router-dom'

const contest = [
    {
        id: 1,
        img: Olympic,
        nameContest: 'Cuộc thi Olympic tin học',
        time: '12/10/2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 2,
        img: Thang11,
        nameContest: 'Cuộc thi Tháng 11 tri ân',
        time: '12/10/2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 3,
        img: Tkdh,
        nameContest: 'Cuộc thi thiết kế đồ họa',
        time: '12/10/2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    // {
    //     id: 4,
    //     img: Mua,
    //     nameContest: 'Cuộc thi múa',
    //     time: '12/10/2022',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    // },
]
function Contest() {

    return (
        <div className='Contest'>
            <div className='Title'>
                <h1>CÁC CUỘC THI</h1>
            </div>
            <div className='main-contest'>
                <div className='ListContest'>
                {contest.map((item) => (
                    <div
                        key={item.id}
                        className='card'
                    >
                        <Link to={`/contest/${item.id}`} style={{textDecoration: 'none'}}>
                            <img className='img-top' src={item.img} alt='error'></img> 
                            <div className='body-card' >
                            <h4 className='nameContest' >{item.nameContest}</h4>
                            <div className='time'>
                                <p className='p1-time' >Thời gian: </p>
                                <p className='p2-time' >{item.time}</p>
                            </div>
                            <p className='descrip'>{item.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Contest
