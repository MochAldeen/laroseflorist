import { Toast } from "@/components/ui/toast"

export function useToast() {
  return {
    toast: ({ title, description }: { title: string; description: string }) => {
      console.log('Toast:', title, description);
      // Implementation would go here
    }
  }
}