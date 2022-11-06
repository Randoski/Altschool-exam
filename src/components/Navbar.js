// import User from "../pages/User";
import useFetch from "./useFetch";
import '../assets/navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    const url = "https://api.github.com/users/randoski"
    const { loading, data } = useFetch(url)
    return (
        <header className="container">
            <div className="navbar-container">
                <h1 className="logo">Project 1</h1>

                {/* Image & Names */}
                <div className="img-and-name">
                    <Link to="/random" className="link">404 page</Link>
                    <p className="name">{data.name}</p>
                    <img src={data.avatar_url} alt="Github dp" />
                </div>
            </div>
        </header>
    )
}

export default Navbar;

