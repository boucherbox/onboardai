import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-sage-light dark:bg-brown-medium rounded-lg shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-brown-dark dark:text-cream">{title}</h3>
      <p className="text-brown-dark dark:text-sage-light">{description}</p>
    </div>
  )
}
