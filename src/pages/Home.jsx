import { Tabs, Tab } from '@nextui-org/tabs';
import { apiList } from '@/data';
import EachUtils from '@/utils/EachUtils';
import MetaTags from '@/components/MetaTags';
import Layout from '@/components/Layout';
import ApiCard from '@/components/ApiCard';

const Home = () => {
    const renderApisByCategory = (category) => {
        return (
            <div className="space-y-4">
                <EachUtils
                    of={apiList.filter((api) => api.category === category)}
                    render={(api) => <ApiCard key={api.id} api={api} />}
                />
            </div>
        );
    };

    return (
        <>
            <MetaTags
                title="Home"
                description="Discover a wide range of APIs from various providers, including AI, Downloader, Tools, and Converter categories. Explore APIs from NyxAltair, Ryzen, and more."
            />
            <Layout>
                <div className="flex flex-col w-full">
                    <Tabs aria-label="API Categories" variant="underlined" className="mx-auto">
                        <Tab key="ai" title="AI">
                            {renderApisByCategory('ai')}
                        </Tab>
                        <Tab key="downloader" title="Downloader">
                            {renderApisByCategory('downloader')}
                        </Tab>
                        <Tab key="tools" title="Tools">
                            {renderApisByCategory('tools')}
                        </Tab>
                        <Tab key="converter" title="Converter">
                            {renderApisByCategory('converter')}
                        </Tab>
                    </Tabs>
                </div>
            </Layout>
        </>
    );
};

export default Home;
