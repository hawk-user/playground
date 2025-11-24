export class Emit<K> {

    public readonly isEmitted = true;
    public readonly isInterrupted = false;
    public readonly value: K;

    constructor(value: K) {
        this.value = value;
    }

}

export class Interrupt<Cause = 'unprovidedCause'> {

    public readonly isEmitted = false;   
    public readonly isInterrupted = true;
    public readonly cause: Cause;

    constructor(cause?: Cause) {
        this.cause = cause ?? 'unprovidedCause' as Cause;
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