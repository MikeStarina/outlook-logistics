import { apiUrl } from "@/utils/constants";

type TFormData = {
    name: string,
    phone: string
}






// Отправка формы с главной страницы





export const sendFormData = async (orderData: TFormData) => {
    //console.log(orderData);
    
    const data = orderData;
    let response = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json",
            "Content-Length": '',
        },
        body: JSON.stringify(data),

    })
    response = await response.json()

    return response;
}






// ATI поиск по городу





export const getAtiCitySearchDataFunc = async (data: { userCity: string, direction: string }, setAtiCitiesData: any, atiCitiesData: any) => {

    //console.log(data);

        const res = await fetch(`${apiUrl}/api/ati_city_search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': ''
            },
            body: JSON.stringify(data)
        });
        
        const response = await res.json();
        response.cities.forEach((item: any) => { item.direction = response.direction})
        setAtiCitiesData(
            {
                to: response.direction === 'to' ? response.cities : atiCitiesData.to,
                from: response.direction === 'from' ? response.cities : atiCitiesData.from,
            }
        )
        return response;
}





// Получение расстояния между городами





export const getDistance = async ( distanceData :any, orderData: any, setOrderData: any) => {


        //console.log(distanceData);
        const res = await fetch(`${apiUrl}/api/ati_distance_calculator`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': ''
            },
            body: JSON.stringify(distanceData)
        });

        const response = await res.json();

        return response;
        

       
          
}




// Отправка заказа




export const sendOrderData = async (orderData: any) => {
    

    const data = {data: orderData};


 
    const res = await fetch(`${apiUrl}/api/orders`, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Content-Length": '',
            },
            body: JSON.stringify(data),

        })
        
    const response = await res.json();
        

}