import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Logo, ThemeSwitcher } from "@/components"
import { Flex, IconButton, Link } from "@radix-ui/themes"

export default function Header() {
  return (
    <header>
      <Flex justify="between" m="4" align="center">
        <Flex pl="4">
          <Logo />
        </Flex>

        <Flex
          justify="between"
          gap="5"
          align="center"
          pr="4"
          display={{ initial: "none", xs: "flex" }}
        >
          <Link href="#templates" highContrast>
            Templates
          </Link>
          <Link href="https://www.radix-ui.com/">Docs</Link>
          <IconButton variant="ghost">
            <Link href="https://www.github.com">
              <GitHubLogoIcon />
            </Link>
          </IconButton>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </header>
  )
}
