import { Models } from "node-appwrite";

export type ExecutorPayload = {
    endpoint: string;
    fetchInit: RequestInit;
};

export type ExecutorOptions = {

};

export type ExecutorStatus = 'pending' | 'running' | 'success' | 'failed' | 'timeout';

export type ExecutorExchangeFields = {
    status: ExecutorStatus;
    result: string;
    duration?: number;
    retries?: number;
};

export type ExecutorExchangeDoc = Models.Document & ExecutorExchangeFields;
