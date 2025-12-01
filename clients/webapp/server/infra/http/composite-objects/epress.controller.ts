import {
    HttpResponseLayer,
    type CommonControllerSendText,
    type LiteralHttpStatus
} from '@libs/infra';

import { type Response } from 'express';

export abstract class ExpressController extends HttpResponseLayer<Response> {

     public sendText: CommonControllerSendText<Response, LiteralHttpStatus> = (
        response: Response,
        code: LiteralHttpStatus,
        message: string
    ) =>  response.status(code).send(message);

}