import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PackageCardProps {
  title: string;
  price: string;
  duration?: string;
  features: string[];
  note?: string;
  highlighted?: boolean;
}

const PackageCard = ({ title, price, duration, features, note, highlighted }: PackageCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 transition-all hover:shadow-xl hover:-translate-y-2 ${
      highlighted 
        ? "bg-gradient-to-br from-primary/20 to-primary-light/30 border-2 border-primary" 
        : "bg-card border border-border/40"
    }`}>
      {highlighted && (
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full" />
      )}
      
      <div className="relative space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">{price}</span>
            {duration && <span className="text-muted-foreground">/{duration}</span>}
          </div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-primary" size={14} />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {note && (
          <p className="text-xs text-muted-foreground italic">{note}</p>
        )}

        <Button className="w-full rounded-full" variant={highlighted ? "default" : "outline"}>
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
