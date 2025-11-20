export type ReasonsToCommunicate<A extends unknown[] = unknown[], R = unknown> = (...args: A) => R;

export type IsValidPort<T> = T extends (...args: infer A) => infer R
    ? ReasonsToCommunicate<A, R>
    : never;

type Ports<T extends { [K in keyof T]: IsValidPort<T[K]> }> = Readonly<T>;

export type DrivingPorts<T extends { [K in keyof T]: IsValidPort<T[K]> }> = Ports<T>;

export type DrivenPorts<T extends { [K in keyof T]: IsValidPort<T[K]> }> = Ports<T>;