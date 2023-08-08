import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import '../style/home.css'
import { Showcard, ShowcardR } from '../show/showcard'
import Footer from '../footer/Footer'

export default function HomeUI() {
    const [post, setPost] = useState([]);
    // fetch API
    useEffect(() => {
        const fetchAPI = async () => {
            await fetch('https://api.tvmaze.com/search/shows?q=all')
                .then((response) => {
                    return response.json()
                }).then((data) => {
                    setPost(data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        fetchAPI()
    }, [])
    return (
        <>
            {/* hero component */}
            <div className="hero">
                <div className="container">
                    <h1 className='title topic' style={{ color: 'white' }}>Top Recents</h1>
                    <hr style={{ color: 'white', width: '80%', margin: ' 1rem auto' }} />
                    <div className="left">
                        {/* mapping responses from API*/}
                        {
                            post?.length ? post.slice(0, 3).map(post => (
                                <Showcard post={post.show} key={post.score} />
                            )) : <h4 className="title"> No data available </h4>
                        }
                    </div>
                </div>
            </div>
            <div className="top-shows">
                <h1 className='title topic'>You might interested in</h1>
                <div className="allshows left" style={{ justifyContent: 'space-evenly' }}>
                    {/* more shows */}
                    {
                        post?.length ? post.slice(3, post.length).map(post => (
                            <ShowcardR post={post.show} key={post.score} />
                        )) : <h4 className="title"> No data available </h4>
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}
