import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./dataSlice";

export default configureStore({ reducer: { data: DataSlice } });
