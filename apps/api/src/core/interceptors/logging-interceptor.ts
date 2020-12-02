import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class DmcLoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next
        .handle()
        .pipe(
            tap( () => console.log(`${this.getTimestamp()} ${this.formRequestLog(context)}`))
        );
    }

    private getTimestamp = () => `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]`;

    private formRequestLog = (context: ExecutionContext) => {
        const className = context.getClass().name;
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();

        return `HTTP ${req.method} ${req.url} ${className} ${req.bodyUsed || ''}`;;
    }
}
