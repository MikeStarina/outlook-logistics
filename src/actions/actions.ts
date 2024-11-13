import { apiUrl } from "@/utils/constants";

type TFormData = {
    from?: string,
    to?: string,
    name?: string,
    phone: string
}






// Отправка формы с главной страницы





export const sendFormData = async (orderData: TFormData) => {
    
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
    return response;    

}






export const getFescoCities = async () => {
    const res = await fetch(`${apiUrl}/api/fescoCities`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': ''
        },
    });

    const response = await res.json();

    return response;
}