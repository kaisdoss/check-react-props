import telechargement from './telechargement.jpg';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent'

// import ClassCompo from './componenetClass/ClassCompo'


function App( props) {
  const alertName = FullName => alert(FullName);
  
  // const handleName=()=>{
  //   alert(' hello this me Kais Doss') 
  // }
 
  return (
   <div>
    <ProfileComponent FullName={'Kais Doss'} bio={'ok'}  profession={'no'}  alertName={alertName}>
    
    <img style={{width:500,marginLeft:400,marginBottom:50,marginTop:50}} src={telechargement} alt=""/>
    
    </ProfileComponent>
   </div>
  );
}

export default App;


//import PropTypes from "prop-types";

