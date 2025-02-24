import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import SiteDetail from "./components/SiteDetail"

function App() {
  const companyName = "AEDSigma"

  return (
    <Router>
      <Layout companyName={companyName}>
        <Routes>
          <Route path="/" element={<Dashboard companyName={companyName} />} />
          <Route path="/sites" element={<Dashboard companyName={companyName} />} />
          <Route path="/site/:id" element={<SiteDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

