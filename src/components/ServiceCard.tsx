import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-card border border-border/40 p-6 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" aria-hidden="true" />
      
      <div className="relative space-y-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20" aria-hidden="true">
          <Icon className="text-primary" size={28} />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
