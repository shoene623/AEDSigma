import { supabase } from "../lib/supabaseClient"

export const updateUserProfile = async (updates) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  // Remove 'role' from updates if it exists
  const { role, ...safeUpdates } = updates

  const { data, error } = await supabase.from("profiles").update(safeUpdates).eq("id", user.id)

  if (error) {
    console.error("Error updating profile:", error)
    return null
  }

  return data
}

export const fetchUserProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (error) {
    console.error("Error fetching profile:", error)
    return null
  }

  return data
}

export const assignRoleAndAccess = async (userId, role, clientId = null, assignedSites = []) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user || user.user_metadata.role !== "employee") {
    console.error("Only employees can assign roles and access")
    return null
  }

  const { data, error } = await supabase
    .from("profiles")
    .update({
      role: role,
      client_id: clientId,
      assigned_sites: assignedSites,
    })
    .eq("id", userId)

  if (error) {
    console.error("Error assigning role and access:", error)
    return null
  }

  return data
}

