export class Emit<K> {

    public readonly isEmitted = true;
    public readonly isInterrupted = false;
    private readonly value: K;

    constructor(value: K) {
        this.value = value;
    }

    retrieveValue (): K {
        return this.value;
    }

}

export class Interrupt<Cause = 'unprovidedCause'> {

    public readonly isEmitted = false;   
    public readonly isInterrupted = true;
    private readonly cause: Cause;

    constructor(cause?: Cause) {
        this.cause = cause ?? 'unprovidedCause' as Cause;
    }

    retrieveCause (): Cause {
        return this.cause;
    }

}

export class Result {

    public static emit<U>(value: U): Emit<U> {
        return new Emit(value);
    }

    public static interrupt<Q = undefined>(description?: Q): Interrupt<Q> {
        return new Interrupt(description);
    }

}

export type EmitOrInterrupt<E, I = 'unprovidedCause'> = Emit<E> | Interrupt<I>;
export type EmitOr<E, A> = Emit<E> | A;