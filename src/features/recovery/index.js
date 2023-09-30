import React from 'react';
import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import { TbHandClick } from "react-icons/tb";
import LineChart from '../../components/charts/LineChart'
import BarChart from '../../components/charts/BarChart'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import jsondata from '../../data.json'

const {recovery:{statsData}}=jsondata

function DashboardStyle({ title, value, icon, description, icondescription, colorIndex }) {
    return (
      <div className="bg-white rounded-lg shadow-md mt-2 md:mt-0 min-h-[100px]">
        <div className="flex flex-col p-4 ml-2 md:ml-10">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <p className="text-xl font-semibold mt-2">{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }


function Dashboard(){


    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>

            <br/>
            <div className={`grid lg:grid-cols-2 mt-1 md:grid-cols-1 grid-cols-1 gap-4`} style={{ minHeight: '100px' }}>
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStyle key={k} {...d} colorIndex={k} />
                        )
                    })
                }
            </div>
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <BarChart labels={[ '0k-10k', '10k-20k', '20k-50k', '50k-1lac', 'above 1lac']} cardTitle={'Portfolio distribution'} label1={'Total Accounts'} label2={'Accounts resolved'}/>
                <LineChart labels={ ['January', 'February', 'March', 'April', 'May', 'June', 'July']} cardTitle={"Montly Active Users (in k)"} label={'Accounts'}/>
            </div>
        </>
    )
}

export default Dashboard