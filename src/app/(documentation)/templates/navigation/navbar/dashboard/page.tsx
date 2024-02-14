import { MoonIcon, PlusIcon, SunIcon } from "@radix-ui/react-icons"
import { Avatar, Button, Flex, IconButton, Link } from "@radix-ui/themes"
import Image from "next/image"
import { demologo } from "@/assets"

export default function Dashboard() {
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
        <Button>
          <PlusIcon /> Action
        </Button>
        <IconButton variant="outline" radius="full">
          <Avatar
            src="https://source.unsplash.com/random/?portrait,face"
            fallback="M"
            radius="full"
          />
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
