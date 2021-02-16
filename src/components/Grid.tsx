import React from "react"

type GridProps = {
  children: React.ReactNode
}

export const Grid = ({ children }: GridProps) => {
  return <div className="grid">{children}</div>
}
