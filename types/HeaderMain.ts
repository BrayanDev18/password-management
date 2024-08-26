import { ComponentType } from "react"

export type HeaderMainProps = {
  icon: ComponentType<{ className?: string }>
  text: string
  typeElement: "password" | "file" | ""
}

export type HeaderProps = {
  userId: string
}