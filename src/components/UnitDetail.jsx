"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../supabaseClient"

const UnitDetail = () => {
  const { id } = useParams()
  const [unit, setUnit] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUnitDetails()
  }, [])

  const fetchUnitDetails = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from("Units").select("*").eq("pkUnitID", id).single()

      if (error) throw error
      setUnit(data)
    } catch (error) {
      console.error("Error fetching unit details:", error)
      setError("Failed to fetch unit details")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading unit details...</div>
  if (error) return <div>Error: {error}</div>
  if (!unit) return <div>No unit found</div>

  return (
    <div>
      <h1>Unit Detail</h1>
      <p>Unit ID: {unit.pkUnitID}</p>
      <p>Unit Number: {unit.UnitNum}</p>
      <p>Location: {unit.Location}</p>
      {/* Add more unit details as needed */}
    </div>
  )
}

export default UnitDetail

