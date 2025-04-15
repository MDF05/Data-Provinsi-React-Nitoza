import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  ProvinsiDTO, ProvinsiTypes } from "@/DTO/provinsi.dto";
import { getProvinsi } from "./provinsi.async";


const initialState: ProvinsiDTO = {
  loading: false ,
  data: []
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
    .addCase(getProvinsi.fulfilled, (state, action: PayloadAction<ProvinsiTypes>) => {
        state.loading = false;
        state.data = action.payload.Provinsi.slice(0,action.payload.counter);
      })
      .addCase(getProvinsi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProvinsi.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const {  } = productSlice.actions;
export default productSlice.reducer;