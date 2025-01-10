import { LoadingEnum } from "../../constants/loading.enum";
import { IPagination } from "./pagination.interface";


export interface IInitialState<T> {
    items?:T[],
    item?: T,
    pagination: IPagination,
    loading: LoadingEnum,
    error: string | null
}