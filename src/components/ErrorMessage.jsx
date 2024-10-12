const ErrorMessage = ({ error }) => {
    const errorMessage = error || 'An unknown error occurred';

    return <p className="text-sm font-medium text-red-500">{errorMessage}</p>;
};

export default ErrorMessage;
