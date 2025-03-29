import { Link } from 'react-router-dom'; // Import Link for internal navigation

import "./Hero.css"
export default function Hero() {
    return (
        <>

        <div className='home-container'>
           <div className='desc-container-top'>
             <div className='desc-container'>
                <div className='desc-top-headings'>
                    <h4> Welcome to my <span className='feed-text'>feed</span> </h4>
                    <h3> <span className='hello-text'>Hello,</span> I'm a <span className='text-mern'>MERN Stack Developer</span> </h3>
                </div>
                <p className="desc">
                        I am a passionate MERN stack developer with experience in building dynamic, responsive, and scalable web applications. In my portfolio, I showcase a variety of projects that leverage MongoDB, Express.js, React.js, and
                        Node.js to create powerful, full-stack solutions. 
                </p>
                <div className='current-status-container'>

            <div className='current-status'>
                <h4>Current working on</h4>
                <div className='icons-parent'>

                    <img src='mongodb.png' />
                    <img src='expressjs.png' />
                    <img src='reactjs.png' />
                    <img src='nodejs.png' />
                    {/* <i class="fa-solid fa-leaf"></i>
                    <i class="fas fa-server"></i>
                    <i class="fas fa-code"></i>
                    <i class="fab fa-node-js"></i> */}
                </div>
            </div>
            </div>
            </div>
            
           </div>

            <div className="image-profile-container">
                <div className='image-profile'>
                    <div className='image-backgound'></div>
                    <img src="harish-removebg-preview.png" alt="" />
                </div>
            </div>

        </div>
        </>
    );
}
