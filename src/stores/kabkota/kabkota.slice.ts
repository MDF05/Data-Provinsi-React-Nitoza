import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getKabKota } from "./kabkota.async";
import { KabKota, KabKotaDto } from "@/DTO/KabKota.dto";


const initialState: KabKotaDto = {
  loading: false ,
  data: []
};

const kabKota = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
    .addCase(getKabKota.fulfilled, (state, action: PayloadAction<KabKota[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getKabKota.pending, (state) => {
        state.loading = true;
      })
      .addCase(getKabKota.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default kabKota.reducer;