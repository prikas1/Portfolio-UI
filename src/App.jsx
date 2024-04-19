import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    </Router>
    );
}

export default App;
