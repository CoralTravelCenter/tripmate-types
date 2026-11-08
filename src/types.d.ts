import { Models } from "node-appwrite";

export type ExecutorPayload = {
    brandControllerAction: string;
};

export type ExecutorOptions = {

};

export type ExecutorExchangeFields = {
    result: string;
};

export type ExecutorExchangeDoc = Models.Document & ExecutorExchangeFields;
