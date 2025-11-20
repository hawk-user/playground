export type Message<T> = Readonly<T>;
export type Text = Message<string>;

export interface Outbound {
    useFallbackCode (): Readonly<number>;
    respondWithMessage<Content> (message: Message<Content>): this;
    respondWithText (text: Text): this;
    withStatusCode (code: number): this;   
}

export abstract class AgnosticController<Y = void> {

    protected abstract executeImpl (
        outbound: Outbound,
    ): Promise<Y>;

    public async execute(
        outbound: Outbound,
    ): Promise<void> {
        try {
            await this.executeImpl(outbound);
        } catch (error: unknown) {
            this.internal(outbound, String(error));
        }
    }

    protected abstract message<Content> (
        outbound: Outbound,
        statusCode: number,
        message: Message<Content>
    ): Outbound;

    protected abstract respondWithStatus (
        outbound: Outbound,
        statusCode: number,
    ): Outbound;

    protected abstract textResponse (
        outbound: Outbound,
        statusCode: number,
        message: Text
    ): Outbound;

    protected abstract success<Content> (
        outbound: Outbound,
        message?: Message<Content>
    ): Outbound;

    protected abstract unreachable (
        outbound: Outbound,
        message: Text,
    ): Outbound;

    protected abstract external (
        outbound: Outbound,
        message: Text,
    ): Outbound;

    protected abstract internal (
        outbound: Outbound,
        message: Text,
    ): Outbound;

}