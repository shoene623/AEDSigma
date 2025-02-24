import Dashboard from "./Dashboard"
import DashboardLayout from "./Layout"

function Page() {
  const companyName = "AEDSigma" // You can replace this with your actual company name or fetch it from an API/config

  return (
    <DashboardLayout companyName={companyName}>
      <Dashboard companyName={companyName} />
    </DashboardLayout>
  )
}

export default Page

