"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../supabaseClient"

const InspectionDetail = () => {
  const { id } = useParams()
  const [inspection, setInspection] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchInspectionDetails()
  }, [])

  const fetchInspectionDetails = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from("Inspections").select("*").eq("pkInspectionID", id).single()

      if (error) throw error
      setInspection(data)
    } catch (error) {
      console.error("Error fetching inspection details:", error)
      setError("Failed to fetch inspection details")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading inspection details...</div>
  if (error) return <div>Error: {error}</div>
  if (!inspection) return <div>No inspection found</div>

  return (
    <div>
      <h1>Inspection Detail</h1>
      <p>Inspection ID: {inspection.pkInspectionID}</p>
      <p>Date: {inspection.InspectionDate}</p>
      <p>Status: {inspection.InspectionStatus}</p>
      {/* Add more inspection details as needed */}
    </div>
  )
}

export default InspectionDetail

