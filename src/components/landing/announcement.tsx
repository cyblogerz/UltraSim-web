import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Blocks } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Announcement() {
    return (
      <Link
        to="/docs/changelog"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        <Blocks className="h-4 w-4" />{" "}
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Introducing AI segmenter</span>
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Link>
    )
  }