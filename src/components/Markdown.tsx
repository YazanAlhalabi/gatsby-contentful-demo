import React from "react"

type NodeProps = {
  children: React.ReactNode
}

export const Bold = ({ children }: NodeProps) => <strong>{children}</strong>

export const Text = ({ children }: NodeProps) => (
  <p style={{ fontSize: "20px" }}>{children}</p>
)

export const Heading1 = ({ children }: NodeProps) => (
  <h1 style={{ fontSize: "35px" }}>{children}</h1>
)
