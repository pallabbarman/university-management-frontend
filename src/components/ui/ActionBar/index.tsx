import { ReactElement, ReactNode } from 'react';

interface ActionBarProps {
    title?: string;
    children?: ReactNode | ReactElement;
}

const ActionBar = ({ title, children }: ActionBarProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ display: 'flex' }}>{children}</div>
        </div>
    );
};

export default ActionBar;
