import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
        </Helmet>
    );
};

export default MetaTags;
