"use client"

import { createContext, useContext, useState } from "react"

const SidebarContext = createContext()

export function SidebarProvider({ defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
}

export function Sidebar({ children, className = "", ...props }) {
  const { isOpen } = useContext(SidebarContext)
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-full w-64 bg-white border-r transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 ${className}`}
      {...props}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ className = "", children, ...props }) {
  return (
    <div className={`px-4 py-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ className = "", children, ...props }) {
  return (
    <div className={`px-4 py-2 overflow-y-auto ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenu({ className = "", children, ...props }) {
  return (
    <ul className={`space-y-2 ${className}`} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuItem({ className = "", children, ...props }) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  )
}

export function SidebarMenuButton({ className = "", asChild, children, ...props }) {
  const Component = asChild ? "div" : "button"
  return (
    <Component
      className={`flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

