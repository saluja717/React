import React , {useState,useEffect} from 'react'
import './Coronalive.css';
import { Bar ,Pie } from 'react-chartjs-2';
export const Coronalive = () => {
    const [data,update] = useState([]);
    const [check,up_check] = useState(false);
    const [name,up_name] = useState();
  
    useEffect(() =>
    {
        fetch('https://api.covid19india.org/data.json')
        .then(data=>data.json())
        .then(data=>update(data.statewise))
    },[])

    const Alldata = ()=>{
        return(
            data.map((val)=>
                {
                    return(
                        <tr className="text-center">
                        <td>{val.state}</td>
                        <td>{val.confirmed}</td>
                        <td>{val.active}</td>
                        <td>{val.recovered}</td>
                        <td>{val.deaths}</td>
                        </tr>
                    );
                })
        );
    }


    const Render = ()=>
    {
       return (
            data.filter(val=> val.state===name).map((v)=>
            {
                return(
                    <tr>
                    <td>{v.state}</td>
                    <td>{v.confirmed}</td>
                    <td>{v.active}</td>
                    <td>{v.recovered}</td>
                    <td>{v.deaths}</td>
                    </tr>
                );
            })
        
       );
    }

    const Revert = (e)=>{
        if(e.target.value!=='Show All')
        {
        up_check(true);
        up_name(e.target.value);
        }
        else
        {
            up_check(false);
        }
    }
    const Graph = ()=>
    {
        return (
            data.filter((val)=> val.state===name).map((v)=>{
              return (
                  <div className="container">
            <div className="row">
            <div className="col">
            <Bar
               data= {{
                      labels: ['Confirmed', 'Active', 'Recovered','Death'],
                    
                      datasets:[{
                       barPercentage: 1,
                      barThickness: 80,
                      maxBarThickness: 60,
                      minBarLength: 20,   
                     label: v.state,
                     data:[v.confirmed, v.active, v.recovered , v.deaths],
  
                                 backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
  
                     }]
               }}
                  width={window.innerWidth}
                  height={window.innerHeight}
                  options={{ maintainAspectRatio: false,
                  scales:{
                      yAxes:[
                         {
                          ticks:{
                              beginAtZero:true,
                          }
                         }
                      ]
                  } }
                  }
              />
              </div>
              <div className="col-lg-6 ml-5 mt-5 pie">
                      <Pie
                              data = {{
                               datasets: [{
                                data:[v.confirmed, v.active, v.recovered , v.deaths],
                               
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }],

                            // These labels appear in the legend and in the tooltips when hovering different arcs
                            labels:  ['Confirmed', 'Active', 'Recovered','Death'],
                            
                        }}

                        width={window.innerWidth}
                      height={window.innerHeight}
                  

                      />
              </div>
              
              </div>
              </div>
            )
        }) 
        
     );
    }
   
    return (
        <div>
            <p className="text-center mt-5 header">India StateWise Corona Update</p>
            
            <div className="input">
            <select id="inputState" onChange={Revert} className="form-select">
            <option>Show All</option>
                 {data.map((val)=>{
                     return (
                         <option>{val.state}</option>
                     );
                 })}
            </select>
            </div>
         
           <table className="table table-bordered table-strip table-responsive">
             <thead className="text-center">
                 <tr>
                     <th>State Name</th>
                     <th>Total Confirmed Case</th>
                     <th>Total Active Cases</th>
                     <th>Total Recovered</th>
                     <th>Total Death</th>
                 </tr>
             </thead>
             <tbody className="text-center odd">
                 
                   {!check?<Alldata/>:<Render/>}
                
             </tbody>
           </table>
             {check?<Graph/>:null}    
        </div>
    )
}
