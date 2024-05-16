// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoHomePage from "./pages/InfoHomePage";
import AnotherPage from "./pages/AnotherPage"; // Ejemplo de otra página

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InfoHomePage />} />
                <Route path="/another" element={<AnotherPage />} />
            </Routes>
        </Router>
    );
}

export default App;
