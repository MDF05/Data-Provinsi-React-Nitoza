import { KabKota } from "@/DTO/KabKota.dto";
import { api } from "../../lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getKabKota = createAsyncThunk<KabKota[], number >("get/KabKota", async (code, thunkApi) => {
    try {
      const response = await api.get(`/regencies/${code}.json`);
  
      return thunkApi.fulfillWithValue(response.data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  });
