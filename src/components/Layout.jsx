import Header from '@/components/Header';
import FloatingButton from '@/components/FloatingButton';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container max-w-screen-md px-[1.125rem] py-4 md:py-6">
                {children}
                <FloatingButton />
            </main>
        </>
    );
};

export default Layout;
