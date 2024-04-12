import { MessageCircleMoreIcon } from "lucide-react"
import { Button } from "./ui/button"


const ChatButton = () => {
  return (
    <Button variant={"round"} 
    size={'icon'}
    className="fixed bottom-4 right-4 flex flex-col gap-4  w-12 h-12">
<MessageCircleMoreIcon />
    </Button>
  )
}

export default ChatButton