import express from 'express';
import SwaggerUi from 'swagger-ui-express';

import {BaseError} from './config/error';
import {response} from './config/response';
import {status} from './config/response.status';
import {specs} from './config/swagger.config.js';
import {storeRouter} from './src/routes/storeRoute.js';
import {tempRouter} from './src/routes/tempRoute';
import {userRouter} from './src/routes/userRoute.js';

const app = express();
const port = 3000;

// URL-encoded 본문을 해석하기 위한 미들웨어
app.use(express.urlencoded({extended: false}));

// Swagger 문서화를 위한 미들웨어
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// 라우터 설정
app.use('/temp', tempRouter);
app.use('/user', userRouter);
app.use('/store', storeRouter);

// 404 오류를 잡아서 에러 핸들러로 전달
app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

// 에러 처리
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.data.status).send(response(err.data));
});

// 서버 시작
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
