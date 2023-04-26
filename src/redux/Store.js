import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import getdata from "./GetData";

const store = configureStore({
  reducer: {
    counter,
    getdata,
  },
});

export { store };
