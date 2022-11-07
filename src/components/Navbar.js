// import User from "../pages/User";
import useFetch from "./useFetch";
import '../assets/navbar.css';
import { NavbarData } from "./NavbarData";



function Navbar() {
    const url = "https://api.github.com/users/randoski"
    const { loading, data } = useFetch(url)
    return (
        <header className="container">
            <div className="navbar-container">

                {/* <h1 className="logo">Project 1</h1> */}
                <p className="name">{data.name}</p>

                <div>
                    <ul className="right-section">
                        {NavbarData.map((val, key) => {
                            return (

                                <li key={key}
                                    id={window.location.pathname === val.link ? "active" : ""}
                                    onClick={() => {
                                        window.location.pathname = val.link;
                                    }} >
                                    <div href={val.link}>{val.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;

