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
    <div className="card p-6 group cursor-pointer hover:scale-105 transition-all duration-300">
      {/* Project Icon */}
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon ? (
          <img src={icon} alt={name} className="w-8 h-8 rounded" />
        ) : (
          <span className="text-white font-bold text-lg">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Project Name */}
      <h3 className="text-heading-3 text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Category Badge */}
      <div className="inline-block">
        <span className="bg-secondary text-text-muted px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-body-small text-text-muted mt-4 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Metrics Row */}
      <div className="flex items-center justify-between text-sm text-text-muted mb-4">
        <span>Team: {teamSize}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>

      {/* Learn More Link */}
      {website && (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark font-medium text-sm group-hover:underline transition-all duration-200 inline-flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          Learn more 
          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      )}
    </div>
  );
}

