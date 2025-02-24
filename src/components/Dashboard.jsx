"use client"

import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

const Dashboard = () => {
  const [counts, setCounts] = useState({
    companies: 0,
    sites: 0,
    units: 0,
    inspections: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCounts()
  }, [])

  const fetchCounts = async () => {
    try {
      setLoading(true)
      const [{ count: companies }, { count: sites }, { count: units }, { count: inspections }] = await Promise.all([
        supabase.from("Company").select("*", { count: "exact", head: true }),
        supabase.from("Site").select("*", { count: "exact", head: true }),
        supabase.from("Units").select("*", { count: "exact", head: true }),
        supabase.from("Inspections").select("*", { count: "exact", head: true }),
      ])

      setCounts({ companies, sites, units, inspections })
    } catch (error) {
      console.error("Error fetching counts:", error)
      setError("Failed to fetch dashboard data")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading dashboard data...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p>Total Companies: {counts.companies}</p>
        <p>Total Sites: {counts.sites}</p>
        <p>Total Units: {counts.units}</p>
        <p>Total Inspections: {counts.inspections}</p>
      </div>
    </div>
  )
}

export default Dashboard

