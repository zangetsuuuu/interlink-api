import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import EachUtils from '@/utils/EachUtils';

const Youtube = ({ data }) => {
    const { title, sd, hd, fhd, mp3 } = data.result.data;

    const downloadData = [
        { label: 'Video (SD)', type: 'mp4', quality: sd?.quality, size: sd?.size, url: sd?.url },
        { label: 'Video (HD)', type: 'mp4', quality: hd?.quality, size: hd?.size, url: hd?.url },
        {
            label: 'Video (FHD)',
            type: 'mp4',
            quality: fhd?.quality,
            size: fhd?.size,
            url: fhd?.url,
        },
        { label: 'Music', type: 'mp3', quality: mp3?.quality, size: mp3?.size, url: mp3?.url },
    ].filter((item) => item.quality && item.size && item.url);

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-base text-center text-pretty">{title}</h1>
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                <EachUtils
                    of={downloadData}
                    render={(item, index) => (
                        <Card key={index} className="bg-[#27272a]">
                            <CardBody className="space-y-4 text-xs">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between w-full">
                                        <p>Type:</p>
                                        <p>{item.type}</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p>Quality:</p>
                                        <p>{item.quality}</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p>Size:</p>
                                        <p>{item.size}</p>
                                    </div>
                                </div>
                                <Button
                                    as={Link}
                                    href={item.url}
                                    target="_blank"
                                    color="default"
                                    variant="ghost"
                                    className="w-full text-xs"
                                >
                                    Download {item.label}
                                </Button>
                            </CardBody>
                        </Card>
                    )}
                />
            </div>
        </div>
    );
};

export default Youtube;
