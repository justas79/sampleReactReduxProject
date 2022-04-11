export interface TransactionsResponse {
	fileName: string;
	transactions: StatementTransaction[];
	success?: boolean;
	error?: string | boolean;
	errorDescription?: string;
}


export interface StatementTransaction {
	id: number;
	accountNr: string;
	effectiveDate: string;
	currency: string;
	paymentCode: string;
	paymentDescription: string;
	customerDescription: string;
	credits: number;
	valid: boolean;
	notes?: string;
	enriching?: boolean;
	lockedBy?: string;
	state?: string;
	parentTransaction?: number;
	split?: boolean;
	canSplit?: boolean;
}
