import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/common/headerSlice";
import modalSlice from "../features/common/modalSlice";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import authSlice from "../features/user/slice/authSlice";
import bankDataSlice from "../features/BankData/slice/bankDataSlice";
import leadDataSlice from "../features/leadsData/slice/leadDataSlice";
import bankPortfolioSlice from "../features/BankPortfolio/slice/bankPortfolioSlice";
import bucketSlice from "../features/Buckets/slice/bucketSlice";

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  leadData: leadDataSlice,
  auth: authSlice,
  bank: bankDataSlice,
  bankPortfolio: bankPortfolioSlice,
  bucket : bucketSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
