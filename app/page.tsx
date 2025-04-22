import { ChevronRight, MessageCircle, Shield, Globe, Sparkles, Users, MessageSquare } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import ValueCard from "@/components/value-card"
import SolutionCard from "@/components/solution-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-brown-dark overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background_image.svg"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 title-container">
          <h1 className="font-['Bouncy'] text-[10vh] leading-none title-color">
            Obi
          </h1>
          <p className="font-['Atma-Light'] text-[3vh] leading-none title-color">
            learn crypto. slow and steady
          </p>
          <div className="flex gap-6 mt-6">
            <Button className="bg-transparent hover:bg-transparent border-2 border-[#987048] text-[#987048] hover:text-[#987048] hover:opacity-80 px-8 py-6 text-xl font-['Atma-Light']">
              <Image src="/telegram.svg" alt="Telegram" width={32} height={32} className="mr-3" />
              Telegram
            </Button>
            <Button className="bg-transparent hover:bg-transparent border-2 border-[#987048] text-[#987048] hover:text-[#987048] hover:opacity-80 px-8 py-6 text-xl font-['Atma-Light']">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="mr-3" />
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[15%] w-80 h-80">
          <Image
            src="/turtle.svg"
            alt="Turtle mascot"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#679961]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cream">
                About OnboardAI
              </h2>
              <p className="mx-auto max-w-[700px] text-sage-light md:text-xl">
                Your trusted guide to Web3, designed for the web3-curious worldwide.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 text-left">
              <p className="text-sage-light">
                We simplify the complex world of cryptocurrency through intelligent AI assistance on platforms you
                already use daily—WhatsApp and Telegram. Our goal is to make this new world accessible to everyone, so
                we can all find the freedom of the open internet.
              </p>
              <p className="text-sage-light">
                Founded by a team of Web3 experts with deep experience in user experience design and development, we're
                bridging the gap between traditional financial systems and the future of decentralized finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-[#547D52]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cream">
                Mission & Values
              </h2>
              <p className="mx-auto max-w-[700px] text-sage-light md:text-xl">
                Making Web3 accessible to the next billion users.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-8">
              <ValueCard
                title="Accessibility First"
                description="We believe everyone deserves access to the financial freedom Web3 offers"
                icon="Globe"
              />
              <ValueCard
                title="Education Over Speculation"
                description="We empower users with knowledge, not get-rich-quick schemes"
                icon="BookOpen"
              />
              <ValueCard
                title="Trust & Security"
                description="We protect newcomers from common scams and misinformation"
                icon="Shield"
              />
              <ValueCard
                title="Local Context Matters"
                description="We recognize that Web3 adoption must be culturally relevant and regionally specific"
                icon="MapPin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-[#679961]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cream">Our Solutions</h2>
              <p className="mx-auto max-w-[700px] text-sage-light md:text-xl">
                Tackling barriers to cryptocurrency adoption
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-12 mt-8">
              <SolutionCard
                title="Knowledge Gap"
                description="Our AI tutor explains complex concepts in plain language, answering questions like 'How do I set up a wallet?' or 'What is an airdrop?'"
                icon="BookOpen"
              />
              <SolutionCard
                title="Scam Protection"
                description="Our real-time alerts identify potential fraud, phishing attempts, and suspicious contracts before you lose money."
                icon="Shield"
              />
              <SolutionCard
                title="Accessibility Barrier"
                description="By integrating directly with WhatsApp and Telegram, we eliminate the need to download unfamiliar apps or navigate complex interfaces."
                icon="Globe"
              />
              <SolutionCard
                title="Trust Issues"
                description="Our human concierge service connects users with verified experts when AI assistance isn't enough, building confidence through personalized guidance."
                icon="Users"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#547D52]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brown-dark">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-brown-dark md:text-xl">
                How OnboardAI makes Web3 accessible and secure
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <FeatureCard
                title="24/7 AI Assistant"
                description="Get immediate answers to your Web3 questions in conversational, jargon-free language"
                icon={<MessageCircle className="h-12 w-12 text-brown-dark" />}
              />
              <FeatureCard
                title="Human Expert Access"
                description="Connect with verified mentors for personalized support with complex issues"
                icon={<Users className="h-12 w-12 text-brown-dark" />}
              />
              <FeatureCard
                title="Anti-Scam Protection"
                description="Receive alerts about potential fraud before you engage"
                icon={<Shield className="h-12 w-12 text-brown-dark" />}
              />
              <FeatureCard
                title="Multilingual Support"
                description="Learn in your preferred language with localized content"
                icon={<Globe className="h-12 w-12 text-brown-dark" />}
              />
              <FeatureCard
                title="Progressive Learning Path"
                description="Build knowledge systematically from basics to advanced concepts"
                icon={<ChevronRight className="h-12 w-12 text-brown-dark" />}
              />
              <FeatureCard
                title="Community Connection"
                description="Find and connect with other Web3 enthusiasts in your region"
                icon={<Sparkles className="h-12 w-12 text-brown-dark" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#679961]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cream">Contact Us</h2>
              <p className="mx-auto max-w-[700px] text-sage-light md:text-xl">
                Ready to start your Web3 journey or partner with us?
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-cream">Get in Touch</h3>
                <p className="text-sage-light">Let's make Web3 accessible for everyone, together.</p>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-cream">Email:</span>
                    <a href="mailto:info@onboardai.com" className="text-sage hover:underline">
                      info@onboardai.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-cream">Twitter/X:</span>
                    <a href="https://twitter.com/onboardai" className="text-sage hover:underline">
                      @onboardai
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-cream">Telegram:</span>
                    <a href="https://t.me/onboardai" className="text-sage hover:underline">
                      @onboardai
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-cream">Discord:</span>
                    <a href="https://discord.gg/onboardai" className="text-sage hover:underline">
                      discord.gg/onboardai
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <form className="flex flex-col gap-4">
                  <input
                    className="rounded-md border border-brown-medium bg-brown-medium/50 px-4 py-2 text-cream placeholder:text-sage-light/70"
                    placeholder="Your name"
                    type="text"
                  />
                  <input
                    className="rounded-md border border-brown-medium bg-brown-medium/50 px-4 py-2 text-cream placeholder:text-sage-light/70"
                    placeholder="Your email"
                    type="email"
                  />
                  <textarea
                    className="rounded-md border border-brown-medium bg-brown-medium/50 px-4 py-2 text-cream placeholder:text-sage-light/70"
                    placeholder="Your message"
                    rows={4}
                  ></textarea>
                  <Button className="bg-sage hover:bg-sage/90 text-brown-dark">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
