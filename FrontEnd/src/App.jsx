import PageNotFound from './vendorDashboard/components/PageNotFound';
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
