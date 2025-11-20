import { 
    type IsValidPort,
    type DrivenPorts,
    type DrivingPorts
} from './communication';

export interface Logic<
    R,
    D extends { [K in keyof D]: IsValidPort<D[K]> },
    I extends { [K in keyof I]: IsValidPort<I[K]> }
> {

    execute(
        driving: DrivingPorts<D>,
        driven: DrivenPorts<I>
    ): Promise<R> | R;
    
}