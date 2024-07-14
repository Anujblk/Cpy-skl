const Footer = () => {
    return (
        <div
            style={{
                color: "white",
                backgroundColor: "#002D62",
                height: 600,
                display: "flex",
                // flexDirection: "column",
                gap: 10,
                padding: "20px",
                alignContent: "",
            }}
        >
            <div>
                <h2>AntiKe School</h2>
                <p>
                    online learning community school for code kids powered by
                    BLK
                </p>
            </div>
            <div>
                <h2>Popular Links</h2>
                <h3>Home</h3>
                <h3>Teachers</h3>
                <h3>Holidays</h3>
                <h3>Contact Us</h3>
            </div>

            <div>
                <h2>Contact US </h2>
                <textarea
                    name="fullname"
                    id="fullname"
                    placeholder="Full name"
                    display="block"
                ></textarea>
                <textarea
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                ></textarea>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                ></textarea>
                <button
                    style={{
                        background: "yellow",
                        color: "white",
                        borderRadius: 4,
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Footer;
