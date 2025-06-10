export function expectType(type: string, value: any, message: string) {
  if(typeof value !== type){
    throw new TypeError(message ?? `Expected ${type} but got ${typeof value}`);
  }
}

export function expectString(value: any, message: string){
  expectType("string", value, message);
}

export function expectNumber(value: any, message: string){
  expectType("number", value, message);
}

export function expectBoolean(value: any, message: string){
  expectType("boolean", value, message);
}