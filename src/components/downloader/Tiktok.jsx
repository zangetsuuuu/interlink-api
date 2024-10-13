import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';
import ReactPlayer from 'react-player';
import Icon from '@/components/Icon';
import EachUtils from '@/utils/EachUtils'; 

const Tiktok = ({ data }) => {
    const { author, title, images, music, play, hdplay } = data.data;

    const downloadData = images
        ? images.map((image, index) => ({
              label: `Image ${index + 1}`,
              link: image,
          }))
        : [
              { label: 'Music (MP3)', link: music },
              { label: 'Video (SD)', link: play },
              { label: 'Video (HD)', link: hdplay },
          ];

    return (
        <div className="max-w-full mx-auto space-y-4 lg:max-w-xl">
            <div className="flex flex-col items-center mx-auto space-y-4 w-fit">
                <Image
                    src={`https://app.requestly.io/delay/1000/${author.avatar}`}
                    alt={author.nickname}
                    className="border-[0.5px] border-white size-16 lg:size-20"
                />
                <div className="space-y-0.5 text-center">
                    <p className="text-sm">{author.nickname}</p>
                    <p className="text-xs font-light opacity-80 text-pretty">@{author.unique_id}</p>
                </div>
                <p className="text-xs font-light text-center opacity-80 text-pretty">{title}</p>
            </div>

            <div className="w-full mx-auto space-y-4 text-center">
                {images ? (
                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <EachUtils
                            of={images}
                            render={(image, index) => (
                                <Image
                                    key={index}
                                    src={`https://app.requestly.io/delay/1000/${image}`}
                                    alt="Tiktok Content"
                                    className="w-full h-fit"
                                />
                            )}
                        />
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-xl">
                        <ReactPlayer url={play} height="100%" width="100%" loop controls />
                    </div>
                )}

                <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                    <EachUtils
                        of={downloadData}
                        render={(item, index) => (
                            <Button
                                as={Link}
                                href={item.link}
                                key={index}
                                target="_blank"
                                size="md"
                                variant="ghost"
                                className="w-full"
                            >
                                <Icon name="ArrowDownToLine" size="16" />
                                <p className="text-xs">{item.label}</p>
                            </Button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Tiktok;
