import { 
    type IsValidPort,
    type Port,
} from './communication';

export interface Logic<
    Result,
    Driving extends { [K in keyof Driving]: IsValidPort<Driving[K]> },
    Driven extends { [K in keyof Driven]: IsValidPort<Driven[K]> } = undefined
> {

    execute(
        driving: Port<Driving>,
        driven?: Port<Driven>
    ): Promise<Result> | Result;
    
}