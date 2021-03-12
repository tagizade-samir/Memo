import React, { createContext, useContext } from 'react';
import { CounterStore } from './stores/CounterStore';
import { ThemeStore } from './stores/ThemeStore';

export const MobxStore = {
    counterStore: new CounterStore(),
    themeStore: new ThemeStore(),
    data: 'data',
};

export const StoreContext = createContext(MobxStore);

export const useStore = () => {
    return useContext(StoreContext);
};
