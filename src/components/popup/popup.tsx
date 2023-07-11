import React, { useEffect } from 'react';
import styles from './popup.module.css';
import { useSelector, useDispatch } from '../..';
import { POPUP_VISIBILITY } from '../../services/actions/utils-actions';
import { CLEAR_FORM_DATA, GET_FORM_DATA, sendOrderData, SET_CAR_TYPE, SET_ORDER_PRICE, SET_REF_OPTION, UPDATE_PRICE, RESET_ORDER} from '../../services/actions/calc-actions';
import { INSURANCE_PRICE, PRICE_RATIO, carTypes, priceCalculatorFunc } from '../../utils/constants';
import { TCalcState } from '../../services/reducers/calcReducer';
import { TCarType } from '../../utils/constants';
import truck1500 from '../../images/truck1500.svg';
import truck5000 from '../../images/truck5000.svg';
import truck20000 from '../../images/truck20000.svg';
import truckTrall from '../../images/truckTrall.svg';



const carIcons = [truck1500, truck5000, truck20000, truckTrall]


const Popup: React.FC = () => {

    const dispatch = useDispatch();
    const orderData = useSelector<TCalcState>(store => store.calc);

   
   

    const closeButtonHandler = () => {
        dispatch({ type: RESET_ORDER });
        dispatch({ type: POPUP_VISIBILITY });
    }




    const onClickHandler = (e: React.SyntheticEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget;
        const selectedCarType = carTypes.find(item => item.name === id);
        dispatch({
            type: SET_CAR_TYPE,
            payload: selectedCarType
        })
        const price = priceCalculatorFunc(orderData, PRICE_RATIO, INSURANCE_PRICE, selectedCarType, false);

        dispatch({
            type: SET_ORDER_PRICE,
            payload: price
        })

      
    }


    const onChangeRefHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        

        dispatch({
            type: SET_REF_OPTION,
            payload: e.currentTarget.checked
        })
        dispatch({
            type: UPDATE_PRICE,
            payload: e.currentTarget.checked
        })
      
    }


    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        dispatch({
            type: GET_FORM_DATA,
            payload: e.currentTarget.value,
            id: e.currentTarget.id,
        })
    }


    const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: POPUP_VISIBILITY });
        dispatch({ type: CLEAR_FORM_DATA });
        dispatch(sendOrderData(orderData));
        dispatch({type: RESET_ORDER});
    }

    const distance = orderData!.orderDistance! > 0 ? `${orderData.orderDistance} км.` : 'Внутригородская';

    return (
        <section className={styles.popup_container}>
            
            <div className={styles.popup} >

                <button type='button' className={styles.close_button} onClick={closeButtonHandler}>X</button>


                <p className={styles.form_caption}>{`Расстояние перевозки: ${distance}`}</p>
                <p className={styles.form_caption}>Выберите тип кузова:</p>

                <div className={styles.car_type_wrapper}>
                    {carTypes.map((item, index) => (
                      <div className={orderData.carType && orderData.carType!.name === item.name ? styles.car_icon_selected : styles.car_icon} key={index} id={item.name} onClick={onClickHandler}>
                        <img src={carIcons[index]} className={styles.car_image}></img>
                        <p className={styles.icon_caption}>{item.placeholder}</p>
                      </div>
                    ))}
                    

                    
                </div>
                
                <form className={styles.ref_checkbox_wrapper}>
                    <input  className={styles.ref_checkbox} type='checkbox' id='refCheckbox' name='refCheckbox' onChange={onChangeRefHandler} disabled={!orderData.carType?.options.ref} checked={orderData.isRef}></input>
                    <label htmlFor='refCheckbox' className={orderData.carType?.options.ref ? styles.input_ref_label : styles.input_ref_label_disabled}>Рефрижератор</label>
                </form>
                  
                {orderData!.price! > 0 && <p className={styles.form_caption}>Стоимость заказа: {orderData.price}Р.</p>}

                <form className={styles.order_form} onSubmit={onSubmitHandler}>
                    <label htmlFor='phone' className={styles.input_userdata_label}>Ваш телефон:</label>
                    <input type='text' className={styles.input} id='phone' onChange={onChangeHandler} value={orderData.phone}></input>
                    <label htmlFor='name' className={styles.input_userdata_label}>Ваше имя:</label>
                    <input type='text' className={styles.input} id='name' onChange={onChangeHandler} value={orderData.name}></input>
                    <button type='submit' className={styles.submit_button}>Отправить</button>
                </form>
            </div>

        </section>
    )
}

export default Popup;
