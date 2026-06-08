import * as LucideIcons from 'lucide-react';

export default function LucideIcon({ name, size = 20, ...props }) {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} {...props} />;
}
