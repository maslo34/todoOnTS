import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./slices/index.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
