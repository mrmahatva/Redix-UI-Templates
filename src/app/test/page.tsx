"use client"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Flex, IconButton, Text } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import { demologo } from "@/assets"

export default function Test() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Flex
      direction="column"
      gap="9"
      align="center"
      justify="center"
      p="9"
      m="9"
    >
      <Text size="9" weight="bold">
        The current theme is: {theme}
      </Text>

      {theme === "light" ? (
        <IconButton size="4" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </IconButton>
      ) : (
        <IconButton size="4" onClick={() => setTheme("light")}>
          <SunIcon />
        </IconButton>
      )}

      <Image src={demologo} width={150} alt='alt' />
    </Flex>
  )
}
