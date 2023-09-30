import api, { resResult } from "./api";

export const END_POINTS = {
  LOGIN: () => "/auth/login",
  REGISTER: () => "/auth/register",
  BANK: () => "/banks",
  BANKBYID: () => "/banks:bankId",
  STATUS: () => "/status",
  STATUSBYID: () => "/status:statusId",
  LOANTYPE: () => "/loanTypes",
  LOANTYPEBYID: () => "/loanTypes:loanTypeId",
  CUSTOMER: () => "/customers",
  CUSTOMERBYID: () => "/customers:customerId",
  USER: () => "/users",
  USERBYID: () => "/users:userId",
  USERROLE: () => "/usersRole",
  USERROLEBYID: () => "/usersRole:userRoleId",
  BANKPORTFOLIO: () => "/bankPortfolio",
  BANKPORTFOLIOBYID: () => "/bankPortfolio:bankPortfolioId",
  DATASET: () => "/dataSets",
  DATASETBYID: () => "/dataSets:dataSetId",
  LEAD: () => "/leads",
  LEADBYID: () => "/leads:leadId",
  CAMPAIGN: () => "/campagins",
  CAMPAIGNBYID: () => "/campagins:campaignId",
  DATASETBUCKET: () => "/dataSetBucket",
  DATASETBUCKETBYID: () => "/dataSetBucket:dataSetBucketId",
  BUCKET: () => "/bucket",
  BUCKETBYID: () => "/bucket:bucketId",
};


