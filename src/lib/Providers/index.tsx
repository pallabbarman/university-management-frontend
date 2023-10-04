'use client';

import store from '@/redux/app';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from '../AntdRegistry';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
    );
};

export default Providers;
