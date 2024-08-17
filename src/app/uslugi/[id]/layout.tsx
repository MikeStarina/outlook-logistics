import React from "react";
import { getServices } from "@/utils/constants";
//import { services } from "@/service/services";

export const dynamicParams = false;
export const generateStaticParams = async () => {
    const services = await getServices();
    return services.map((item) => ({ id: item.url }))
}

export default function Layout ({ children }: {children: React.ReactNode}) {
    return (
        <>
        {children}
        </>
    )
}