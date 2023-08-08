import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Bookshow() {

    const location = useLocation()
    const [post, setPost] = useState([])
    const id = location.search.split('?')[1]

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

    const time = post.schedule?.time
    const day = post.schedule?.days
    return (
        <>
            <div className="container">
                <form id="contact" action="" method="post">
                    <h3>Booking for: <b>{post.name}</b></h3>
                    <h4>Time: &ensp;
                        <span>
                            {time} <span className="fa-star">{day}</span>
                        </span></h4>
                    <h4>For enquiry contact us</h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number" type="tel" tabIndex="3" required />
                    </fieldset>
                    <fieldset>
                        Number of tickets &ensp;
                        <input type="tel" tabIndex="1" style={{ width: '3rem' }} required />
                        <fieldset>
                            Select section: <br />
                            Silver &ensp;
                            <input type="checkbox" tabIndex="1" required /> <br />
                            Gold &ensp;
                            <input type="checkbox" tabIndex="1" required /> <br />
                            Platinum &ensp;
                            <input type="checkbox" tabIndex="1" required /> <br />
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
