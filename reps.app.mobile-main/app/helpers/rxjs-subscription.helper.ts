import { Observable, Subscription } from 'rxjs';

let subscriptions: Array<Subscription> = [];
let observables: Array<any> = [];

export function addRxjsObservableToBeSubscribed(
  observable: Observable<any>,
): void {
  observables = [...observables, observable];
}

export function addRxjsSubscriber(subscription: Subscription): void {
  subscriptions = [...subscriptions, subscription];
}

export function rxjsSubscribeAll(): void {
  observables.forEach((observable) => {
    const subscription = observable.subscribe();
    addRxjsSubscriber(subscription);
  });
}

export function rxjsUnsubscribeAll(): void {
  subscriptions.forEach((subscription) => subscription.unsubscribe());
  subscriptions = [];
}
