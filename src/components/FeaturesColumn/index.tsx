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
      title: "Daily Check-In",
      backgroundColor: "bg-yellow-200",
      icon: <SmileIcon className="h-12 w-12" />,
      href: "/meditation",
    },
    {
      title: "Navigating Injustice",
      backgroundColor: "bg-amber-600",
      icon: <SmileIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "Cultivating Black Joy",
      backgroundColor: "bg-pink-500",
      icon: <SmileIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "Guide to Sleep",
      backgroundColor: "bg-lime-300",
      icon: <BedIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "Beginning Meditation",
      backgroundColor: "bg-purple-400",
      icon: <SmileIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "The Shine Collection",
      backgroundColor: "bg-teal-300",
      icon: <SparkleIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "Women's Collection",
      backgroundColor: "bg-sky-400",
      icon: <HeartIcon className="h-12 w-12" />,
      href: "/",
    },
    {
      title: "Parents and Kids",
      backgroundColor: "bg-violet-500",
      icon: <SmileIcon className="h-12 w-12" />,
      href: "/",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Link href={feature.href} key={index}>
            <Card className={`w-full ${feature.backgroundColor}`}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>{feature.icon}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface IconProps {
  className?: string;
}

function BedIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MicroscopeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function SmileIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function SparkleIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
    </svg>
  );
}
