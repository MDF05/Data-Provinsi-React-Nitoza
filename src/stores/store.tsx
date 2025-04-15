import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import provinsiReducer from "./Provinsi/provinsi.slice";
import kabKotaReducer from "./kabkota/kabkota.slice";

export const store = configureStore({
  reducer: {
    provinsi: provinsiReducer,
    kabkota: kabKotaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
