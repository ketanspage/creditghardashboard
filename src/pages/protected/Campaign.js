import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Campaign from '../../features/campaign/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Campaign"}))
      }, [])


    return(
        <Campaign />
    )
}

export default InternalPage