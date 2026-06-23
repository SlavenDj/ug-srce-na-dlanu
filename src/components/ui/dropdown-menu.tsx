import { Menu } from "@base-ui/react/menu"
import { cn } from "@/lib/utils"
import * as React from "react"

const DropdownMenu = Menu.Root

const DropdownMenuTrigger = Menu.Trigger

const DropdownMenuPortal = Menu.Portal

const DropdownMenuPositioner = React.forwardRef<
  HTMLDivElement,
  Menu.Positioner.Props
>(({ className, ...props }, ref) => (
  <Menu.Positioner
    ref={ref}
    className={cn("z-40", className)}
    {...props}
  />
))
DropdownMenuPositioner.displayName = "DropdownMenuPositioner"

const DropdownMenuPopup = React.forwardRef<
  HTMLDivElement,
  Menu.Popup.Props
>(({ className, ...props }, ref) => (
  <Menu.Popup
    ref={ref}
    className={cn(
      "z-50 min-w-[180px] origin-[var(--anchor-transform-origin)] rounded-lg border border-gray-200 dark:border-[#2a2d3a] bg-white dark:bg-[#171923] p-1 shadow-lg outline-none transition-[transform,scale,opacity] duration-150 ease-in data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
      className,
    )}
    {...props}
  />
))
DropdownMenuPopup.displayName = "DropdownMenuPopup"

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  Menu.Item.Props
>(({ className, ...props }, ref) => (
  <Menu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-md px-2.5 py-2 text-sm text-gray-700 dark:text-[#d1d5db] outline-none transition-colors select-none hover:bg-gray-100 dark:hover:bg-[#1f2128] hover:text-gray-900 dark:hover:text-[#f3f4f6] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-3.5 [&>svg]:shrink-0",
      className,
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  Menu.Group.Props
>(({ className, ...props }, ref) => (
  <Menu.Group
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-200 dark:bg-[#2a2d3a]", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuPopup,
  DropdownMenuItem,
  DropdownMenuSeparator,
}
