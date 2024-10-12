import { useInputHandler } from '@/hooks';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Spinner } from '@nextui-org/spinner';
import MetaTags from '@/components/MetaTags';
import Layout from '@/components/Layout';
import Content from '@/components/Content';
import Result from '@/components/Result';
import ErrorMessage from '@/components/ErrorMessage';
import Tiktok from '@/components/downloader/Tiktok';
import Instagram from '@/components/downloader/Instagram';
import Youtube from '@/components/downloader/Youtube';

const RenderComponent = ({ title, data }) => {
    if (!title || !data) return null;

    const componentMap = {
        tiktok: <Tiktok data={data} />,
        instagram: <Instagram data={data} />,
        youtube: <Youtube data={data} />,
    };

    const platform = Object.keys(componentMap).find((key) => title.toLowerCase().includes(key));

    return platform ? (
        componentMap[platform]
    ) : (
        <p className="text-red-500">Failed to load component!</p>
    );
};

const Downloader = ({ title, apiUrl, apiProvider }) => {
    const {
        inputValue,
        data,
        loading,
        error,
        showResult,
        handleInputChange,
        handleClearInput,
        handleButtonClick,
        handleKeyDown,
    } = useInputHandler(apiUrl);

    return (
        <>
            <MetaTags title={title} description={`Get ${title} content from ${apiProvider}.`} />
            <Layout>
                <Content title={title}>
                    <div className="flex flex-col items-center mb-4 space-y-3">
                        <Input
                            isClearable
                            isDisabled={loading}
                            autoComplete="off"
                            spellCheck="false"
                            placeholder="Enter URL..."
                            aria-label="Enter URL..."
                            className="flex-grow"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onClear={handleClearInput}
                        />
                        <Button
                            isDisabled={loading || !inputValue.trim()}
                            color="default"
                            onClick={handleButtonClick}
                            aria-label="Get Content"
                            className="w-full"
                        >
                            <p className="text-sm">Get Content</p>
                        </Button>
                    </div>

                    <Result showResult={showResult} isCopyVisible={false}>
                        {loading && <Spinner color="default" aria-label="Loading..." />}
                        {error && <ErrorMessage error={error} />}
                        {!loading && data && <RenderComponent title={title} data={data} />}
                    </Result>
                </Content>
            </Layout>
        </>
    );
};

export default Downloader;
