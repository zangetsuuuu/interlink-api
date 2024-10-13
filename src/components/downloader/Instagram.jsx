import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import EachUtils from '@/utils/EachUtils';

const Instagram = ({ data }) => {
    const { url, data: contentCount } = data.result;

    return (
        <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm">
                Received {url.length} {contentCount > 1 ? 'contents' : 'content'}
            </h3>
            {url.length === 1 ? (
                <Button
                    as={Link}
                    href={url[0]}
                    target="_blank"
                    color="default"
                    variant="ghost"
                    className="max-w-xs text-xs w-fit"
                >
                    Download Content
                </Button>
            ) : (
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                    <EachUtils
                        of={url}
                        render={(link, index) => (
                            <Button
                                key={index}
                                as={Link}
                                href={link}
                                target="_blank"
                                color="default"
                                variant="ghost"
                                className="w-full max-w-xs text-xs"
                            >
                                Download Content {index + 1}
                            </Button>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

export default Instagram;
