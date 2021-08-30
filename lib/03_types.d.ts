declare let a3: 10;
declare let b: 'male' | 'female';
declare let c: any;
declare let d: unknown;
declare let e: any;
declare let f: string;
declare let g: number;
declare function fn(): void;
declare function fn2(): never;
declare let h: object;
declare let h2: {
    name: string;
    age?: number;
};
declare let h3: {
    name: string;
    [propName: string]: string;
};
declare let h4: (a: number, b: number) => number;
declare let arr: string[];
declare let arr2: Array<number>;
declare let tuple: [string, string, number];
declare enum Gender {
    Male = 0,
    Female = 1
}
declare let i: {
    name: string;
    gender: Gender;
};
declare let j: {
    name: string;
} & {
    age: number;
};
declare type myType = string;
