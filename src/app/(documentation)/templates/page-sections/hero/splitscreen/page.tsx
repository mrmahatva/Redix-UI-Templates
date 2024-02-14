import { Button, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"
import { placeholderImg } from "@/assets"

export default function SpleetScreen() {
  return (
    <Flex
      p={{ initial: "2", lg: "6" }}
      m={{ initial: "0", lg: "4" }}
      direction={{ initial: "column", lg: "row" }}
    >
      <Flex direction="column" gap="6" justify="start">
        <Text size="8" align="left" weight="bold">
          Freelance <br />
          <Text size="8" color="ruby" weight="bold">
            Design Projects
          </Text>
        </Text>
        <Text color="gray" size="4" mr="9">
          The project board is an exclusive resource for contract work. It&#39;s
          perfect for freelancers, agencies, and moonlighters.
        </Text>
        <Flex gap="4">
          <Button variant="solid" color="ruby" radius="none" size="4">
            Create Project
          </Button>
          <Button variant="soft" color="gray" radius="none" size="4">
            How it Works
          </Button>
        </Flex>
      </Flex>
      <Image src={placeholderImg} width={600} height={400} alt="alt" />
    </Flex>
  )
}
