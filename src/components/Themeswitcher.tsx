"use client"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { IconButton } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <>
      {theme === "light" ? (
        <IconButton variant="outline" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </IconButton>
      ) : (
        <IconButton variant="outline" onClick={() => setTheme("light")}>
          <SunIcon />
        </IconButton>
      )}
    </>
  )
}
