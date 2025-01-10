import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../common/interface/initial-state.interfce";
import { IHotel } from "./hotel.interface";
import { LoadingEnum } from "../../constants/loading.enum";


const initialState: IInitialState<IHotel> = {
    items: [],
    pagination: {},
    loading: LoadingEnum.IDLE,
    error: null
}

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},

})