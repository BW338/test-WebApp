import React, { useEffect, useState } from 'react';
import { GetToolbarUseCase } from '../application/GetToolbarUseCase';
import { ToolbarRepositoryImpl } from '../infrastructure/ToolbarRepositoryImpl';
import ToolbarView from './ToolbarView';
import { Toolbar } from '../domain/Toolbar';

const ToolbarContainer: React.FC = () => {
    const [toolbar, setToolbar] = useState<Toolbar>({ title: '', actions: [] });
    const getToolbarUseCase = new GetToolbarUseCase(new ToolbarRepositoryImpl());

    useEffect(() => {
        const fetchData = async () => {
            const toolbarData = await getToolbarUseCase.execute();
            setToolbar(toolbarData);
        };
        fetchData();
    }, []);

    return <ToolbarView toolbar={toolbar} />;
};

export default ToolbarContainer;

