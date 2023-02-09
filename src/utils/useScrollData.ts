import React, { useEffect } from "react";
import useWindowSize from "./useWindowSize";


interface IScrollConfig {
    ease: number;
    current: number;
    previous: number;
    rounded: number;
    difference: number;
    acceleration: number;
    velocity: number;
    skew: number;
}


const useScrollData = (callBack: (scrollData: IScrollConfig) => void) => {

    const { height } = useWindowSize();

    const scrollData = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
        difference: 0,
        acceleration: 0,
        velocity: 0,
        skew: 0,
    } as IScrollConfig


    const scroll = () => {
        scrollData.current = window.scrollY;
        scrollData.previous += (scrollData.current - scrollData.previous) * scrollData.ease;
        scrollData.rounded = Math.round(scrollData.previous * 100) / 100;
        scrollData.difference = scrollData.current - scrollData.rounded;
        scrollData.acceleration = scrollData.difference / height;
        scrollData.velocity += scrollData.acceleration;
        scrollData.skew = scrollData.velocity * 7.5;

        callBack(scrollData);

        requestAnimationFrame(() => scroll())
    };


    useEffect(() => {
        requestAnimationFrame(() => scroll())
    }, [])


}

export default useScrollData;