import { configureStore } from "@reduxjs/toolkit";
import getdata from "./GetData";
import postdata from "./PostData";

const store = configureStore({
  reducer: {
    getdata,
    postdata,
  },
});

export { store };
