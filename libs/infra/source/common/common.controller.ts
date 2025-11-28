import { type ReasonForBeing } from '@libs/core';

export type BaseStatusCode<T = number> = {
    unhandledErr: T;
}

export type CommonControllerSendText<R, T = number> = ReasonForBeing<
    [response: R, code: T, message: string], void
>;

export abstract class CommonController<R, T = number> {

    protected readonly statusCodes: BaseStatusCode<T>;

    abstract sendText: CommonControllerSendText<R, T>;

    protected constructor(statusCodes: BaseStatusCode<T>) {
        this.statusCodes = statusCodes;
    }

    protected abstract executeImpl (response: R): Promise<void>;
    
    public async execute(response: R): Promise<void> {
        try {
            await this.executeImpl(response);
        } catch (unhandledErr: unknown) {
            this.sendText (
                response,
                this.statusCodes.unhandledErr,
                String(unhandledErr)
            );
        }
    }

}