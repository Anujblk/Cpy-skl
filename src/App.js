import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>WElcome to home</h1>} />
        <Route path="/teachers" element={<h1>welcome teachers</h1>} />
        <Route path="/holidays" element={<h1>holidays</h1>} />
        <Route path="contact-us" element={<p>contact us</p>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
