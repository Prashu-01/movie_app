import React from 'react'
import { Link } from 'react-router-dom'
import '../style/showcard.css'

export function Showcard({ post }) {
    const url = post.image ? post.image.medium : "https://plus.unsplash.com/premium_photo-1674500522724-3d2a371d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
    return (
        <div className='show-c'>
            <img src={url} className='show-img' alt="" />
            <div className="content">
                <div className="rate">
                    <span><i className="fa-sharp fa-solid fa-star"></i> {[post.rating.average]}</span>
                    <span>
                        {post.schedule.time} <span className="fa-star">{post.schedule.days}</span>
                    </span>
                </div>
                <span className='genre'>{post.genres[0]} | {post.genres[1]}</span>
                <h1 className="title">{post.name}</h1>
                <br />
                <Link to={`/show?link=${post._links.self.href}`}><button className="view">About Show <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button></Link>
            </div>
        </div>
    )
}
export function ShowcardR({ post }) {
    const url = post.image ? post.image.medium : "https://plus.unsplash.com/premium_photo-1674500522724-3d2a371d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
    return (
        <div className="card">
            <img src={url} style={{ width: '15rem', height: '20rem' }} alt="" />
            <div className="card-body" style={{ bottom: '0' }}>
                <div className="rate">
                    <span><i className="fa-sharp fa-solid fa-star"></i> {[post.rating.average]}</span>
                    <span>
                        {post.schedule.time ? post.schedule.time : 'No schedule'} <span className="fa-star">{post.schedule.days ? post.schedule.days : ''}</span>
                    </span>

                </div>
                <span className='genre'>{post.genres[0]} | {post.genres[1]}</span>
                <h1 className="title" style={{fontSize:'1.7rem'}}>{post.name}</h1>
                <br />
                <Link to={`/show?link=${post._links.self.href}`}><button className="view">About Show <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button></Link>
            </div>
        </div>
    )
}
