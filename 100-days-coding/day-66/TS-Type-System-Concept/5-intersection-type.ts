type firstType = {
    name: string;
    age: number;
};

type secondType = {
    address: string;
    phone: string;
};

type CombinedType = firstType & secondType;

const person: CombinedType = {
    name: "aqsa",
    age: 23,
    address: "Dha ph-5",
    phone: "0309-1234567",

};