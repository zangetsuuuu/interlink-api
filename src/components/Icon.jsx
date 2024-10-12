import { icons } from 'lucide-react';

const Icon = ({ name, color = 'currentColor', size = 20 }) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        console.error(`Icon "${name}" not found in Lucide icons.`);
        return null;
    }

    return <LucideIcon color={color} size={size} />;
};

export default Icon;
