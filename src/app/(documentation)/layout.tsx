import { Theme } from "@radix-ui/themes"
import Providers from "../(main)/providers"

interface Props {
  children: React.ReactNode
}

export default function DocumentationLayout(props: Props) {
  const { children } = props

  return (
    <Providers>
      <Theme appearance="dark" grayColor="slate" panelBackground="solid">
        {children}
      </Theme>
    </Providers>
  )
}
