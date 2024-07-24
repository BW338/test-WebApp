import React from 'react';
import { Toolbar } from '../domain/Toolbar';
import '../../../scss/Toolbar.scss';

interface ToolbarViewProps {
    toolbar: Toolbar;
}

const ToolbarView: React.FC<ToolbarViewProps> = ({ toolbar }) => {
    return (
        <div className="toolbar">
            <div className="logo">{toolbar.title}</div>
            <div className="navigation">
                {toolbar.actions.map((action, index) => (
                    <button key={index}>{action}</button>
                ))}
            </div>
        </div>
    );
};

export default ToolbarView;



