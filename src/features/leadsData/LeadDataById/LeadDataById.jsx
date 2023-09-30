import React, { useState } from "react";
import jsonData from "../../../data.json";
import Table from "../../../components/Table";
import Button from "../../../components/buttons/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLeadFilterByDataSetId, getLeads } from "../slice/leadDataSlice";
import { OPERATOR, filterOptionToOperatorMap } from "../../../constants";
import StatusRender from "./StatusRender";
import LoanIssuedDateRender from "./LoanIssuedDateRender";
import LoanEndDateRender from "./LoanEndDateRender";
import CustomerNameRender from "./CustomerNameRender";
import PortfolioTypeRender from "./PortfolioTypeRender";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import CreateBucket from "./CreateBucket";
import { getDataSetBuckets } from "../../Buckets/slice/bucketSlice";
import moment from "moment";

const defaultColumn = [
  {
    field: "id",
    headerName: "ID",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "text",
    cellRenderer: CustomerNameRender,
  },
  // {
  //   field: "portfolioTypeName",
  //   headerName: "Portfolio Type",
  //   isPinned: true,
  //   sortable: true,
  //   filterable: false,
  //   filterType: "selectCheckbox",
  //   cellRenderer: PortfolioTypeRender,
  // },
  // {
  //   field: "dataSetId",
  //   headerName: "Data Set Id",
  //   isPinned: true,
  //   sortable: true,
  //   filterable: true,
  //   filterType: "text",
  // },
  {
    field: "statusName",
    headerName: "Status",
    isPinned: true,
    sortable: true,
    filterable: false,
    filterType: "selectCheckbox",
    cellRenderer: StatusRender,
  },
  {
    field: "phoneNo",
    headerName: "Phone No ",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "email",
    headerName: "Email ",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "city",
    headerName: "City ",
    isPinned: true,
    sortable: true,
    filterable: false,
    filterType: "selectCheckbox",
  },
  {
    field: "state",
    headerName: "State",
    isPinned: true,
    sortable: true,
    filterable: false,
    filterType: "selectCheckbox",
  },
  {
    field: "zone",
    headerName: "Zone ",
    isPinned: true,
    sortable: true,
    filterable: false,
    filterType: "selectCheckbox",
  },
  {
    field: "outstanding",
    headerName: "Outstanding",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "number",
  },
  {
    field: "osBand",
    headerName: "Os Band ",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "number",
  },
  {
    field: "loanIssuedDate",
    headerName: "Loan Issued Date ",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "date",
    cellRenderer: LoanIssuedDateRender,
  },
  {
    field: "loanEndDate",
    headerName: "Loan End Date ",
    isPinned: true,
    sortable: true,
    filterable: true,
    filterType: "date",
    cellRenderer: LoanEndDateRender,
  },
];

const LeadDataById = ({ id }) => {
  const { leadCardByIdData } = jsonData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState({});
  const [columns, setColumns] = React.useState(defaultColumn);
  const { leads, loadingLeads, dataSets, leadFilter } = useSelector(
    (state) => state.leadData
  );
  const { dataSetBuckets } = useSelector((state) => state.bucket);
  const [pageValue, setPageValue] = React.useState({
    page: 1,
    limit: 10,
  });

  const updateFilterInColumns = React.useCallback(() => {
    let updatedColumns = [...columns];
    updatedColumns = updatedColumns.map((column) => {
      if (column.field === "statusName" && leadFilter?.statusFilter) {
        return {
          ...column,
          filterParams: {
            options: leadFilter?.statusFilter.map((status) => ({
              label: status["statuses.status"],
              statusId: status?.statusId,
            })),
          },
          filterable: true,
        };
      } else if (
        column.field === "portfolioTypeName" &&
        leadFilter?.portfolioTypeFilter
      ) {
        return {
          ...column,
          filterParams: {
            options: leadFilter?.portfolioTypeFilter.map((filter) => ({
              label: filter["portfolioTypes.name"],
              portfolioTypeId: filter?.portfolioTypeId,
            })),
          },
          filterable: true,
        };
      } else if (column.field === "state" && leadFilter?.stateFilter) {
        return {
          ...column,
          filterParams: {
            options: leadFilter?.stateFilter.map((filter) => filter?.state),
          },
          filterable: true,
        };
      } else if (column.field === "city" && leadFilter?.cityFilter) {
        return {
          ...column,
          filterParams: {
            options: leadFilter?.cityFilter.map((filter) => filter?.city),
          },
          filterable: true,
        };
      } else if (column.field === "zone" && leadFilter?.zoneFilter) {
        return {
          ...column,
          filterParams: {
            options: leadFilter?.zoneFilter.map((filter) => filter?.zone),
          },
          filterable: true,
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  }, [columns, leadFilter]);

  React.useEffect(() => {
    updateFilterInColumns();
  }, [leadFilter]);

  const getLeadDataByDataSet = React.useCallback(() => {
    const payload = {
      dataSetId: {
        operator: OPERATOR.eq,
        value: id,
      },
      ...filter,
      page: pageValue.page,
      limit: pageValue.limit,
    };
    dispatch(getLeads(payload));
  }, [dispatch, id, pageValue, filter]);

  const getDataSetBucketsByDataSetId = React.useCallback(() => {
    const payload = {
      dataSetsId: {
        operator: OPERATOR.eq,
        value: id,
      },
    };
    dispatch(getDataSetBuckets(payload));
  }, [dispatch, id]);

  const getLeadFilterByDataSet = React.useCallback(() => {
    const payload = {
      dataSetId: id,
    };
    dispatch(getLeadFilterByDataSetId(payload));
  }, [dispatch, id]);

  React.useEffect(() => {
    getDataSetBucketsByDataSetId();
    getLeadFilterByDataSet();
  }, []);

  React.useEffect(() => {
    getLeadDataByDataSet();
  }, [pageValue, filter]);

  const getStatusClassName = (id) => {
    switch (id) {
      case 1:
        return "badge badge-primary";
      case 2:
        return "badge badge-secondary";
      default:
        return "badge badge-ghost";
    }
  };

  const dataSet = React.useMemo(() => {
    let data = {};
    if (Object.keys(dataSets).length > 0 && dataSets.rows.length > 0) {
      data = dataSets.rows.find((r) => r.id == id);
    }
    return data;
  }, [dataSets, id]);

  // const serverSideFilterObject = (valFilter) => {
  //   console.log(valFilter)
  //   const outputArray = Object.entries(valFilter).map(([key, value]) => {
  //     const {
  //       filterType,
  //       textValue,
  //       valueFrom,
  //       valueTo,
  //       fromDateValue,
  //       toDateValue,
  //       selectedValue,
  //     } = value;

  //     const operator = filterOptionToOperatorMap[filterType] || "";
  //     let filterValue = null;
  //     if (
  //       filterType === "inRange" &&
  //       valueFrom !== undefined &&
  //       valueTo !== undefined
  //     ) {
  //       filterValue = {
  //         operator: "between",
  //         value: [Number(valueFrom), Number(valueTo)],
  //       };
  //     } else if (
  //       fromDateValue !== undefined &&
  //       toDateValue !== undefined &&
  //       fromDateValue.length > 0 &&
  //       toDateValue.length > 0
  //     ) {
  //       filterValue = {
  //         operator: "between",
  //         value: [fromDateValue, toDateValue],
  //       };
  //     } else {
  //       if (valueFrom !== undefined) {
  //         filterValue = {
  //           operator,
  //           value: Number(valueFrom),
  //         };
  //       } else if (textValue !== undefined && textValue.length > 0) {
  //         filterValue = {
  //           operator,
  //           value: textValue,
  //         };
  //       } else if (
  //         fromDateValue !== undefined &&
  //         fromDateValue.toString().length > 0
  //       ) {
  //         filterValue = {
  //           operator,
  //           value: new Date(fromDateValue).toISOString(),
  //         }; 
  //       } else if (selectedValue.length > 0){
  //         filterValue = {
  //           operator,
  //           value: selectedValue.map(val => {
  //             if(typeof val === 'object'){
  //               return val.id
  //             } else {
  //               return val
  //             }
  //           })
  //         }
  //       }
  //     }
  //     return {
  //       [key]: filterValue,
  //     };
  //   });
  //   let filterObj = {};
  //   if (outputArray.length > 0) {
  //     filterObj = {
  //       and: { operator: filterOptionToOperatorMap.and, value: outputArray },
  //     };
  //   }
  //   setFilter(filterObj);
  // };
  const serverSideFilterObject = (valFilter) => {
    const outputArray = Object.entries(valFilter).map(([key, value]) => {
      const { filterType, textValue, valueFrom, valueTo, fromDateValue, toDateValue, selectedValue } = value;
      const operator = filterOptionToOperatorMap[filterType] || "";
      let filterValue = null;
  
      if (filterType === "inRange" && valueFrom !== undefined && valueTo !== undefined) {
        filterValue = { operator: "between", value: [Number(valueFrom), Number(valueTo)] };
      } else if (fromDateValue !== undefined && toDateValue !== undefined &&
        fromDateValue.length > 0 && toDateValue.length > 0) {
        filterValue = { operator: "between", value: [fromDateValue, toDateValue] };
      } else if (valueFrom !== undefined) {
        filterValue = { operator, value: Number(valueFrom) };
      } else if (textValue !== undefined && textValue.length > 0) {
        filterValue = { operator, value: textValue };
      } else if (fromDateValue !== undefined && fromDateValue.toString().length > 0) {
        filterValue = { operator, value: new Date(fromDateValue).toISOString() };
      } else if (selectedValue.length > 0) {
        filterValue = {
          operator,
          value: selectedValue.map(val => typeof val === 'object' ? val.id : val)
        };
      }
  
      return { [key]: filterValue };
    });
  
    const filterObj = outputArray.length > 0 ? { and: { operator: filterOptionToOperatorMap.and, value: outputArray } } : {};
  
    setFilter(filterObj);
  };
  
  const rowData = React.useMemo(() => {
    if (Object.keys(leads).length > 0 && leads.rows.length > 0) {
      return leads.rows;
    }
    return [];
  }, [leads]);

  const totalCount = React.useMemo(() => {
    if (Object.keys(leads).length > 0) {
      return leads.count;
    }
    return 0;
  }, [leads]);

  const serverSidePagination = (value) => {
    setPageValue({ page: value.page, limit: value.pageSize });
  };

  return (
    <div className="container ">
      <div className="flex flex-row items-center">
        <Button
          title={<ArrowLeftIcon className="h-6 w-6" />}
          buttonClassName={"mr-4 !btn-circle"}
          handleClick={() => {
            navigate("/app/leads");
          }}
        />
        <h1 className="text-2xl font-bold">{leadCardByIdData.LeadData}</h1>
      </div>
      <br />
      <div className=" p-2 w-full  items-start">
        <div className="flex flex-row py-3 ">
          <p className="pr-20">{dataSet?.fileName}</p>{" "}
          <p className={`p-3 ${getStatusClassName(dataSet?.statusId)} `}>
            {dataSet?.status?.status}
          </p>{" "}
        </div>
        <div className="py-2 flex flex-row flex-wrap items-center">
          <p>
            Buckets :
            {Object.keys(dataSetBuckets).length > 0 &&
              dataSetBuckets?.rows.map((row) => (
                <NavLink
                  className="ml-5 link link-primary link-hover"
                  key={row.id}
                  end
                  to={`/app/leads/${id}/bucket/${row.id}`}
                >
                  {row.name}{" "}
                </NavLink>
              ))}
          </p>{" "}
        </div>
        <p className="py-2 ">
          {leadCardByIdData.campaignStartDate} :{" "}
          <span className=" ml-2 font-light">
            {dataSet?.processStartDate
              ? moment(dataSet?.processStartDate).format('D MMM YYYY')
              : ""}
          </span>
        </p>{" "}
        <p className="py-2 ">
          {leadCardByIdData.campaignEndDate} :{" "}
          <span className="ml-2 font-light">
            {dataSet?.processEndDate
              ? moment(dataSet?.processEndDate).format('D MMM YYYY')
              : ""}
          </span>
        </p>{" "}
      </div>
      <CreateBucket id={id} filter={filter} />

      <div className="shadow-xl  mt-10 p-6 bg-white  w-full  ">
        <Table
          headers={columns}
          data={rowData}
          pageSize={[10, 25, 50]}
          count={totalCount}
          serverSideFilterObject={serverSideFilterObject}
          serverSidePagination={serverSidePagination}
          isLoading={loadingLeads}
        />
      </div>
    </div>
  );
};

export default LeadDataById;
