import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Consulting',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Consulting() {
  return (
    <SimpleLayout
      title="I'm available for Consulting"
      intro="Please contact me if you would like to discuss any potential Consulting needs. I'm based in the Dallas-Fort Worth area in Texas and available on a full or part
      time basis. I can travel at short notice."
    >
      <div className="space-y-20">
        <ToolsSection title="Vendor deep dives">
          <Tool title="Let me help you make good decisions">
            I have extensive experience in researching vendors to ensure the ones shortlisted are a good fit and to mitigate risk. 
            Alot of the research is done without requiring participation for the vendors. Being 100% independent ensures that vendors are evaluated equally. A comprehensive report will provide an indepth analysis to help guide decison making.  
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tendering">
          <Tool title="Tender process">
            I've seen tenders being awarded to the wrong organisation even though they've been scored highly in the questionaire and been asked hundreds 
            if not thousands of questions. Unfortunately, quite often the mistake will only become apparent many months later by which point it's too late to change.
            Leveraging my experinece, reaserch, contacts and due diligence I can help avoid this situation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Product">
          <Tool title="Product management">
            I have over 10 years of Technical Product experience. Initially as a Developer, through to Product owner and as a Product Manager. I am available 
            on a full or part time basis and can be involved to work as a traditional Product Manager or as a mentor and guide to help others
            succeed in their Product role. 
            or a   
          </Tool>
        </ToolsSection>
        <ToolsSection title="User experience">
          <Tool title="Design">
            One of my passions is User experience. In my spare time I'm quite often creating designs in Figma or designing new user interfaces 
            directly in HTML, CSS and JavaScript. I will be happy to demo my designs on request.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
