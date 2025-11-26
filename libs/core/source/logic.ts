import { 
    type IsValidPort,
    type Port,
} from './communication';

export interface Logic<
    E extends { [K in keyof E]: IsValidPort<E[K]> },
    R extends { [K in keyof R]: IsValidPort<R[K]> },
    T = void,
> {

    execute(
        exposed?: Port<E>,
        required?: Port<R>
    ): Promise<T> | T;
    
}