import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";




export const CloseButton: React.FC = () => {
    return (
        <Link to= {`/`}>
        <Button variant={'outline'} size={'icon'}>
            <X className="h-6 w-6"/>
        </Button>
        </Link>
    )

}

