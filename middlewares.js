import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Leetube';
    res.locals.routes = routes;
    res.locals.user = {
        isAutenticated: true,
        id: 1,
    }
    next();
};