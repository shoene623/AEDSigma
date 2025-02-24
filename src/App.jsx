import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import SiteDetail from "./components/SiteDetail"
import UnitDetail from "./components/UnitDetail"
import InspectionDetail from "./components/InspectionDetail"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/site/:id" element={<SiteDetail />} />
          <Route path="/unit/:id" element={<UnitDetail />} />
          <Route path="/inspection/:id" element={<InspectionDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

