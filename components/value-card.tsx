import { BookOpen, Globe, MapPin, Shield } from "lucide-react"

interface ValueCardProps {
  title: string
  description: string
  icon: string
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Globe":
        return <Globe className="h-10 w-10 text-sage" />
      case "BookOpen":
        return <BookOpen className="h-10 w-10 text-sage" />
      case "Shield":
        return <Shield className="h-10 w-10 text-sage" />
      case "MapPin":
        return <MapPin className="h-10 w-10 text-sage" />
      default:
        return <Globe className="h-10 w-10 text-sage" />
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-brown-medium rounded-lg shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-lg font-bold mb-2 text-cream">{title}</h3>
      <p className="text-sage-light text-sm">{description}</p>
    </div>
  )
}
