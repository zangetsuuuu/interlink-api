import { Link } from '@nextui-org/link';
import Icon from '@/components/Icon';

const Content = ({ title, children }) => {
    return (
        <div className="p-1">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg font-medium lg:text-xl">{title}</h1>
                <Link
                    href="/"
                    color="foreground"
                    className="flex space-x-1.5 text-sm"
                    aria-label="Back"
                >
                    <Icon name="ArrowLeft" size="16" />
                    <span>Back</span>
                </Link>
            </div>
            {children}
        </div>
    );
};

export default Content;
