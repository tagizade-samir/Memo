import { observable, action, computed, makeAutoObservable } from 'mobx';

export class CounterStore {
    @observable
    count: number;

    constructor() {
        makeAutoObservable(this);
        this.count = 0;
    }

    @action
    increment = () => {
        this.count++;
    };

    @action
    decrement = () => {
        this.count--;
    };

    @computed
    get doubleCount() {
        return this.count * 2;
    }
}
