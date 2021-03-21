import { createContext, useContext } from 'react';
import { AppStore, IAppStore } from './stores/AppStore';
import { ILocalizationStore, LocalizationStore } from './stores/LocalizationStore';

export interface IMobxStore {
    AppStore: IAppStore;
    LocalizationStore: ILocalizationStore;
}

export const MobxStore: IMobxStore = {
    AppStore: new AppStore(),
    LocalizationStore: new LocalizationStore(),
};

export const StoreContext = createContext(MobxStore);

export const useStore = () => {
    return useContext(StoreContext);
};
