import { type ReasonForBeing } from '@libs/core';

export type BaseStatusCode<T> = {
    unhandledErr: T;
}

export type CommonControllerSendText<R, J> = ReasonForBeing<
    [response: R, code: J, message: string], void
>;

export abstract class CommonController<E, R, H> {

    protected readonly statusCodes: BaseStatusCode<H>;

    abstract sendText: CommonControllerSendText<R, H>;

    protected constructor(statusCodes: BaseStatusCode<H>) {
        this.statusCodes = statusCodes;
    }

    protected abstract executeImpl (request: E, response: R): Promise<void>;
    
    public async execute(request: E, response: R): Promise<void> {
        try {
            await this.executeImpl(request, response);
        } catch (unhandledErr: unknown) {
            this.sendText (
                response,
                this.statusCodes.unhandledErr,
                String(unhandledErr)
            );
        }
    }

}