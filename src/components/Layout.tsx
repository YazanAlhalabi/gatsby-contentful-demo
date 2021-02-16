import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <main className="layout">{children}</main>
}
