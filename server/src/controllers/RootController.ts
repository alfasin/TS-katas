import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";


function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        return next();
    }

    res.status((403)).send('Not Permitted');
}

@controller('')
class RootController {

    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.send(`
                    <div>
                        <div>
                            You are logged In
                        </div>
                        <a href="/logout" >Logout</a>
                    </div>
                `);
        } else {
            res.send(`    
                <div>
                    <div>
                        You are NOT logged In
                    </div>
                    <a href="/login" >Login</a>
                </div>    
                `);
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('welcome to protected route');
    }

}
