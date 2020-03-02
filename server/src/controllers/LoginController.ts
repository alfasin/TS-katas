import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {

    // error checking: make sure we annotate only 'legit' methods
    // @get('/')
    // add(a: number, b: number): number {
    //     return a + b;
    // }

    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
                </div>
                <button>Submit</button>
            </form>
        `);
    }


    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body;

        if (email === '123' && password === '456') {
            req.session = {loggedIn: true};
            return res.redirect("/")
        }
        res.status(400).send('BAD LOGIN!')

    }

    @get('/logout')
    getLogout(req: Request, res: Response): void {
        req.session = undefined;
        res.redirect('/');
    }

}
