import type { Models } from "node-appwrite";

export type ExecutorExchangeFields = {
    status: ExecutorStatus;
    result?: string;
    duration?: number;
    retries?: number;
};

export type ExecutorExchangeDoc = Models.Document & ExecutorExchangeFields;

export type ExecutorOptions = {
    executionTimeLimit?: number;
    retry?: number;
};

export type ExecutorPayload = {
    endpoint: string;
    exchangeDocId: ExecutorExchangeDoc['$id'];
    fetchInit: RequestInit;
    fetchBody?: any;
    options?: ExecutorOptions;
};

export type ExecutorHttpError = Error & {
    cause: {
        status: number;
        statusText: string;
        responseBody: string;
    }
}

export const ExecutorProgressStatuses = ['pending', 'running'] as const;
export const ExecutorFinishedStatuses = ['success', 'failed', 'timeout'] as const;
export type ExecutorProgressStatus = typeof ExecutorProgressStatuses[number];
export type ExecutorFinishedStatus = typeof ExecutorFinishedStatuses[number];

export type ExecutorStatus = ExecutorProgressStatus | ExecutorFinishedStatus;

