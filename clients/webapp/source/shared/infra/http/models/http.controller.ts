import { 
    type CommonController,
    type Message,
    type Text
} from '@shared/infra/common/models';

import { type ReasonsToCommunicate } from '@shared/core';

interface HttpProcessor {
    ok: ReasonsToCommunicate<[message?: Message<unknown>], this>;
    send: ReasonsToCommunicate<[code: number, message: Message<unknown>], this>;
    sendText: ReasonsToCommunicate<[message: Message<string>], this>;
};

export abstract class HttpController<Y = void> implements CommonController<HttpProcessor> {

    protected abstract executeImpl (
        driving: HttpProcessor,
    ): Promise<Y>;

    public async execute(
        driving: HttpProcessor,
    ): Promise<void> {
        try {
            await this.executeImpl(driving);
        } catch (error: unknown) {
            this.internal(driving, String(error));
        }
    }

    public message<T> (
        driving: HttpProcessor,
        code: number,
        message: Message<T>
    ): HttpProcessor {  
        return driving.send(code, message);
    }

    public textResponse (
        driving: HttpProcessor,
        message: Text
    ): HttpProcessor {
        return driving.sendText(message);
    }

    public success<R>(
        driving: HttpProcessor,
        message?: Message<R>
    ): HttpProcessor {
        return driving.ok(message);
    }

    public external (
        driving: HttpProcessor,
        message: Text,
    ): HttpProcessor {
        return driving.send(400, message);
    }

    public unreachable (
        driving: HttpProcessor,
        message: Text,
    ): HttpProcessor {
        return driving.send(404, message);
    }

    public internal (
        driving: HttpProcessor,
        message: Text,
    ): HttpProcessor {
        return driving.send(500, message);
    }

}