import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <nav
            style={{
                display: "flex",
                background: "White",
                justifyContent: "space-between",
                padding: "0 48px",
                gap: 10,
                boxShadow: "0 8px 8px 0 rgba(0,0,0,0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                }}
            >
                <img src="./images/logo.png" width={60} />
                <h1>AntiKe School</h1>
            </div>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <li>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            fontSize: 17,
                            color: "#323232",
                            padding: "18px",
                        }}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/teachers"
                        style={{
                            textDecoration: "none",
                            fontSize: 17,
                            color: "#323232",
                            padding: "18px",
                        }}
                    >
                        Teachers
                    </Link>
                </li>
                <li>
                    <Link
                        to="/holidays"
                        style={{
                            textDecoration: "none",
                            fontSize: 17,
                            color: "#323232",
                            padding: "18px",
                        }}
                    >
                        Holidays
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact-us"
                        className="contact-us-btn"
                        style={{
                            textDecoration: "none",
                            fontSize: 17,
                            color: "white",
                            backgroundColor: "purple",
                            borderRadius: 4,
                            padding: "18px",
                        }}
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
