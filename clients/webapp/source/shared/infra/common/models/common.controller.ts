export type Message<T> = Readonly<T>;
export type Text = Message<string>;

export interface CommonController<P> {
    
    message<T>(
        driving: P,
        statusCode: number,
        message: Message<T>
    ): P;

    textResponse (
        driving: P,
        message: Text
    ): P;

    success<T> (
        driving: P,
        message?: Message<T>
    ): P;

    unreachable (
        driving: P,
        message: Text,
    ): P;

    external (
        driving: P,
        message: Text,
    ): P;

    internal (
        driving: P,
        message: Text,
    ): P;

}