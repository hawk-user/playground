import { 
    type CommonController
} from '@libs/infra/common/models';

import Hono from 'hono';

const INTERNAL = 500;

type HTTPStatusCode = typeof INTERNAL;

export abstract class BaseController implements CommonController<
    Hono.Context,
    HTTPStatusCode
> {

    protected abstract executeImpl (response: Hono.Context): Promise<void>;

    public async execute(response: Hono.Context): Promise<void> {
        try {
            await this.executeImpl(response);
        } catch (error: unknown) {
            this.sendText(response, INTERNAL, String(error));
        }
    }

    public sendHtml (
        response: Hono.Context,
        html: string
    ) {
        return response.html(html);
    } 

    public sendText (
        response: Hono.Context,
        code: HTTPStatusCode,
        message: string
    ) {
        return response.text(message, code);
    }

}