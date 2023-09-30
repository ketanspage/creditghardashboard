import React, { useState } from 'react';
import TitleCard from '../../../components/Cards/TitleCard';
import moment from "moment"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { RECENT_TRANSACTIONS } from "../../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../../components/Input/SearchBar"
import jsondata from '../../../data.json'

const {bankData:{smsTable}}=jsondata
const itemsPerPage = 2;
const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

  const [filterParam, setFilterParam] = useState("")
  const [searchText, setSearchText] = useState("")
  const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

  const showFiltersAndApply = (params) => {
      applyFilter(params)
      setFilterParam(params)
  }

  const removeAppliedFilter = () => {
      removeFilter()
      setFilterParam("")
      setSearchText("")
  }

  useEffect(() => {
      if(searchText == ""){
          removeAppliedFilter()
      }else{
          applySearch(searchText)
      }
  }, [searchText])

  return(
      <div className="inline-block float-right">
          <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
          {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2"/></button>}
          <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
                  {
                      locationFilters.map((l, k) => {
                          return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                      })
                  }
                  <div className="divider mt-0 mb-0"></div>
                  <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
              </ul>
          </div>
      </div>
  )
}

const paginationStyles = {
  hoveredRow: {
    backgroundColor: '#f0f0f0', // Light gray background
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  item: {
    display: 'inline-block',
    margin: '0 0.2rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    color: '#007BFF', // Changed color to blue
    border: '2px solid #007BFF', // Changed border color to blue
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  activeItem: {
    backgroundColor: '#007BFF', // Changed background color to blue
    color: 'white',
  },
  hoverItem: {
    backgroundColor: '#007BFF', // Changed hover background color to blue
    color: 'white',
  },
};
  
function UserChannels() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.location == params})
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleData = smsTable.slice(startIndex, startIndex + itemsPerPage);
  
    const totalPages = Math.ceil(smsTable.length / itemsPerPage);
    const renderPaginationButtons = () => {
      const buttons = [];
  
      if (currentPage > 2) {
          buttons.push(
              <button
                  key={1}
                  onClick={() => setCurrentPage(1)}
                  style={{ ...paginationStyles.item, borderRadius: '50px',width:'50px' }} // Make circular
              >
                  1
              </button>
          );
          if (currentPage > 3) {
              buttons.push(
                  <span key="ellipsis1" style={{...paginationStyles.item, borderRadius: '50px',width:'50px'}}>
                      ....
                  </span>
              );
          }
      }
  
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
          buttons.push(
              <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  style={{
                      ...paginationStyles.item,
                      ...(currentPage === i ? paginationStyles.activeItem : {}),
                      borderRadius: '50px', width:'50px'
                  }}
              >
                  {i}
              </button>
          );
      }
  
      if (currentPage < totalPages - 1) {
          if (currentPage < totalPages - 2) {
              buttons.push(
                  <span key="ellipsis2" style={{...paginationStyles.item,borderRadius: '50px', width:'50px'}}>
                      ....
                  </span>
              );
          }
          buttons.push(
              <button
                  key={totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                  style={{ ...paginationStyles.item, borderRadius: '50px' ,width:'50px'}} // Make circular
              >
                  {totalPages}
              </button>
          );
      }
  
      return buttons;
  };
  
    return (
      <TitleCard title={"Content library"} topMargin="" className="rounded-t-none" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                    <span style={{ marginRight: '0.5rem' }}>Page Size:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => {
                            setCurrentPage(1); // Reset to first page when changing page size
                            setItemsPerPage(Number(e.target.value));
                        }}
                    >
                        <option value={2}>2</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>
              </div>
            {/** Table Data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr style={
                              { backgroundColor: '',color: 'grey',cursor: 'pointer' } 
                            }>
                            <th></th>
                            <td class="w-4 p-4">
                                   
                            </td>
                            <th className="normal-case">Template ID</th>
                            <th className="normal-case">Template Title</th>
                            <th className="normal-case">Tags</th>
                            <th className="normal-case">Created Date</th>
                            <th className="normal-case">Status</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {visibleData.map((u, k) => (
                            <tr key={k}     
                            className="bg-white border-b dark:bg-gray-80 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-100 cursor-pointer"                        >
                                <th></th>
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 light:focus:ring-offset-white-800 focus:ring-2 light:bg-white-700 dark:border-gray-600"/>
                                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td>{u.campaignTitle}</td>
                                <td>{u.scheduledDate}</td>
                                <td>{u.scheduledTime}</td>
                                <td>{u.smsSent}</td>
                                <td>{u.smsDelivered}</td>
                                
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="flex justify-end mb-4 mt-3">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`${paginationStyles.item} border-none rounded-full mr-2`}
  >
    Previous
  </button>
  {renderPaginationButtons()}
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`${paginationStyles.item} border-none rounded-full ml-2`}
  >
    Next
  </button>
</div>

        </TitleCard>
        
    );
}

export default UserChannels;
