import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { AppDispatch, RootState } from "@/app/store";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
