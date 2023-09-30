import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Recovery from '../../features/recovery/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Recovery"}))
      }, [])


    return(
        <Recovery />
    )
}

export default InternalPage