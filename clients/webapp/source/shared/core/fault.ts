import { Interrupt } from './result'

abstract class BaseFault {

    public readonly details: string;

    constructor (details: string) {
        this.details = details;
    }
}

export class ExternalFault extends Interrupt<BaseFault> {

    public constructor (details?: string) {
        const fallbackDetails = 'The execution was interrupted due to an external cause.'
        super({ details: details ? details : fallbackDetails });
    }

    public static create (details?: string): ExternalFault {
        return new ExternalFault(details);
    }

}

export class InternalFault extends Interrupt<BaseFault> {

    public constructor (details?: string) {
        const fallbackDetails = 'The execution was interrupted due to an internal cause.'
        super({ details: details ? details : fallbackDetails });
    }

    public static create (details?: string): InternalFault {
        return new InternalFault(details);
    }

}

export class UnreacheableFault extends Interrupt<BaseFault> {

    public constructor (details?: string) {
        const fallbackDetails = 'The execution was interrupted due to an unreachable element.'
        super({ details: details ? details : fallbackDetails });
    }

    public static create (details?: string): ExternalFault {
        return new ExternalFault(details);
    }

}

export type Fault = ExternalFault | InternalFault | UnreacheableFault