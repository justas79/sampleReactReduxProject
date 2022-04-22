import * as rax from 'retry-axios';
import {TransactionsResponse} from "./TransactionsResponse";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export const getHttpTransactions = (
	statementId: string,
	rangeFrom: string,
	rangeTo: string,
	company: string
): Promise<AxiosResponse<TransactionsResponse>> => {
	return filesApi.get(`listTransactions/${statementId}`);
};

const makeConfig = (baseSuffix?: string, config?: Partial<AxiosRequestConfig>): AxiosRequestConfig => ({
	baseURL: `${baseSuffix}`,
	timeout: 60000,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'x-requested-with': 'axios',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Methods': 'GET,PUT,POST',
	},
	...config,
});

function configurableApiClient(baseSuffix?: string, config?: Partial<AxiosRequestConfig>): AxiosInstance {
	const api = axios.create(makeConfig(baseSuffix, config));
	rax.attach(api);
	api.interceptors.request.use((requestConfig) => {
		return requestConfig;
	});
	return api;
}

export const filesApi = configurableApiClient(process.env.REACT_APP_FILES_API);
