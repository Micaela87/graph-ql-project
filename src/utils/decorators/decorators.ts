import "reflect-metadata";

export function Controller(path: string): Function {
    
    return function(target: Function): void {
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function Get(path: string): Function {
    return function(target: Function): void {

        let result = Reflect.getMetadata(path, target);
        console.log(result);

        console.log(target);
        console.log(target.prototype);
    }
}

export function Post(path: string): Function {
    return function(target: Function): void {

        let result = Reflect.getMetadata(path, target);
        console.log(result);

        console.log(target);
        console.log(target.prototype);
    }
}

export function Put(path: string): Function {
    return function(target: Function): void {

        let result = Reflect.getMetadata(path, target);
        console.log(result);

        console.log(target);
        console.log(target.prototype);
    }
}

export function Delete(path: string): Function {
    return function(target: Function): void {

        let result = Reflect.getMetadata(path, target);
        console.log(result);

        console.log(target);
        console.log(target.prototype);
    }
}

export function Resolver(): Function {
    return function(target: any): void {
        console.log(target);
        console.log(target.prototype);
    }
}

export function Query(path: string): Function {
    return function(target: any): void {

        let result = Reflect.getMetadata(path, target);
        console.log(result);

        console.log(target);
        console.log(target.prototype);
    }
}