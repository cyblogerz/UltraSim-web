import ChatButton from "@/components/chat-button"
import { Icons } from "@/components/icons"
import { Announcement } from "@/components/landing/announcement"
import { 
    PageActions,
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/landing/page-header"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
    <PageHeader>
    <Announcement />
    <PageHeaderHeading>UltraSim: Fetal Ultrasound Education Companion</PageHeaderHeading>
    <PageHeaderDescription>
      Beautifully designed components that you can copy and paste into your
      apps. Accessible. Customizable. Open Source.
    </PageHeaderDescription>
    <PageActions>
      <Link to="/docs" className={cn(buttonVariants())}>
        Get Started
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        to={siteConfig.links.github}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Link>
    </PageActions>
  </PageHeader>
  <ChatButton />
  </div>
  )
}

export default Landing