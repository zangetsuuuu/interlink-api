import { Children } from 'react';

const EachUtils = ({ of, render }) => {
    const items = of || [];

    if (items.length === 0) {
        console.error("EachUtils: 'of' prop is empty");
        return null;
    }

    if (typeof render !== 'function') {
        console.error("EachUtils: 'render' prop is not a function");
        return null;
    }

    return Children.toArray(of.map((item, index) => render(item, index)));
};

export default EachUtils;
