import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

    const handleJoin = (e)=> {
        e.preventDefault()
        emailjs.sendForm(
            'service_xxd1sul',
            'template_fy0slae',
            form.current,
            'Ket1qBSUSYtNX4NgK'
        )
        .then((result)=>{
            console.log('done')
        },
        (error)=>{
            console.log(error)
        }
        )
    }
  return (
   <div className="Join" id='join-us'>
    <div className="left-j">
        <hr />
        <div><span className='stroke-text'>Ready to</span><span>Maximize</span></div>
        <div><span>your body's</span><span className='stroke-text'>Potential?</span></div>
    </div>
    <div className="right-j">
        <form className="email-container" ref={form} onSubmit={handleJoin}>
            <input type="email" name='user_email' placeholder='Enter your Email Address here...'/>
            <button type='submit' className="btn btn-j">Join now</button>
        </form>
    </div>
   </div>
  )
}

export default Join
// code proved by: https://www.emailjs.com/docs/examples/reactjs/