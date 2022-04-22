import { ActionType } from 'typesafe-actions';
import {setTransactions, startTransactions} from "./transactionsSlice";
import {TransactionsResponse } from "./TransactionsResponse";
import { call, ForkEffect, put, select, takeLeading } from 'redux-saga/effects';
import {getHttpTransactions} from "./transactionsApi";

export function* loadTransactionsSaga(action: ActionType<typeof startTransactions>): Generator<unknown, void, { data: TransactionsResponse }> {
	try {
		yield startTransactions(action.payload.loading);

		const { data } = yield call(getHttpTransactions, action.payload.statementId, action.payload.rangeFrom, action.payload.rangeto, action.payload.company);
		yield put(setTransactions(data));


	} catch (e: any) {

	}
}

export default function* transactionsSaga(): Generator<ForkEffect<any>> {
	yield takeLeading(startTransactions, loadTransactionsSaga);
}
