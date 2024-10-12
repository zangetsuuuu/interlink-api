import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';
import Icon from '@/components/Icon';

const Result = ({ children, showResult, isCopyVisible = true }) => {
    const [textContent, setTextContent] = useState('');
    const [tooltipContent, setTooltipContent] = useState('Copy');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    useEffect(() => {
        const extractText = (node) => {
            if (typeof node === 'string') return node;
            if (Array.isArray(node)) return node.map(extractText).join('');
            if (node?.props?.children) return extractText(node.props.children);
            return '';
        };
        setTextContent(extractText(children));
        setTooltipContent('Copy');
    }, [children]);

    const handleCopyText = () => {
        navigator.clipboard.writeText(textContent);
        setTooltipContent('Copied!');
        setIsTooltipVisible(true);

        setTimeout(() => {
            setTooltipContent('Copy');
            setIsTooltipVisible(false);
        }, 2000);
    };

    if (!showResult) return null;

    return (
        <Card>
            <CardBody>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Result</h3>
                    {isCopyVisible && (
                        <Tooltip
                            showArrow={true}
                            content={tooltipContent}
                            className="text-xs"
                            placement="left"
                            closeDelay={0}
                            isOpen={isTooltipVisible ? true : undefined}
                        >
                            <Button
                                isIconOnly
                                isDisabled={!textContent}
                                size="sm"
                                color="default"
                                variant="light"
                                aria-label="Copy"
                                onClick={handleCopyText}
                            >
                                <Icon name="Copy" size="16" />
                            </Button>
                        </Tooltip>
                    )}
                </div>
                <Divider className="mt-2 mb-4" />
                <div className="text-sm leading-relaxed text-pretty">{children}</div>
            </CardBody>
        </Card>
    );
};

export default Result;
