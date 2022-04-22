import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import transactionsSlice from "./transactionsSlice";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: combineReducers({
		paymentFilesTransactions: transactionsSlice
	}),
	middleware: [sagaMiddleware],

});

sagaMiddleware.run(sagas);
export type RootState = ReturnType<typeof store.getState>;


