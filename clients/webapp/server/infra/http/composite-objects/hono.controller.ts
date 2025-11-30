import {
    HttpResponseLayer,
    type CommonControllerSendText,
    type LiteralHttpStatus
} from '@libs/infra';

import { type Context } from 'hono';

export abstract class HonoController extends HttpResponseLayer<Context> {

     public sendText: CommonControllerSendText<Context, LiteralHttpStatus> = (
        response: Context,
        code: LiteralHttpStatus,
        message: string
    ) =>  response.text(message, code);

}