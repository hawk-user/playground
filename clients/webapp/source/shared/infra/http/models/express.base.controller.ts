import { type CommonController } from '@shared/infra/common/models';
import { type Response } from "express";

export abstract class ExpressBaseController<T> implements CommonController<Response, T> {

    protected abstract executeImpl (response: Response): Promise<void>;

    public async execute(response: Response): Promise<void> {
        try {
            await this.executeImpl(response);
        } catch (error: unknown) {
            this.send(response, 500, String(error));
        }
    }

    public sendHtml (
        reponse: Response,
        html: string
    ): Response {
        return reponse.contentType('html').end(html);
    } 

    public send (
        response: Response,
        code: number,
        message: T | string
    ): Response {
        return response.status(code).send(message);
    } 


}