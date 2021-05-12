import React , {useState,useEffect} from 'react'
import './Scroll.css';
import {useWindowScroll} from 'react-use';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
export const Scroll = () => {
   
   const {y:pageYOffest} = useWindowScroll();
   const [state,update]=useState(false);
    useEffect(() => {
        
        if(pageYOffest>400)
        {
            update(true);
            console.log(pageYOffest);
        }
        else
        {
            update(false);
            console.log(pageYOffest);
        }
    },[pageYOffset])

    const top = ()=>
    {
        window.scrollTo({top:0 , behaviour:'smooth'})
    }
     if(state)
     {
    return (
        <>
           <div onClick={top} className="make">
           <p className="check"><ArrowUpwardIcon/></p>
           </div>      
        </>
        
    )
        }
        else{
            return null;
        }
}
