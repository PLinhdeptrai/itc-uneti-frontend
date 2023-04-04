import React from 'react'
import Olympic from '../../asset/image/Contest/olympic.png'
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
    {
        id: 4,
        img: Olympic,
        nameContest: 'Cuộc thi Olympic tin học',
        time: '12/10/2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 5,
        img: Thang11,
        nameContest: 'Cuộc thi Tháng 11 tri ân',
        time: '12/10/2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 6,
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
                <p>CÁC CUỘC THI</p>
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
                            <div className='flex-time'>
                                <div className='time'>
                                    <p className='p1-time' >Thời gian: </p>
                                    <p className='p2-time' >{item.time}</p>
                                </div>
                                <Link className='btn-view' to={`/contest/${item.id}`} style={{textDecoration: 'none'}}>Xem thêm</Link>
                            </div>
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
