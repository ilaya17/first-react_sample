
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>BOOTSTRAP PRICING</h3>
     <Bootstrap free = 'FREE'
     dollar = '$0'
     month = '/month'
     access1 = '✔'
     access2 = '❌'
     data1 = 'Single User'
     data2 = '5GB Storage'
     data3 = 'Unlimited Public Projects'
     data4 = 'Community Access'
     data11 = 'Unlimited Private Projects'
     data12 = 'Dedicated Phone Support'
     data13 = 'Free Subdomain'
     data14 = 'Monthly Status Reports'
     btn = 'BUTTON'
     />
    <Bootstrap free = 'PLUS' 
     dollar = '$9'
     month = '/month'
     access3 = '✔'
     access4 = '❌'
     data1 = '5 User'
     data2 = '5GB Storage'
     data3 = 'Unlimited Public Projects'
     data4 = 'Community Access'
     data5 = 'Unlimited Private Projects'
     data6 = 'Dedicated Phone Support'
     data7 = 'Free Subdomain'
     data10 = 'Monthly Status Reports'
     btn = 'BUTTON'
     />
    <Bootstrap free = 'PRO'
     dollar = '$49'
     month = '/month'
     access5 = '✔'
     data1 = 'Unlimited User'
     data2 = '150GB Storage'
     data3 = 'Unlimited Public Projects'
     data4 = 'Community Access'
     data5 = 'Unlimited Private Projects'
     data6 = 'Dedicated Phone Support'
     data7 = 'Unlimited Free Subdomain'
     data8 = 'Monthly Status Reports' 
     btn = 'BUTTON'
     />
    </div>
  );
}

export default App;

function Bootstrap (props){
  return(
    <div className='details'>
      <p className='fpp'>{props.free}</p>
      <p className='line'><span>{props.dollar}</span>{props.month}</p>
      <p class = 'info'><span>{props.access1}</span><span>{props.access3}</span><span>{props.access5}</span>{props.data1}</p>
      <p class = 'info'><span>{props.access1}</span><span>{props.access3}</span><span>{props.access5}</span>{props.data2}</p>
      <p class = 'info'><span>{props.access1}</span><span>{props.access3}</span><span>{props.access5}</span>{props.data3}</p>
      <p class = 'info'><span>{props.access1}</span><span>{props.access3}</span><span>{props.access5}</span>{props.data4}</p>
      <p class = 'info'><span>{props.access3}</span><span>{props.access5}</span>{props.data5}<p className='wrogntxt'><span className = 'wrong'>{props.access2}</span>{props.data11}</p></p>
      <p class = 'info'><span>{props.access3}</span><span>{props.access5}</span>{props.data6}<p className='wrogntxt'><span className = 'wrong'>{props.access2}</span>{props.data12}</p></p>
      <p class = 'info'><span>{props.access3}</span><span>{props.access5}</span>{props.data7}<p className='wrogntxt'><span className = 'wrong'>{props.access2}</span>{props.data13}</p></p>
      <p class = 'info'><span>{props.access5}</span>{props.data8}<p className='wrogntxt'><span className = 'wrong'>{props.access2}</span>{props.data14}</p><p className='wrogntxt'><span className = 'wrong'>{props.access4}</span>{props.data10}</p></p>
      <button className='click'>{props.btn}</button>
    </div>
  );
}