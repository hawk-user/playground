import {
    HttpController,
    type CommonControllerSendText,
    type HttpStatusCode
} from '@libs/infra';

import { type Response, type Request } from 'express';

export abstract class ExpressController extends HttpController<Request, Response> {

     public sendText: CommonControllerSendText<Response, HttpStatusCode> = (
        response: Response,
        code: HttpStatusCode,
        message: string
    ) =>  response.status(code).send(message);

}