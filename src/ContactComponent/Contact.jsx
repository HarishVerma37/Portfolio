import "./Contact.css";
export default function Contact({ icon, title, phone, link }) {
    return (



        <a href={link} className="contact">
            <span>{icon}</span>
            <span>{title}</span>
            <span className="head">{phone}</span>
        </a>


    );
}