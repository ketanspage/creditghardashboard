import UserProfile from './components/UserProfile'
import  Button  from '../../components/buttons/Button';
function campaign(){
    return(
        <>

<br />
<Button title='Reset' buttonClassName='float-right'/>
<br/>
<br/>
  <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <UserProfile/>
  </div>      
        </>
    )
}
export default campaign;