declare module 'js-cookie';
declare module 'rx' {
  export class BehaviorSubject<T> {
    constructor(initialValue: T);
    getValue(): T;
    next(value: T): void;
    subscribe(onNext: (value: T) => void): void;
  }
}
