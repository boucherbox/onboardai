import { BookOpen, Globe, Shield, Users } from "lucide-react"

interface SolutionCardProps {
  title: string
  description: string
  icon: string
}

export default function SolutionCard({ title, description, icon }: SolutionCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "BookOpen":
        return <BookOpen className="h-12 w-12 text-sage" />
      case "Shield":
        return <Shield className="h-12 w-12 text-sage" />
      case "Globe":
        return <Globe className="h-12 w-12 text-sage" />
      case "Users":
        return <Users className="h-12 w-12 text-sage" />
      default:
        return <BookOpen className="h-12 w-12 text-sage" />
    }
  }

  return (
    <div className="flex flex-col p-6 bg-brown-dark rounded-lg shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">{getIcon()}</div>
        <h3 className="text-xl font-bold text-cream">{title}</h3>
      </div>
      <p className="text-sage-light">{description}</p>
    </div>
  )
}
