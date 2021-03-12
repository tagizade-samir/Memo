import * as React from 'react';
import { MobxStore, StoreContext } from './modules/mobx';
import RootNavigation from './modules/navigation';

const App = () => {
    return (
        <StoreContext.Provider value={MobxStore}>
            <RootNavigation />
        </StoreContext.Provider>
    );
};

export default App;
