export  interface Ipassenger{
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null,
    children: null | Array<Ichlid>
}


export interface Ichlid{
     name: string;
     age: number
}