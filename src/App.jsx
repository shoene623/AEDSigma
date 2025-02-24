import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import SiteDetail from "./components/SiteDetail"
import Login from "./components/Login"
import Signup from "./components/Signup"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  const companyName = "AEDSigma"

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout companyName={companyName}>
                  <Dashboard companyName={companyName} />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/sites"
            element={
              <ProtectedRoute>
                <Layout companyName={companyName}>
                  <Dashboard companyName={companyName} />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/site/:id"
            element={
              <ProtectedRoute>
                <Layout companyName={companyName}>
                  <SiteDetail />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

