export class AuthTokenError extends Error {
    constructor() {
        super('Token não autenticado!');
    }
}