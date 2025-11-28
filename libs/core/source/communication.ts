export type ReasonForBeing<A extends unknown[] = unknown[], R = unknown> = (...args: A) => R;

export type IsValidPort<T> = T extends (...args: infer A) => infer R
    ? ReasonForBeing<A, R>
    : never;

export type Port<T extends { [K in keyof T]: IsValidPort<T[K]> }> = Readonly<T>;