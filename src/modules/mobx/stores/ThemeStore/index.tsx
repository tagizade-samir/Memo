import { observable, action, computed } from 'mobx';

export class ThemeStore {
    @observable
    theme = 'light';

    @action
    setTheme(newTheme: string) {
        this.theme = newTheme;
    }
    
    @computed
    get currentTheme() {
        return this.theme;
    }
}
