import {Request, Response} from "express";

export class Launches {

    public route(app): void {
        app.route('/home')
        .get((req: Request, res: Response) => {
            res.status(200).send({message: 'SUCCESS'})
        })
    }
}