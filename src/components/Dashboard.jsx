import { Building2, HeartPulse, AlertTriangle } from "lucide-react"

function Dashboard({ companyName }) {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gray-100 min-h-screen">
      {/* Header with Company Name */}
      <div className="flex flex-col gap-2 bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold tracking-tight">{companyName}</h1>
        <p className="text-xl">AED Management Dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Total Sites</h2>
            <Building2 className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-gray-500">Active locations</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Total Units</h2>
            <HeartPulse className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">48</div>
          <p className="text-xs text-gray-500">Deployed AED devices</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Needs Service</h2>
            <AlertTriangle className="w-4 h-4 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-red-500">5</div>
          <p className="text-xs text-gray-500">Units past service date</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Add your activity list or table here */}
          <p className="text-sm text-gray-500">No recent activity to display</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

