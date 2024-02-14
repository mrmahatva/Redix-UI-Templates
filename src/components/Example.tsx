import {
  Box,
  Button,
  Card,
  Flex,
  Inset,
  Link,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text
} from "@radix-ui/themes"
import { getExampleUrl } from "@/lib/getExampleUrl"
import type { Category, SubCategory, Template } from "@/lib/types"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { CodeSample, RadioCard, ResizableFrame } from "@/components"

type ExampleProps = {
  template: Template
  category: Category
  subCategory: SubCategory
}

export default function Example(props: ExampleProps) {
  const { template, category, subCategory } = props

  return (
    <Flex gap="4" direction="column" width="100%" mt='3' mb='3'>
      <Card id={template.filename}>
        <TabsRoot defaultValue="preview">
          <Inset side="top" mb="4">
            <Flex
              px={{ initial: "2", sm: "4" }}
              pt={{ initial: "2", sm: "4" }}
              align="center"
              gap={{ initial: "2", sm: "4" }}
              direction={{ initial: "column", xs: "row" }}
              wrap={{ initial: "wrap", sm: "nowrap" }}
            >
              <Text size={{ initial: "4", sm: "5" }} weight="medium">
                {template.name}
              </Text>
              <Box display={{ initial: "none", xs: "block" }}>
                <Separator orientation="vertical" size="2" />
              </Box>

              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <Box display={{ initial: "none", xs: "block" }}>
                <Separator orientation="vertical" size="2" />
              </Box>

              <Button variant="ghost" title="Open in Fullscreen">
                <Link
                  href={getExampleUrl(category, subCategory, template) ?? "@"}
                >
                  Live <ExternalLinkIcon />
                </Link>
              </Button>
              <Box display={{ initial: "none", xs: "block" }}>
                <Separator orientation="vertical" size="2" />
              </Box>

              <RadioCard />
            </Flex>
          </Inset>

          <TabsContent value="preview">
            <ResizableFrame
              template={template}
              category={category}
              subCategory={subCategory}
            />
          </TabsContent>

          <TabsContent value="code">
            <Flex width="100%">
              <CodeSample
                template={template}
                category={category}
                subCategory={subCategory}
              />
            </Flex>
          </TabsContent>
        </TabsRoot>
      </Card>
    </Flex>
  )
}
