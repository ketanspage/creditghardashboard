import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import { Link } from "react-router-dom";
import TemplatePointers from "../../features/user/components/TemplatePointers";
import Table from "../../components/Table";
const CellRenderer = ({ rowData }) => { 
  return(
  <button className="btn btn-primary">{rowData ? rowData.name : "action"}</button>
)};
function InternalPage() {
  const headers = [
    {
      field: "id",
      headerName: "ID",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "text",
    },
    {
      field: "name",
      headerName: "Name",
      isPinned: true,
      sortable: true,
      filterable: true,
    },
    {
      field: "age",
      headerName: "Age",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "number",
    },
    {
      field: "country",
      headerName: "Country",
      filterable: true,
      filterType: "selectCheckbox",
      filterParams: {
        options: [{label:"india" , id:1},{label:"Srilanka" , id:2}]
      }
    },
    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      isPinned: true,
      sortable: true,
      filterable: true,
      filterType: "date",
    },
    {
      field: "action",
      headerName: "Action",
      isPinned: false,
      filterable: false,
      sortable: false,
      cellRenderer: CellRenderer
    }
  ];
  const data = [
    {
      id: 1,
      name: "John",
      age: 25,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country: 'India',
    },
    {
      id: 2,
      name: "Jane",
      age: 30,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country: 'Sri Lanka',
    },
    {
      id: 3,
      name: "Doe",
      age: 28,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country: 'India',
    },
    {
      id: 4,
      name: "John",
      age: 25,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country: 'India',
    },
    {
      id: 5,
      name: "Jane",
      age: 30,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country:'Sri Lanka'
    },
    {
      id: 6,
      name: "Doe",
      age: 28,
      dateOfBirth: new Date(2000, 1, 1).toLocaleDateString(),
      country:'Sri Lanka'
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);

  const serverSideFilterObject = (valFilter) => {
    console.log(valFilter);
  };
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content flex flex-col">
        <div className="max-w-md">
          <TemplatePointers />
          <Link to="/app/dashboard">
            <button className="btn bg-base-100 btn-outline">Get Started</button>
          </Link>
        </div>
        {/* <div className="bg-white w-1/2 ">
          <Table
            headers={headers}
            data={data}
            pageSize={[1, 2, 3]}
            count={0}
            serverSideFilterObject={serverSideFilterObject}
            serverSidePagination={() => {}}
          />
        </div> */}
      </div>
    </div>
  );
}

export default InternalPage;
