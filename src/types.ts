import { Models } from "node-appwrite";

export type ExecutorExchangeFields = {
    status: ExecutorStatus;
    result?: string;
    duration?: number;
    retries?: number;
};

export type ExecutorExchangeDoc = Models.Document & ExecutorExchangeFields;

export type ExecutorOptions = {

};

export type ExecutorPayload = {
    endpoint: string;
    exchangeDocId: ExecutorExchangeDoc['$id'];
    fetchInit: RequestInit;
    options?: ExecutorOptions;
};

export const ExecutorProgressStatuses = ['pending', 'running'] as const;
export const ExecutorFinishedStatuses = ['success', 'failed', 'timeout'] as const;
export type ExecutorProgressStatus = typeof ExecutorProgressStatuses[number];
export type ExecutorFinishedStatus = typeof ExecutorFinishedStatuses[number];

export type ExecutorStatus = ExecutorProgressStatus | ExecutorFinishedStatus;

