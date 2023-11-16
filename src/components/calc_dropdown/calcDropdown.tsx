'use client'
import React from "react";
import styles from './calcDropdown.module.css';
import { TCitiesArray } from "@/utils/types";
//import { TCitiesArray } from "../../services/reducers/atiDataReducer";
//import { SET_VALIDATED_CITY } from "../../services/actions/calc-actions";
//import { RESET_DROPDOWN_VISIBILITY } from "../../services/actions/utils-actions";

type TCalcDropdown = {
    data?: Array<TCitiesArray>,
    onClickHandler: any,
}


const CalcDropdown: React.FC<TCalcDropdown> = ({ onClickHandler, data }) => {

  
    
    /*
    const onClickHandler = (e: React.SyntheticEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.id);
        //const validatedCity = data![index]
        /*
        dispatch({
            type: SET_VALIDATED_CITY,
            payload: validatedCity
        })

        dispatch({ type: RESET_DROPDOWN_VISIBILITY });
        
       
    }

    

    */
   const handler = (e: React.SyntheticEvent<HTMLDivElement>) => {
    onClickHandler(e, data);
   }
   

    return (
        <div className={styles.dropdown}>
            {data && data.map((item, index) => {
                if (index <= 4) {
                    return (
                        <div className={styles.city_value_box} key={index} id={index.toString()} onClick={handler} >
                            <p className={styles.city_value}>{item.CityName}</p>
                        </div>
                    )
                }
            })}
           

        </div>
    );
}

export default CalcDropdown;