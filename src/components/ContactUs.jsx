const contactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div style={{ flexDirection: "column", display: "flex" }}>
      <div>
      <img src="./images/Contact.png" alt="" />
      </div>
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
        <textarea name="message" id="message" placeholder="Message"></textarea>
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

export default contactUs;
