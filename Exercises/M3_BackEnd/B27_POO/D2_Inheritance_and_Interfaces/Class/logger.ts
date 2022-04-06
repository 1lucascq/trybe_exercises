interface Logger {
  log(param: string): void;
}

interface Database {
  Logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  constructor() {}
  log(param: string): void {
    console.log("CL1", param);
  }
}

class ConsoleLogger2 implements Logger {
  constructor() {}
  log(param: string): void {
    console.log("CL2", param);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  
  save(key: string, value: string): void {
    this.logger.log(`saving ${key} and ${value}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database1.save('chave 2', 'valor 2');
database1.save('chave 3', 'valor 3');