import { configureStore } from '@reduxjs/toolkit'
import dataSlice from "./dataSlice";
import docSelectSlice from "./docSelectSlice"

export default configureStore({
  reducer: {
    data: dataSlice,
    docSelect: docSelectSlice
  }
})