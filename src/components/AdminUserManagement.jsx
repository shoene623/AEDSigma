"use client"

import { useState } from "react"
import { assignRoleAndAccess } from "../services/userService"

const AdminUserManagement = () => {
  const [userId, setUserId] = useState("")
  const [role, setRole] = useState("")
  const [clientId, setClientId] = useState("")
  const [assignedSites, setAssignedSites] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await assignRoleAndAccess(userId, role, clientId, assignedSites)
    if (result) {
      alert("User role and access updated successfully")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="employee">Employee</option>
        <option value="client_admin">Client Admin</option>
        <option value="client_user">Client User</option>
      </select>
      {/* Add inputs for clientId and assignedSites as needed */}
      <button type="submit">Assign Role and Access</button>
    </form>
  )
}

export default AdminUserManagement

