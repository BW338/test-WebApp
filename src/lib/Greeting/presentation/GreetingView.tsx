import React from 'react';
import '../../../scss/GreetingView.scss';

interface GreetingViewProps {
    message: string;
}

const GreetingView: React.FC<GreetingViewProps> = ({ message }) => {
    return <div className="greeting">{message}</div>;
};

export default GreetingView;
