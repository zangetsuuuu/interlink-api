import { useInputHandler } from '@/hooks';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Spinner } from '@nextui-org/spinner';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MetaTags from '@/components/MetaTags';
import Layout from '@/components/Layout';
import Content from '@/components/Content';
import Result from '@/components/Result';
import Icon from '@/components/Icon';
import ErrorMessage from '@/components/ErrorMessage';

const Ai = ({ title, apiUrl, apiProvider }) => {
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
            <MetaTags
                title={title}
                description={`Get AI results from ${title} API by ${apiProvider}.`}
            />
            <Layout>
                <Content title={title}>
                    <div className="flex items-center mb-4 space-x-2">
                        <Input
                            isClearable
                            isDisabled={loading}
                            autoComplete="off"
                            spellCheck="false"
                            placeholder="Write something..."
                            aria-label="Write something..."
                            className="flex-grow"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onClear={handleClearInput}
                        />
                        <Button
                            isIconOnly
                            isDisabled={loading || !inputValue.trim()}
                            color="default"
                            onClick={handleButtonClick}
                            aria-label="Send"
                        >
                            <Icon name="ArrowUp" />
                        </Button>
                    </div>

                    <Result showResult={showResult}>
                        {loading && <Spinner color="default" aria-label="Loading..." />}
                        {error && <ErrorMessage error={error} />}
                        {!loading && data && (
                            <Markdown remarkPlugins={[remarkGfm]}>{data.result}</Markdown>
                        )}
                    </Result>
                </Content>
            </Layout>
        </>
    );
};

export default Ai;
