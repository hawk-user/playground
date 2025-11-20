import { type ReasonsToCommunicate } from '@shared/core';

export type Message<T> = Readonly<T>;
export type Text = Message<string>;

export interface DrivingFlow<K = Text> {
    respondWithText: ReasonsToCommunicate<[text: Text], this>;
    withStatusCode: ReasonsToCommunicate<[code: number], this>;
    respondWithMessage: ReasonsToCommunicate<[message: Message<K>], this>;
}

export abstract class AgnosticController<Y = void> {

    protected abstract executeImpl (
        drivingFlow: DrivingFlow,
    ): Promise<Y>;

    public async execute(
        drivingFlow: DrivingFlow,
    ): Promise<void> {
        try {
            await this.executeImpl(drivingFlow);
        } catch (error: unknown) {
            this.internal(drivingFlow, String(error));
        }
    }

    protected abstract message<T> (
        drivingFlow: DrivingFlow<T>,
        statusCode: number,
        message: Message<T>
    ): DrivingFlow<T>;

    protected abstract respondWithStatus<T> (
        drivingFlow: DrivingFlow<T>,
        statusCode: number,
    ): DrivingFlow<T>;

    protected abstract textResponse (
        drivingFlow: DrivingFlow,
        statusCode: number,
        message: Text
    ): DrivingFlow;

    protected abstract success<T> (
        drivingFlow: DrivingFlow,
        message?: Message<T>
    ): DrivingFlow;

    protected abstract unreachable (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow;

    protected abstract external (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow;

    protected abstract internal (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow;

}