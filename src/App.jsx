import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BranchSelector from './components/BranchSelector';
import BranchPage from './pages/BranchPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BranchSelector />} />
                <Route path="/:branchId" element={<BranchPage />} />
            </Routes>
        </BrowserRouter>
    );
}
