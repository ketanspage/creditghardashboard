export const ComponentType = {
  SCHEDULE_NOW: "SCHEDULE_NOW",
  SCHEDULE_LATER: "SCHEDULE_LATER",
};

export const DEFAULT_IMAGE_URL = {
  DEFAULT_PROFILE_IMAGE: "/image/user/default-user.svg",
};

export const USER_TYPE = {
  CREDIT_GHAR: "CREDIT_GHAR",
};

export const OPERATOR = {
  in: "in",
  notIn: "notIn",
  any: "any",
  and: "and",
  all: "all",
  overlap: "overlap",
  or: "or",
  like: "like",
  notLike:"notLike",
  ilike: "ilike",
  startsWith: "startsWith",
  endsWith: "endsWith",
  between: "between",
  notBetween: "notBetween",
  is: "is",
  not: "not",
  gt: "gt", // Greater than
  gte: "gte", // Greater than or equal to
  lt: "lt", // Less than
  lte: "lte", // Less than or equal to
  ne: "ne",
  col: "col",

  eq: "eq",
};

export const filterOptionToOperatorMap = {
    contains: "like",
    notContains: "notLike",
    equals: "eq",
    notEquals: "ne",
    startsWith: "startsWith",
    endsWith: "endsWith",
    blank: "is",
    notBlank: "not",
    lessThan: "lt",
    lessThanOrEqual: "lte",
    greaterThan: "gt",
    greaterThanOrEqual: "gte",
    inRange: "between", 
    and: "and",
    in: "in",
    // Add more mappings as needed
  };