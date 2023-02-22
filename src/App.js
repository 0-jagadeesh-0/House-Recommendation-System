import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Result from './pages/Result/Result';
const App = () => {
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    </>
}

export default App;