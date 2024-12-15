import { 
  Video, 
  Wand2,
  Mic2, 
  Layout, 
  Palette,
  Users,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { ThreeDCard } from "@/components/ui/3d-card";

const features = [
  {
    icon: Video,
    title: "AI Video Creation",
    description: "Transform text into professional videos with our advanced AI technology.",
    color: "#00B4D8"
  },
  {
    icon: Wand2,
    title: "Style Transfer",
    description: "Apply cinematic, cartoon, or custom styles to your videos instantly.",
    color: "#4CAF50"
  },
  {
    icon: Mic2,
    title: "AI Voice Synthesis",
    description: "Generate natural-sounding voiceovers with customizable emotions.",
    color: "#FF9800"
  },
  {
    icon: Layout,
    title: "Templates",
    description: "Choose from hundreds of customizable templates for any purpose.",
    color: "#E91E63"
  },
  {
    icon: Palette,
    title: "Scene Generation",
    description: "Create stunning scenes with AI-powered visual generation.",
    color: "#00B4D8"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work together with your team in real-time on video projects.",
    color: "#4CAF50"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track performance and optimize your video content.",
    color: "#FF9800"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Create and edit videos on any device, anywhere.",
    color: "#E91E63"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need to Create
        </h2>
        <h3 className="text-2xl gradient-text font-bold text-center mb-12">
          Amazing Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ThreeDCard key={index} intensity={5}>
              <div className="feature-card p-6 rounded-xl backdrop-blur-sm bg-background/80 hover:shadow-lg transition-shadow duration-300">
                <feature.icon 
                  className="h-12 w-12 mb-4" 
                  style={{ color: feature.color }}
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
}