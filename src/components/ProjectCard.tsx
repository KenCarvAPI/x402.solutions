import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  category: string;
  teamSize: string;
  status: 'Live' | 'Beta' | 'Development';
  website?: string;
  icon?: string;
}

export default function ProjectCard({
  name,
  description,
  category,
  teamSize,
  status,
  website,
  icon
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-accent text-white';
      case 'Beta':
        return 'bg-primary text-white';
      case 'Development':
        return 'bg-text-muted text-white';
      default:
        return 'bg-text-muted text-white';
    }
  };

  return (
    <div className="card p-8 group cursor-pointer transition-all duration-300">
      {/* Project Icon */}
      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300">
        {icon ? (
          <img src={icon} alt={name} className="w-8 h-8 rounded" />
        ) : (
          <span className="text-white font-bold text-lg">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Project Name */}
      <h3 className="text-heading-3 text-foreground mb-3 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Category Badge */}
      <div className="inline-block mb-4">
        <span className="bg-secondary text-text-muted px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-body-small text-text-muted mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Metrics Row */}
      <div className="flex items-center justify-between text-sm text-text-muted mb-5 pt-4 border-t border-border">
        <span className="font-medium">Team: {teamSize}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>

      {/* Learn More Link */}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark font-semibold text-sm transition-all duration-200 inline-flex items-center group/link"
          onClick={(e) => e.stopPropagation()}
        >
          Learn more
          <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>
      )}
    </div>
  );
}

