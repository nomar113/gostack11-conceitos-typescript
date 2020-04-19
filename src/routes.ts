import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'abc',
        password: '123',
        techs: ['Node.js', 'C++', {title: 'JavaScript', experience: 100}]
    });

    return response.json({ message: 'Hello World!' });
};