import i18n from 'i18n-js';
import translations from './translations';
import { observable, action, makeAutoObservable } from 'mobx';

export interface ILocalizationStore {
    locale: string;
    setLocale: Function;
    t: Function;
}

export class LocalizationStore implements ILocalizationStore {
    @observable
    locale: string;

    constructor() {
        makeAutoObservable(this);
        i18n.fallbacks = true;
        i18n.translations = translations;
        this.locale = i18n.locale;
    }

    @action
    setLocale = (newLocale: string) => {
        this.locale = newLocale;
    };

    @action
    t = (scope: string) => {
        return i18n.t(scope, { locale: this.locale })
    };
}
