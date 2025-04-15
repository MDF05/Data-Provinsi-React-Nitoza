export interface Provinsi {
    id : string,
    name : string,
}


export interface ProvinsiTypes {
    Provinsi : Provinsi[];
    counter : number 
}


export interface ProvinsiDTO {
    loading : boolean
    data : Provinsi[]
}