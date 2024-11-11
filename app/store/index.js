import { configureStore } from '@reduxjs/toolkit'
import dataSlice from "./dataSlice";
import docSelectSlice from "./docSelectSlice"
import searchItemsSlice from './searchItemsSlice';

export default configureStore({
  reducer: {
    data: dataSlice,
    docSelect: docSelectSlice,
    searchItems: searchItemsSlice
  }
})