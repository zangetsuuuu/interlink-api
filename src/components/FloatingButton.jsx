import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalContent,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/modal';
import Icon from '@/components/Icon';

const FloatingButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="fixed z-20 bottom-6 right-6 lg:bottom-8 lg:right-8">
            <Button isIconOnly size="lg" variant="shadow" aria-label="Info" onPress={onOpen}>
                <Icon name="Info" />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>
                        <h3 className="text-lg font-semibold">Project Information</h3>
                    </ModalHeader>
                    <ModalBody className="space-y-2 font-light">
                        <p className="text-sm">
                            This project is powered by several API providers. I want to
                            give a special thanks to <a className='underline hover:text-blue-500' href="https://nyxs.pw/">NyxAltair</a>, <a className='underline hover:text-blue-500' href="https://api.ryzendesu.vip/">Ryzen API</a>, and a few other
                            providers for making this project possible.
                        </p>
                        <p className="text-xs opacity-60">
                            Thank you for taking the time to explore this project! If you are
                            interested in contributing or diving deeper, feel free to visit the
                            GitHub repository.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            href="https://github.com/zangetsuuuu/interlink-api"
                            as={Link}
                            variant="flat"
                            className="w-full"
                            startContent={<Icon name="Github" size="16" />}
                        >
                            Github
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default FloatingButton;
