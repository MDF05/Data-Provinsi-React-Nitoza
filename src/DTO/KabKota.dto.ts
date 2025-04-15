export interface KabKota {
    id: number,
    province_id: number,
    name: string
}



export interface KabKotaDto {
    loading : boolean,
    data : KabKota[];

}