
import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="container">
                <a class="navbar-brand" href="#">Harish</a>
                <button
                    style={{ backgroundColor: "#e3f2fd", color: "aqua" }}
                    class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link  class="nav-link" to="/About">About</Link>
                        <Link class="nav-link" to="/Skills">Skills</Link>
                        <Link class="nav-link" to="/Projects">Projects</Link>
                        <Link class="nav-link" to="/contactMe">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}