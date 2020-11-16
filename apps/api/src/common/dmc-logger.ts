import { Logger, LoggerService } from '@nestjs/common';

export class DMCLogger extends Logger implements LoggerService {

  constructor(context?: string, isTimestampEnabled?: boolean) {
    super(context, isTimestampEnabled);
  }

  static debug(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [DEBUG] ${message} ${context || ''}`);
  }

  static error(message: string, trace?: string, context?: string): void {
    console.log(`${this.getTimestamp()} [ERROR] ${message} ${context || ''}`);
    console.log(`${this.getTimestamp()} [ERROR] ${trace}`);
  }

  static log(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [INFO] ${message} ${context || ''}`);
  }

  static verbose(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [VERB] ${message} ${context || ''}`);
  }

  static warn(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [WARN] ${message} ${context || ''}`);
  }

  private static getTimestamp = () => `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]`;
}
