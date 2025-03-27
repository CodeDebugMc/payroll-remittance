import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PayrollTable from './components/PayrollTable';
import Remittances from './components/RemittanceTable';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayrollTable />} />
        <Route path="/remittance" element={<Remittances />} />
      </Routes>
    </Router>
  );
}

export default App;
