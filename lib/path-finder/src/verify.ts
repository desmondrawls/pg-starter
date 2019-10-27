import * as process from 'process';
import {assocIn, structure, getIn, components, walk, Structure} from './index';

type DriverInfo = {
    firstName: string,
    lastName: string,
    gender: string
}

type Product = {
    price: number,
    coverage: string
}

type State = {
    driverInfo: DriverInfo,
    products: {
        low: Product,
        middle: Product,
        high: Product
    }
}

let initialState: State = {
    driverInfo: {
        firstName: '',
        lastName: '',
        gender: ''
    },
    products: {
        low: {
            price: 99,
            coverage: "not much coverage"
        },
        middle: {
            price: 150,
            coverage: "some coverage"
        },
        high: {
            price: 200,
            coverage: "lots of coverage"
        }
    }
};

let driverInfoPath: Structure<State, DriverInfo> = walk('driverInfo', structure<State>())
let path = walk('firstName', driverInfoPath);

console.log(initialState);
let derivedState = assocIn(path, initialState, 'Alice');
console.log(derivedState);

assert(() => initialState !== derivedState);
assert(() => initialState.products === derivedState.products);
assert(() => initialState.driverInfo !== derivedState.driverInfo);
assert(() => initialState.driverInfo.lastName === derivedState.driverInfo.lastName);
assert(() => 'Alice' === derivedState.driverInfo.firstName);
assert(() => 'Alice' === getIn(path, derivedState));

assert(() => {
    let strings = components(path);
    return strings.length === 2
        && 'driverInfo' === strings[0]
        && 'firstName' === strings[1];
});

console.log("Success. All tests pass.");

function assert(f: Function) {
    let r = f();
    if (!r) {
        console.error(`Failure. Expected ${f} to return truthy but was ${r}.`);
        process.exit(1);
    }
}
