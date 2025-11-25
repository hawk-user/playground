import { 
    type CommonController
} from '@libs/infra/contracts';

import { type Context } from 'hono';

const INTERNAL = 500;

type HTTPStatusCode = typeof INTERNAL;

export abstract class BaseController implements CommonController<
    Context,
    HTTPStatusCode
> {

    protected abstract executeImpl (response: Context): Promise<void>;

    public async execute(response: Context): Promise<void> {
        try {
            await this.executeImpl(response);
        } catch (error: unknown) {
            this.sendText(response, INTERNAL, String(error));
        }
    }

    public sendHtml (
        response: Context,
        html: string
    ) {
        return response.html(html);
    } 

    public sendText (
        response: Context,
        code: HTTPStatusCode,
        message: string
    ) {
        return response.text(message, code);
    }

}