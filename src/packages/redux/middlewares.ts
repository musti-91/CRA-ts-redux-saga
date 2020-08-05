import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const logger: any = createLogger({
  collapsed: true,
  level: 'info',
});

const devMiddlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development' && typeof window !== undefined) {
  devMiddlewares.push(logger);
}

export const middlewares = devMiddlewares;
