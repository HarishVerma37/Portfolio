
import "./Hero.css"
export default function Hero() {
    return (
        <div className="container" style={{ display: "flex" }}>
            <div className="main-section">
                <div className="content-left">
                    <h2 className="title">Hii , I,m MERN Stack Developer</h2>
                    <p className="desc">
                        I am a passionate MERN stack developer with experience in building dynamic, responsive, and scalable web applications. In my portfolio, I showcase a variety of projects that leverage MongoDB, Express.js, React.js, and
                        Node.js to create powerful, full-stack solutions. Here's an overview of my key projects and technologies used:
                    </p>

                    <div className="btn-group">
                        <a href="#" className="bg-primary">Follow</a>
                        <a href="#">Resume</a>
                    </div>
                </div>

                <div className="content-right">
                    <div className="imageContainner">
                        <img src="harishh.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}