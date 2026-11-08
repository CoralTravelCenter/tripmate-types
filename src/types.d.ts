import { Models } from "node-appwrite";

export type ExecutorPayload = {
    endpoint: string;
    fetchInit: RequestInit;
};

export type ExecutorOptions = {

};

export type ExecutorExchangeFields = {
    result: string;
};

export type ExecutorExchangeDoc = Models.Document & ExecutorExchangeFields;
