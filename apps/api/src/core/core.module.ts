import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from '@nestjs/core';

import { DmcLoggerInterceptor } from './interceptors/logger-interceptor';
import { AuthGuard } from './guards/AuthGuard';
import { MongooseExceptionFilter } from './filters/mongoose-exception.filter';

@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: DmcLoggerInterceptor },
    AuthGuard,
    MongooseExceptionFilter
  ],
  exports: [ AuthGuard, MongooseExceptionFilter ]
})
export class CoreModule {}
