export { 
    type IsValidPort,
    type Port,
    type ReasonForBeing
} from './communication';

export {
    ExternalFault,
    InternalFault,
    UnreacheableFault,
    type Fault
} from './fault';

export { type Logic } from './logic';

export {
    Emit,
    Interrupt,
    Result,
    type EmitOrInterrupt
} from './result';