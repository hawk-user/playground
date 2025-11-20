import { 
    AgnosticController,
    type Message,
    type Text,
    type DrivingFlow
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

    protected message<T> (
        drivingFlow: DrivingFlow<T>,
        code: HttpCode,
        message: Message<T>
    ): DrivingFlow<T> {  
        return drivingFlow
            .withStatusCode(code)
            .respondWithMessage(message);
    }

    protected respondWithStatus<T> (
        drivingFlow: DrivingFlow<T>,
        code: HttpCode,
    ): DrivingFlow<T> {
        return drivingFlow.withStatusCode(code);
    }

    protected textResponse (
        drivingFlow: DrivingFlow,
        code: HttpCode,
        message: Text
    ): DrivingFlow {
        return drivingFlow
            .withStatusCode(code)
            .respondWithText(message);
    }

    protected success<R>(
        drivingFlow: DrivingFlow<R>,
        message?: Message<R>
    ): DrivingFlow<R> {
        return message
            ? this.message(drivingFlow, okCode, message)
            : this.respondWithStatus(drivingFlow, okCode);
    }

    protected external (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow {
        return this.textResponse(drivingFlow, clientErrCode, message);
    }

    protected unreachable (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow {
        return this.textResponse(drivingFlow, notFoundCode, message);
    }

    protected internal (
        drivingFlow: DrivingFlow,
        message: Text,
    ): DrivingFlow {
        return this.textResponse(
            drivingFlow,
            internalErrCode,
            message
        );
    }

}