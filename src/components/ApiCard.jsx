import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';

const Ai = ({ api }) => {
    return (
        <Card key={api.id}>
            <CardBody>
                <div className="p-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-medium lg:text-xl">{api.title}</h1>
                        <Button
                            href={api.category + api.url}
                            as={Link}
                            color="primary"
                            variant="shadow"
                            size="sm"
                            showAnchorIcon
                        >
                            Use API
                        </Button>
                    </div>
                    <Divider className="my-3" />
                    <p className="text-xs font-light text-pretty opacity-60">{api.description}</p>
                </div>
            </CardBody>
        </Card>
    );
};

export default Ai;
