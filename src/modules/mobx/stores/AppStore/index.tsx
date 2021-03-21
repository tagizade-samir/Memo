import { observable, action, makeAutoObservable } from 'mobx';
import { Utils } from 'services/utils';
import { ITheme } from 'services/utils/colors/types';

export interface IAppStore {
    theme: ITheme;
    changeTheme: Function;
}

export class AppStore implements IAppStore {
    @observable
    theme: ITheme;

    constructor() {
        makeAutoObservable(this);
        this.theme = { ...Utils.theme.light };
    }

    @action
    changeTheme = () => {
        if (this.theme.dark) {
            this.theme = { ...Utils.theme.light }
        } else {
            this.theme = { ...Utils.theme.dark }
        }
    };
}
