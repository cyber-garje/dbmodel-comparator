import { Catch, ExceptionFilter } from '@nestjs/common';
import { DMCLogger } from '../../common/dmc-logger';

@Catch()
export class MongooseExceptionFilter implements ExceptionFilter {
  catch(exception: string) {
    DMCLogger.e(`An error occurred:`, exception);
  }

}
