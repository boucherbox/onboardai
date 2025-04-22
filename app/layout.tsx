import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Obi",
  description: "Your trusted guide to Web3",
  icons: [
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '32x32' },
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '64x64' },
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '96x96' },
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '128x128' },
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '192x192' },
    { rel: 'icon', url: '/turtle-favicon.png', sizes: '256x256' },
    { rel: 'apple-touch-icon', url: '/turtle-favicon.png', sizes: '180x180' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Link href="/" className="text-2xl font-bold">
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex-1">{children}</div>
            <footer className="w-full py-12 md:py-24 lg:py-32 bg-[#679961]">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-cream">Navigation</h3>
                    <nav className="flex flex-col space-y-1">
                      <Link href="#about" className="text-sage-light hover:text-cream">
                        About
                      </Link>
                      <Link href="#mission" className="text-sage-light hover:text-cream">
                        Mission
                      </Link>
                      <Link href="#solutions" className="text-sage-light hover:text-cream">
                        Solutions
                      </Link>
                      <Link href="#features" className="text-sage-light hover:text-cream">
                        Features
                      </Link>
                      <Link href="#contact" className="text-sage-light hover:text-cream">
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-cream">Social</h3>
                    <nav className="flex flex-col space-y-1">
                      <a href="https://twitter.com/onboardai" className="text-sage-light hover:text-cream">
                        Twitter/X
                      </a>
                      <a href="https://t.me/onboardai" className="text-sage-light hover:text-cream">
                        Telegram
                      </a>
                      <a href="https://discord.gg/onboardai" className="text-sage-light hover:text-cream">
                        Discord
                      </a>
                    </nav>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-cream">Legal</h3>
                    <nav className="flex flex-col space-y-1">
                      <Link href="/privacy" className="text-sage-light hover:text-cream">
                        Privacy Policy
                      </Link>
                      <Link href="/terms" className="text-sage-light hover:text-cream">
                        Terms of Service
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-cream">Contact</h3>
                    <p className="text-sage-light">info@onboardai.com</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
