import "./Contact.css";

export default function Contact({ icon, title, phone, link ,contactStyle}) {
    return (
         <a href={link} className="contact"  style={contactStyle}>
            <div className="icon-container">
                {icon}
            </div>
            <div>
                <span className="title">{title}</span>
                <a href={`tel:${phone}`} className="phone">{phone}</a>
            </div>
        </a>
    );
}
