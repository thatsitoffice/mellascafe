import { Utensils, Wine, UserCheck, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Utensils": Utensils,
  "Wine": Wine,
  "UserCheck": UserCheck
};

interface Props {
  icon: string;
}

export default function FeatureIcon({ icon }: Props) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  
  return (
    <div className="mb-6 inline-block p-4 border border-white/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
  );
}
