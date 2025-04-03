
import { type ToastActionElement, ToastProps } from "@/components/ui/toast"
import { 
  useToast as useToastOriginal
} from "@/components/ui/use-toast"

export type ToastAction = {
  label: string
  onClick: () => void
  altText?: string
}

export type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: ToastProps["variant"]
}

export const useToast = useToastOriginal

export const toast = useToastOriginal()?.toast ?? (() => {
  console.error("Toast context is undefined")
})
