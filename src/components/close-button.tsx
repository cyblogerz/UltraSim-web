import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CloseButton() {
    return (
        <Button variant={'outline'} size={'icon'}>
            <X className="h-6 w-6"/>
        </Button>
    )
}

