import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, HeartPulse, AlertTriangle } from "lucide-react"

function Dashboard({ companyName }) {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Header with Company Name */}
      <div className="flex flex-col gap-2 bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold tracking-tight">{companyName}</h1>
        <p className="text-xl">AED Management Dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Sites</CardTitle>
            <Building2 className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Active locations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            <HeartPulse className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">Deployed AED devices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Needs Service</CardTitle>
            <AlertTriangle className="w-4 h-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">5</div>
            <p className="text-xs text-muted-foreground">Units past service date</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add your activity list or table here */}
            <p className="text-sm text-muted-foreground">No recent activity to display</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

