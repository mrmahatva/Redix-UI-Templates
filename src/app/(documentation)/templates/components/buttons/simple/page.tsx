"use client"
import { useEffect, useState } from "react"
import {
  ChatBubbleIcon,
  DotsVerticalIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Flex,
  IconButton,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  Text,
  TextArea
} from "@radix-ui/themes"
import { useTheme } from "next-themes"

export default function Simple() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Flex gap="8" m="6" width="100%" align="center" justify="center">
      {/* Button_1 : Theme Swicher */}
      <Card size={"4"}>
        <Flex height="100%" justify="center" align="center">
          {theme === "light" ? (
            <IconButton
              variant="outline"
              onClick={() => setTheme("dark")}
              radius="full"
              size="4"
            >
              <MoonIcon />
            </IconButton>
          ) : (
            <IconButton
              variant="outline"
              onClick={() => setTheme("light")}
              radius="full"
              size="4"
            >
              <SunIcon />
            </IconButton>
          )}
        </Flex>
      </Card>

      {/* Button_2 : Dropdown */}
      <Card size={"4"} mt="2">
        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="soft">
              Options
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem shortcut="⌘ E">Edit</DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘ D">Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem shortcut="⌘ N">Archive</DropdownMenuItem>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Move to project…</DropdownMenuItem>
                <DropdownMenuItem>Move to folder…</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>Advanced options…</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Add to favorites</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </Card>

      {/* Button_1 : PopeOver */}
      <Card mt="2" size="4">
        <PopoverRoot>
          <PopoverTrigger>
            <Button variant="soft">
              <ChatBubbleIcon width="16" height="16" />
              Comment
            </Button>
          </PopoverTrigger>
          <PopoverContent style={{ width: 360 }}>
            <Flex gap="3">
              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                fallback="A"
                radius="full"
              />
              <Box grow="1">
                <TextArea
                  placeholder="Write a comment…"
                  style={{ height: 80 }}
                />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <label>
                      <Checkbox />
                      <Text size="2">Send to group</Text>
                    </label>
                  </Flex>

                  <PopoverClose>
                    <Button size="1">Comment</Button>
                  </PopoverClose>
                </Flex>
              </Box>
            </Flex>
          </PopoverContent>
        </PopoverRoot>
      </Card>
    </Flex>
  )
}
