import Contact from "./Contact";
import "./Contact.css";
export default function ContactTab() {
    let styles = {
        padding:"1.5rem",
        borderRadius:"1rem",
        background:" linear-gradient(45deg, #87ceeb, #00bfff, #1e90ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "3rem", // Optional: Uncomment if you want a gap between the items
        // border:"2px solid black",
    
    };

    return (
       <div className="container">
        <h4 className="contactMe">Contact Me</h4>
         <div className="container" style={styles}>
            <Contact
                link="tel:8400603016"
                icon={<i className="fa-solid fa-phone"></i>} // Pass the icon as JSX
                title="Phone"
                phone="8400603016"
                className="mobile g"
            />
            <Contact
                 link="mailto:harishverma286188@gmail.com"
                title="Email"
                icon={<i class="fa-regular fa-envelope"></i>}
                phone="harishverma286188@gmail.com"
                className="email g"
            />
            <Contact
                link="https://www.linkedin.com/in/harish-verma-4b0360295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                icon={<i class="fa-brands fa-linkedin"></i>}
                title="Harish Verma"
                phone="8400603016"
                className="g"
            />
        </div>
       </div>
    );
}
