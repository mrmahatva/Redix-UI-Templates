import { Theme, ThemePanel } from "@radix-ui/themes"
import Providers from "../(main)/providers"

interface Props {
  children: React.ReactNode
}

export default function TestLayout(props: Props) {
  const { children } = props

  return (
    <Providers>
      <Theme appearance="dark" grayColor="slate">
        {children}
        {/* <ThemePanel /> */}
      </Theme>
    </Providers>
  )
}
