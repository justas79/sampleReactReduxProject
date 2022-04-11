import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import transactionsSaga from "./transactionsSaga";

export default function* sagas(): Generator<AllEffect<ForkEffect<any>>> {

	yield all([
		fork(transactionsSaga)
	]);
}
