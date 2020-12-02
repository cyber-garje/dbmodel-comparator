import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from '@nestjs/core';

import { DmcLoggingInterceptor } from './interceptors/logging-interceptor';

@Module({
    providers: [ 
        { provide: APP_INTERCEPTOR, useClass: DmcLoggingInterceptor }
    ]
})
export class CoreModule {}