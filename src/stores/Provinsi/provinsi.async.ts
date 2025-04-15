import { createAsyncThunk } from "@reduxjs/toolkit";
import {  ProvinsiTypes } from "@/DTO/provinsi.dto";
import { api } from "../../lib/api";



export const getProvinsi = createAsyncThunk<ProvinsiTypes, number >("get/provinsi", async (counter, thunkApi) => {
  try {
    const response = await api.get("/provinces.json");

    return thunkApi.fulfillWithValue({Provinsi : response.data, counter});
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});



  

  