import React from "react";
import { redirect } from "react-router";
import { useParams } from "react-router";




const Redirect = () => {

    const { id } = useParams();
    console.log(typeof id);

    //const redirectUrl = id === '0' ?


    return redirect('/')
}


export default Redirect;