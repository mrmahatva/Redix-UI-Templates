"use client"
import { useRef } from "react"
import { CodeBlock, a11yDark } from "react-code-blocks"
import { Category, SubCategory, Template } from "@/lib/types"
import { Box, Button, Flex } from "@radix-ui/themes"
import useClipboard from "react-use-clipboard"

interface Props {
  template: Template
  category: Category
  subCategory: SubCategory
}

export default function CodeSample(props: Props) {
  const { template, category, subCategory } = props
  const code =
    require(`!!raw-loader!../app/(documentation)/templates/${category.id}/${subCategory.id}/${template.filename}/page.tsx`).default
  const [isCopied, setCopied] = useClipboard(code)
  const codeRef = useRef<HTMLDivElement>(null)

  return (
    <Box position="relative" ref={codeRef} pt='6'>
      <Flex position="absolute" top="0" left="0">
        <Button size="2" onClick={setCopied} radius="none">
          {isCopied ? "Copied 👌" : "Copy"}
        </Button>
      </Flex>
      <CodeBlock
        //@ts-ignore
        text={code}
        theme={a11yDark}
        language={"tsx"}
        startingLineNumber={0}
        /* wrapLongLines */ // This breaks text selection
        showLineNumbers={false}
      />
    </Box>
  )
}
