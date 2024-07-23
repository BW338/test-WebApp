import React from 'react';
import GreetingView from './GreetingView';
import { GreetingUseCase } from '../application/GreetingUseCase'; 
import { GreetingRepositoryImpl } from '../infrastructure/GreetingRepositoryImpl'; 

const GreetingContainer: React.FC = () => {
    const greetingRepository = new GreetingRepositoryImpl();
    const greetingUseCase = new GreetingUseCase(greetingRepository);
    const message = greetingUseCase.execute();

    return <GreetingView message={message} />;
};

export default GreetingContainer;
