import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import BankData from '../../features/BankData/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "CED_BankData"}))
      }, [])


    return(
        <BankData/>
    )
}

export default InternalPage