import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import { Flex, IconButton, Link } from "@radix-ui/themes"
import Image from "next/image"
import { demologo } from "@/assets"

export default function Simple() {
  const theme = "light"

  return (
    <Flex justify="between" p="4" align="center">
      <Flex pl="4">
        <Link href="/">
          <Image src={demologo} alt="alt" width={150} />
        </Link>
      </Flex>

      <Flex
        justify="between"
        gap="5"
        align="center"
        pr="4"
        display={{ initial: "none", xs: "flex" }}
      >
        <Link href="/about" highContrast>
          Projects
        </Link>
        <Link href="/about">About</Link>
        <Link href="/templates">Contact</Link>
        <IconButton variant="ghost">
          <LinkedInLogoIcon />
        </IconButton>
        <IconButton variant="ghost">
          <GitHubLogoIcon />
        </IconButton>
        {theme === "light" ? (
          <IconButton variant="outline">
            <MoonIcon />
          </IconButton>
        ) : (
          <IconButton variant="outline">
            <SunIcon />
          </IconButton>
        )}
      </Flex>
    </Flex>
  )
}
