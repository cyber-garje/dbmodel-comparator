import { Logger, LoggerService } from '@nestjs/common';

export class DMCLogger extends Logger implements LoggerService {

  constructor(context?: string, isTimestampEnabled?: boolean) {
    super(context, isTimestampEnabled);
  }

  static d(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [DEBUG] ${message} ${context || ''}`);
  }

  static e(message: string, trace?: string, context?: string): void {
    console.log(`${this.getTimestamp()} [ERROR] ${context ? context + ' = ' : ''}${message} ${trace || ''} `);
  }

  static i(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [INFO] ${message} ${context || ''}`);
  }

  static v(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [VERB] ${message} ${context || ''}`);
  }

  static w(message: string, context?: string): void {
    console.log(`${this.getTimestamp()} [WARN] ${message} ${context || ''}`);
  }

  private static getTimestamp = () => `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]`;
}
