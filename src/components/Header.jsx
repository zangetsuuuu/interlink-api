import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import Icon from '@/components/Icon';

const Header = () => {
    return (
        <Navbar isBordered className="max-w-screen-md mx-auto bg-transparent">
            <NavbarContent justify="center" className="w-full">
                <NavbarBrand className="flex justify-center">
                    <Link
                        href="/"
                        color="foreground"
                        className="space-x-2 text-lg font-semibold lg:text-xl"
                    >
                        <Icon name="Code" />
                        <span>Interlink API</span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
