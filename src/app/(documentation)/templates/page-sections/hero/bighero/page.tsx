import { Button, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"
import { placeholderImg } from "@/assets"

export default function BigHero() {
  return (
    <Flex
      direction="column"
      gap="8"
      justify="center"
      align="center"
      p="6"
      m="4"
      width="auto"
    >
      <Text size={{ initial: "8", xs: "9" }} weight="bold" align="center">
        Meeting scheduling
        <br />
        <Text color="iris" size="9" weight="bold">
          made easy
        </Text>
      </Text>
      <Text color="gray" size="4" align="center" mx={{ initial: "4", sm: "9" }}>
        Never miss a meeting. Never be late for one too. Keep track of your
        meetings and receive smart reminders in appropriate times. Read your
        smart “Daily Agenda” every morning.
      </Text>
      <Flex gap="3">
        <Button variant="solid" radius="full" color="iris" size="4">
          Get Started
        </Button>
        <Button color="gray" variant="soft" radius="full" size="4">
          Learn More
        </Button>
      </Flex>
      <Image src={placeholderImg} width={600} height={400} alt="alt" />
    </Flex>
  )
}
