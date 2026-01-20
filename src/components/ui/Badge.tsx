interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
    accent: 'bg-accent-500/20 text-accent-400 border border-accent-500/30',
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
      transition-colors duration-200
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}
