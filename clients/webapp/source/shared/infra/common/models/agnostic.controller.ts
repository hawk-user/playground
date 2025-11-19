type Message<W> = Readonly<W>;
type TextMessage = Message<string>;

export abstract class Outbound {

    abstract useFallbackCode <K extends number>(): Readonly<K>;
    abstract respondWithMessage<Q>(message: Message<Q>): this;
    abstract respondWithText(text: Message<string>): this;
    abstract withStatusCode<F extends number>(code: F): this;   
}


export abstract class AgnosticController<Y = void> {

    protected abstract executeImpl(
        outbound: Outbound,
    ): Promise<Y>;

    public async execute(
        outbound: Outbound,
    ): Promise<void> {
        try {
            await this.executeImpl(outbound);
        } catch (error: unknown) {
            this.err(
                outbound, 
                outbound.useFallbackCode(),
                String(error)
            );
        }
    }

    protected abstract message<A extends number, X>(
        outbound: Outbound,
        statusCode: A,
        message: Message<X>
    ): Outbound;

    protected abstract respondWithStatus<A extends number>(
        outbound: Outbound,
        statusCode: A,
    ): Outbound;

    protected abstract textResponse<A extends number>(
        outbound: Outbound,
        statusCode: A,
        message: string
    ): Outbound;

    protected abstract ok<A extends number, R>(
        outbound: Outbound,
        statusCode: A,
        message?: Message<R>
    ): Outbound;

    protected abstract err<A extends number>(
        outbound: Outbound,
        statusCode: A,
        message: TextMessage,
    ): Outbound;

}