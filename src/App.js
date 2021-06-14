import React from 'react';
import {Cards,Chart,CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api'
import {Typography} from '@material-ui/core'



class App extends React.Component{

    state={
        data:{},
        country:'',
    }

   



    async componentDidMount(){
        const fetchdData = await fetchData();
        this.setState({data: fetchdData});
        
    }

    handleCountryChange = async(country)=>{
        
        const fetchedData= await fetchData(country);
        this.setState({data:fetchedData,country:country});
        
        
    }
    render() {

        const{data,country}=this.state;
        return (
             <div className={styles.container}>
             <Typography>COVID TRACKER</Typography>
             <Cards data={data}/>
             <CountryPicker handleCountryChange={this.handleCountryChange}/>
             <Chart data={data} country={country}/>
             
             </div>
        );
    }
}
export default App;