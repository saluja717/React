import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Update.css';
import { Bar } from 'react-chartjs-2';
import CountUp from 'react-countup';
export  const Update = () => {
    const [val,up]=useState();
    const [total_confirmed,Update]=useState(0);
    const [TotalDeaths,Update_death] = useState(0);
      const [TotalRecovered,Update_recover] = useState(0);
    useEffect(()=>
        { 
           async function getting_data(){
              const res = await axios.get("https://api.covid19api.com/summary");
              up(res);
              console.log(res.data.Countries[76]);
               console.log(res);
               let ans =  res.data.Countries[76]['TotalConfirmed'];
                Update(ans);
                set(parseInt(ans));
               ans =  res.data.Countries[76]['TotalDeaths']
               Update_death(ans);
                 ans =  res.data.Countries[76]['TotalRecovered']
               Update_recover(ans)
           }
           getting_data();
        },[])

    return(
     
        <>
          <div className="row mt-5">
              <p className="text-center text-capitalize main">COVID 19 UPDATES</p>
                 <div className=" text-center main1 mt-3 d-lg-flex align-items-lg-center  justify-content-lg-around">
                      <div>
                       {/* <span>{set}</span> */}
                        <span><CountUp start={0} end={total_confirmed} delay={4} /></span>
                        <p className="text-center">Total Confirmed Cases in India</p>
                      </div>
                      <div>
                          <span><CountUp start={0} end={TotalDeaths} delay={4} /></span>
                          <p className="text-center">Total Death Case in India</p>
                      </div>
                      <div>
                          <span><CountUp start={0} end={TotalRecovered} delay={4} /></span>
                          <p className="text-center">Total Recovered in India</p>
                      </div>
                      
                 </div>
          </div> 
          <div className="container mt-4">
          <Bar
             data= {{
                    labels: ['Confirmed Case', 'Death Case', 'Recovered'],
                  
                   datasets:[{
                     barPercentage: 1,
                    barThickness: 80,
                    maxBarThickness: 60,
                    minBarLength: 20,   
                   label: 'INDIA',
                   data:[total_confirmed, TotalDeaths, TotalRecovered],

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
        </>
    )
}
