import {
  BedDouble,
  Brain,
  CheckCircle,
  Ear,
  Heart,
  Slice,
  Smile,
  Wind,
} from "lucide-react";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";

/**
 * Represents a feature object.
 */
interface Feature {
  title: string;
  backgroundColor: string;
  icon: JSX.Element;
  href: string;
}

export default function FeaturesColumn() {
  const features: Feature[] = [
    {
      title: "Breathing Exercises",
      backgroundColor: "bg-yellow-200",
      icon: <Wind className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/breathing",
    },
    {
      title: "Daily Check-In",
      backgroundColor: "bg-amber-600",
      icon: <CheckCircle className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/account",
    },
    {
      title: "Cultivating Black Joy",
      backgroundColor: "bg-pink-500",
      icon: <Smile className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
    {
      title: "Guide to Sleep",
      backgroundColor: "bg-lime-300",
      icon: <BedDouble className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
    {
      title: "Beginning Meditation",
      backgroundColor: "bg-purple-400",
      icon: <Brain className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
    {
      title: "The Shine Collection",
      backgroundColor: "bg-teal-300",
      icon: <Heart className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
    {
      title: "Women's Collection",
      backgroundColor: "bg-sky-400",
      icon: <Ear className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
    {
      title: "Parents and Kids",
      backgroundColor: "bg-violet-500",
      icon: <Slice className="h-6 w-6 md:h-12 md:w-12" />,
      href: "/",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Link href={feature.href} key={index}>
            <Card className={`h-full  w-full ${feature.backgroundColor}`}>
              <CardHeader>
                <CardTitle className="text-md md:text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{feature.icon}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
