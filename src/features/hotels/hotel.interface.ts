import { DefaultEntity } from "../../common/interface/default-entity.interface";


export interface IHotel extends DefaultEntity {
    id: number,
    title: string,
    description: string,
    rating: string,
    deletedAt: Date
}