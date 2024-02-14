import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons"
import { Flex, IconButton, Link, Text } from "@radix-ui/themes"
import Image from "next/image"
import { demologo } from "@/assets"

export default function Component() {
  return (
    <Flex justify="between" m="4" align="center">
      <Flex pl="4">
        <Link href="/">
          <Image src={demologo} alt="alt" width={150} />
        </Link>
      </Flex>
      <Text size="3">© 2022 Redix Themes Templates. All rights reserved</Text>
      <Flex justify="between" gap="5" align="center" pr="4">
        <IconButton variant="soft">
          <TwitterLogoIcon />
        </IconButton>
        <IconButton variant="soft">
          <LinkedInLogoIcon />
        </IconButton>
        <IconButton variant="soft">
          <InstagramLogoIcon />
        </IconButton>
      </Flex>
    </Flex>
  )
}
