import {
  CaretDownIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
  IconButton,
  Link
} from "@radix-ui/themes"
import Image from "next/image"
import { demologo } from "@/assets"

export default function MainMenu() {
  const theme = "light"

  return (
    <Flex justify="between" m="4" align="center">
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
        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="3">
              Menu
              <CaretDownIcon width="16" height="16" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent size="2">
            <DropdownMenuItem>Products</DropdownMenuItem>
            <DropdownMenuItem>FAQ</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Blog</DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem color="sky">Newslatter</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>

        <Link href="/about">Pricing</Link>
        <Link href="/templates">Download</Link>
      </Flex>

      <Flex
        justify="between"
        gap="5"
        align="center"
        pr="4"
        display={{ initial: "none", xs: "flex" }}
      >
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
