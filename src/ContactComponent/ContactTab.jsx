import Contact from "./Contact";
import "./Contact.css";

export default function ContactTab() {
    let styles = {
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        overflow: "hidden",
        marginTop: "50px",

    };

    return (
        <div>
            <div className="container" style={styles}>
                <div className="resp">
                    <Contact
                        link="tel:8400603016"
                        icon={<i className="fa-solid fa-phone"></i>}
                        title="Phone"
                        phone="8400603016"
                        className="mobile g"
                        contactStyle={{
                            position: "relative",
                            bottom: "50px"
                        }}
                    />
                    <Contact
                        link="mailto:harishverma286188@gmail.com"
                        title="Email"
                        icon={<i className="fa-regular fa-envelope"></i>}
                        phone="harishverma286188@gmail.com"
                        className="email g"
                    />
                    <Contact
                        link="https://www.linkedin.com/in/harish-verma-4b0360295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        icon={<i className="fa-brands fa-linkedin"></i>}
                        title="Harish Verma"
                        phone="8400603016"
                        className="g"
                        contactStyle={{
                            position: "relative",
                            top: "50px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
