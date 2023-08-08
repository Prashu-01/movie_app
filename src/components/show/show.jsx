import React, { useEffect, useState } from 'react'
import '../style/show.css'
import { useLocation,Link } from 'react-router-dom'

export default function Show() {
    const location = useLocation()
    const [post,setPost]=useState([])
    const id = location.search.split('=')[1]
    
    useEffect(() => {
        const fetchAPI = async () => {
            await fetch(id)
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

    const rating=post.rating?.average
    const time=post.schedule?.time
    const day=post.schedule?.days
    const b_url=post.image? post.image.original :''
    const s_url=post.image? post.image.medium :''
    // const p=document.querySelector('.para')
    // p.innerHTML(post.summary)

    return (
        <>
            <div className="movie-card">
                <img src={b_url} alt="" className='m-img' />
                <div className='card-body contain' style={{ backdropFilter: 'blur(0)', justifyContent: 'center', textAlign: 'left', paddingTop: '7rem' }}>
                    <img src={s_url} alt="" className="show-img" />
                    <div className="details">
                        <span><i className="fa-sharp fa-solid fa-star"></i> {rating}</span><br />
                        <span className='genre'> </span>
                        <h1 className="title t" >{post.name}</h1>
                        <div className="genre">
                            Language: {post.language} <br />
                            Type: {post.type}
                        </div>
                        <br />
                        <span style={{ fontSize: '1.1rem' }} className='para'>
                        <div dangerouslySetInnerHTML={{__html:post.summary}} />
                        </span>
                        Scheduled for: &ensp;
                        <span>
                            {time} <span className="fa-star">{day}</span>
                        </span> <br />
                        Status:  <span className="fa-star"> {post.status}</span>
                        <div className="btns">
                            <Link to={`/book?${id}`}><button className=' debtn'>Book Ticket&ensp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            <a target="_blank" rel="noreferrer" href={post.url}><button className='debtn'>Review &ensp;<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button></a>
                            <a target="_blank" rel="noreferrer" href={post.officialSite}><button className='debtn'>Official Site &ensp;<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
