import { 
    AgnosticController,
    type Message,
    type Text,
    type Outbound
} from '@shared/infra/common/models';

const okCode = 200;
const clientErrCode = 400;
const notFoundCode = 404;
const internalErrCode = 500;

type HttpCode = typeof okCode
| typeof clientErrCode
| typeof notFoundCode
| typeof internalErrCode;

export abstract class HttpController<H> extends AgnosticController<H> {

    protected message<Content> (
        outbound: Outbound,
        statusCode: HttpCode,
        message: Message<Content>
    ): Outbound {  
        return outbound
            .withStatusCode(statusCode)
            .respondWithMessage(message);
    }

    protected respondWithStatus (
        outbound: Outbound,
        statusCode: HttpCode,
    ): Outbound {
        return outbound.withStatusCode(statusCode);
    }

    protected textResponse (
        outbound: Outbound,
        statusCode: HttpCode,
        message: Text
    ): Outbound {
        return outbound
            .withStatusCode(statusCode)
            .respondWithText(message);
    }

    protected ok<R>(
        outbound: Outbound,
        message?: Message<R>
    ): Outbound {
        return message
            ? this.message(outbound, 200, message)
            : this.respondWithStatus(outbound, okCode);
    }

    protected invalid (
        outbound: Outbound,
        message: Text,
    ): Outbound {
        return this.textResponse(
            outbound,
            clientErrCode,
            message
        );
    }

    protected notFound (
        outbound: Outbound,
        message: Text,
    ): Outbound {
        return this.textResponse(
            outbound,
            notFoundCode,
            message
        );
    }

    protected internal (
        outbound: Outbound,
        message: Text,
    ): Outbound {
        return this.textResponse(
            outbound,
            internalErrCode,
            message
        );
    }

}