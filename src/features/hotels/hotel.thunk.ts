import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHotels } from "../../services/hotel.service";


export const fetchHotels = createAsyncThunk(
    'hotels/fetchHotels',
    async (_, {rejectWithValue}) => {
        try {
            const response = await getHotels();
            return response.data 
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)