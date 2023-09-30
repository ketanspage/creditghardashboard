import React, { useState } from "react";
import CustomCard from "../../components/Cards/CustomCard";
import jsonData from "../../data.json";
import Table from "../../components/Table";
import { AiOutlineEye } from "react-icons/ai";
import Button from "../../components/buttons/Button";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBucketFilter, getBuckets, getDataSetBucketById, getDataSetBucketFilter } from "./slice/bucketSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import LoanEndDateRender from "../leadsData/LeadDataById/LoanEndDateRender";
import LoanIssuedDateRender from "../leadsData/LeadDataById/LoanIssuedDateRender";
import StatusRender from "../leadsData/LeadDataById/StatusRender";
import PortfolioTypeRender from "../leadsData/LeadDataById/PortfolioTypeRender";
import CustomerNameRender from "../leadsData/LeadDataById/CustomerNameRender";
import { OPERATOR, filterOptionToOperatorMap } from "../../constants";
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

const Bucket = () => {
  const { BucketData, BucketTableHeader, BucketTableData } = jsonData;
  const { dataSetBucketId, leadId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataSetBucketsById, buckets, loading, bucketFilter } = useSelector(
    (state) => state.bucket
  );
  const [filter, setFilter] = React.useState({});
  const [columns, setColumns] = React.useState(defaultColumn);
  const [pageValue, setPageValue] = React.useState({
    page: 1,
    limit: 10,
  });

  const updateFilterInColumns = React.useCallback(() => {
    let updatedColumns = [...columns];
    updatedColumns = updatedColumns.map((column) => {
      if (column.field === "statusName" && bucketFilter?.statusFilter) {
        return {
          ...column,
          filterParams: {
            options: bucketFilter?.statusFilter.map((status) => ({
              label: status["statuses.status"],
              statusId: status?.statusId,
            })),
          },
          filterable: true,
        };
      } else if (
        column.field === "portfolioTypeName" &&
        bucketFilter?.portfolioTypeFilter
      ) {
        return {
          ...column,
          filterParams: {
            options: bucketFilter?.portfolioTypeFilter.map((filter) => ({
              label: filter["portfolioTypes.name"],
              portfolioTypeId: filter?.portfolioTypeId,
            })),
          },
          filterable: true,
        };
      } else if (column.field === "state" && bucketFilter?.stateFilter) {
        return {
          ...column,
          filterParams: {
            options: bucketFilter?.stateFilter.map((filter) => filter?.state),
          },
          filterable: true,
        };
      } else if (column.field === "city" && bucketFilter?.cityFilter) {
        return {
          ...column,
          filterParams: {
            options: bucketFilter?.cityFilter.map((filter) => filter?.city),
          },
          filterable: true,
        };
      } else if (column.field === "zone" && bucketFilter?.zoneFilter) {
        return {
          ...column,
          filterParams: {
            options: bucketFilter?.zoneFilter.map((filter) => filter?.zone),
          },
          filterable: true,
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  }, [columns, bucketFilter]);

  React.useEffect(() => {
    updateFilterInColumns();
  }, [bucketFilter]);

  const getDataSetBucket = React.useCallback(() => {
    dispatch(getDataSetBucketById(dataSetBucketId));
  }, [dispatch, dataSetBucketId]);

  const getBucketsByDataSetBucketId = React.useCallback(() => {
    const payload = {
      dataSetBucketId: {
        operator: OPERATOR.eq,
        value: dataSetBucketId,
      },
      ...filter,
      page: pageValue.page,
      limit: pageValue.limit,
    };
    dispatch(getBuckets(payload));
  }, [dispatch, dataSetBucketId, pageValue, filter]);

  const getBucketFilters = React.useCallback(() => {
    const payload = {
      dataSetBucketId: dataSetBucketId,
    };
    dispatch(getBucketFilter(payload));
  }, [dispatch, dataSetBucketId]);

  React.useEffect(() => {
    getBucketFilters()
    getDataSetBucket();
  }, []);

  React.useEffect(() => {
    getBucketsByDataSetBucketId();
  }, [pageValue, filter]);

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
    if (Object.keys(buckets).length > 0 && buckets.rows.length > 0) {
      return buckets.rows;
    }
    return [];
  }, [buckets]);

  const totalCount = React.useMemo(() => {
    if (Object.keys(buckets).length > 0) {
      return buckets.count;
    }
    return 0;
  }, [buckets]);

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
            navigate(`/app/leads/${leadId}`);
          }}
        />
        <h1 className="text-2xl font-bold">{BucketData.title}</h1>
      </div>
      <br />
      <div className="flex flex-row justify-between">
        <div className="p-6 items-start">
          <div className="flex flex-row py-2 ">
            <p className="font-normal">{dataSetBucketsById?.name} : </p>{" "}
            <p className="ml-2 font-light">
              {" "}
              {dataSetBucketsById?.dataSet?.fileName}
            </p>{" "}
          </div>
          <p className="py-2">
            {BucketData.campaignStartDate} :{" "}
            <span className=" ml-2 font-light">
              {" "}
              {dataSetBucketsById?.dataSet?.processStartDate
                ? moment(
                    dataSetBucketsById?.dataSet?.processStartDate
                  ).format('D MMM YYYY')
                : ""}
            </span>{" "}
          </p>{" "}
          <p>
            {BucketData.campaignEndDate} :{" "}
            <span className=" ml-2 font-light">
              {dataSetBucketsById?.dataSet?.processEndDate
                ? moment(
                    dataSetBucketsById?.dataSet?.processEndDate
                  ).format('D MMM YYYY')
                : ""}
            </span>{" "}
          </p>{" "}
        </div>
      </div>

      <div className="shadow-xl  mt-10 p-6 bg-white  w-full  ">
        <Table
          headers={columns}
          data={rowData}
          pageSize={[10, 25, 50]}
          count={totalCount}
          serverSideFilterObject={serverSideFilterObject}
          serverSidePagination={serverSidePagination}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default Bucket;
