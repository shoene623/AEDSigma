"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../supabaseClient"
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material"

function SiteDetail() {
  const [site, setSite] = useState(null)
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    getSiteDetails()
  }, [])

  async function getSiteDetails() {
    try {
      setLoading(true)

      const { data: siteData, error: siteError } = await supabase.from("Site").select("*").eq("pkSiteID", id).single()

      if (siteError) throw siteError
      setSite(siteData)

      const { data: unitsData, error: unitsError } = await supabase
        .from("Units")
        .select(`
          *,
          AED!inner (
            AEDModel,
            BatteryExpDate,
            PadExpDate
          )
        `)
        .eq("fkSiteID", id)

      if (unitsError) throw unitsError
      setUnits(unitsData)
    } catch (error) {
      console.error("Error:", error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Typography>Loading...</Typography>

  if (!site) return <Typography>No site found</Typography>

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Site Detail
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          {site.SiteName}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>Address:</strong> {site.SiteAdd1}
            </Typography>
            {site.SiteAdd2 && <Typography>{site.SiteAdd2}</Typography>}
            <Typography>
              {site.SiteCity}, {site.SiteState} {site.SiteZip}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>Contact:</strong> {site.SiteContact}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {site.SitePhone}
            </Typography>
            <Typography>
              <strong>Email:</strong> {site.SiteEmail}
            </Typography>
            <Typography>
              <strong>Status:</strong> {site.SiteStatus}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h5" gutterBottom>
        AED Units
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Unit Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Last Service</TableCell>
              <TableCell>Battery Exp.</TableCell>
              <TableCell>Pad Exp.</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.pkUnitID}>
                <TableCell>{unit.UnitNum}</TableCell>
                <TableCell>{unit.Location}</TableCell>
                <TableCell>{unit.AED?.AEDModel}</TableCell>
                <TableCell>{unit.LastService && new Date(unit.LastService).toLocaleDateString()}</TableCell>
                <TableCell>
                  {unit.AED?.BatteryExpDate && new Date(unit.AED.BatteryExpDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{unit.AED?.PadExpDate && new Date(unit.AED.PadExpDate).toLocaleDateString()}</TableCell>
                <TableCell>{unit.InspectionStatus}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/unit/${unit.pkUnitID}`}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button component={Link} to="/sites" sx={{ mt: 2 }}>
        Back to Sites
      </Button>
    </div>
  )
}

export default SiteDetail

