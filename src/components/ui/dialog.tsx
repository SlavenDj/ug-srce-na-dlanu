import { Dialog } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"

const DialogRoot = Dialog.Root
const DialogTrigger = Dialog.Trigger
const DialogPortal = Dialog.Portal

function DialogBackdrop({ className, ...props }: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[ending-style]:fade-out data-[starting-style]:fade-in animate-fade-in",
        className
      )}
      {...props}
    />
  )
}

function DialogPopup({ className, ...props }: React.ComponentProps<typeof Dialog.Popup>) {
  return (
    <Dialog.Portal>
      <DialogBackdrop />
      <Dialog.Popup
        className={cn(
          "fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-2rem)] max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#171923] rounded-2xl shadow-2xl data-[ending-style]:fade-out data-[starting-style]:fade-in animate-fade-in p-8",
          className
        )}
        {...props}
      />
    </Dialog.Portal>
  )
}

function DialogClose({ className, ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return (
    <Dialog.Close
      className={cn(
        "cursor-pointer absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1f2128] transition-colors border-none text-gray-500",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn("text-[1.3rem] font-bold text-secondary leading-[1.4]", className)}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={cn("text-[0.9rem] text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogClose,
  DialogTitle,
  DialogDescription,
}
