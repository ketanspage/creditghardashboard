import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table";
import ActionRender from "./ActionRender";
import UploadedDateRender from "./UploadedDateRender";

import Loader from "../../components/common/Loader";

import { getDataSets } from "./slice/leadDataSlice";
import { getBankPortfolios } from "../BankPortfolio/slice/bankPortfolioSlice";
import { filterOptionToOperatorMap } from "../../constants";

const LeadData = () => {
  const dispatch = useDispatch();
  const { bankPortfolios, loadingBankPortfolio } = useSelector(
    (state) => state.bankPortfolio
  );
  const { dataSets, loading } = useSelector((state) => state.leadData);
  const [filter, setFilter] = React.useState({});
  const [pageValue, setPageValue] = React.useState({
    page: 1,
    limit: 10,
  });

  React.useEffect(() => {
    const data = {
      id: {
        operator: "eq",
        value: 1,
      },
      ...filter,
      page: pageValue.page,
      limit: pageValue.limit,
    };
    dispatch(getBankPortfolios(data));
    dispatch(getDataSets());
  }, [dispatch, pageValue]);

  const leadTableHeader = [
    {
      field: "id",
      headerName: "ID",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "text",
    },
    {
      field: "fileName",
      headerName: "File Name",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "text",
    },
    {
      field: "uploadedDate",
      headerName: "Uploaded Date",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "date",
      cellRenderer: UploadedDateRender,
    },
    {
      field: "statusName",
      headerName: "Status",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "text",
    },
    {
      field: "outstanding",
      headerName: "Total Outstanding",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "number",
    },
    {
      field: "recoveredAmount",
      headerName: "Recovered Amount",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "number",
    },
    {
      field: "action",
      headerName: "Action",
      isPinned: false,
      filterable: false,
      sortable: false,
      cellRenderer: (props) => <ActionRender rowData={props.rowData} />,
    },
  ];

  const serverSideFilterObject = (valFilter) => {
    const outputArray = Object.entries(valFilter).map(([key, value]) => {
      const {
        filterType,
        textValue,
        valueFrom,
        valueTo,
        fromDateValue,
        toDateValue,
      } = value;

      const operator = filterOptionToOperatorMap[filterType] || "";
      let filterValue = null;
      if (
        filterType === "inRange" &&
        valueFrom !== undefined &&
        valueTo !== undefined
      ) {
        filterValue = {
          operator: "between",
          value: [Number(valueFrom), Number(valueTo)],
        };
      } else if (
        fromDateValue !== undefined &&
        toDateValue !== undefined &&
        fromDateValue.length > 0 &&
        toDateValue.length > 0
      ) {
        filterValue = {
          operator: "between",
          value: [fromDateValue, toDateValue],
        };
      } else {
        if (valueFrom !== undefined) {
          filterValue = {
            operator,
            value: Number(valueFrom),
          };
        } else if (textValue !== undefined && textValue.length > 0) {
          filterValue = {
            operator,
            value: textValue,
          };
        } else if (
          fromDateValue !== undefined &&
          fromDateValue.toString().length > 0
        ) {
          filterValue = {
            operator,
            value: new Date(fromDateValue).toISOString(),
          };
        }
      }
      return {
        [key]: filterValue,
      };
    });

    let filterObj = {};
    if (outputArray.length > 0) {
      filterObj = {
        and: { operator: filterOptionToOperatorMap.and, value: outputArray },
      };
    }
    setFilter(filterObj);
  };

  const rowData = React.useMemo(() => {
    if (Object.keys(dataSets).length > 0 && dataSets.rows.length > 0) {
      return dataSets.rows.reduce((acc, row) => {
        const newRow = { ...row };
        newRow["statusName"] = row?.status.status;
        acc.push(newRow);
        return acc;
      }, []);
    }
    return [];
  }, [dataSets]);

  const totalCount = React.useMemo(() => {
    if (Object.keys(dataSets).length > 0) {
      return dataSets.count;
    }
    return 0;
  }, [dataSets]);

  const serverSidePagination = (value) => {
    setPageValue({ page: value.page, limit: value.pageSize });
  };

  return (
    <div className="container ">
      {loadingBankPortfolio && <Loader />}
      {!loadingBankPortfolio &&
        Object.keys(bankPortfolios).length > 0 &&
        bankPortfolios.rows.length > 0 && (
          <>
            <div className="p-2 flex flex-row items-center ">
              <h1 className="text-2xl font-bold">
                {bankPortfolios.rows[0]?.portfolioType?.name}
              </h1>
              <h2 className="text-xl pl-5 font-medium ">
                {bankPortfolios.rows[0]?.bank?.name}
              </h2>
            </div>
          </>
        )}
      {!loadingBankPortfolio && Object.keys(dataSets).length > 0 && (
        <div className="shadow-xl  mt-10 p-6 bg-white   ">
          <Table
            headers={leadTableHeader}
            data={rowData}
            pageSize={[10, 25, 50]}
            count={totalCount}
            serverSideFilterObject={serverSideFilterObject}
            serverSidePagination={serverSidePagination}
            isLoading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default LeadData;
