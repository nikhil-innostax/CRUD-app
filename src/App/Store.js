import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";

export default configureStore({ reducer: { data: DataSlice } });
