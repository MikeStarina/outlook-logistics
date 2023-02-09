import React, { useRef } from "react";
import styles from './trapezoid.module.css';
import useScrollData from "../../../utils/useScrollData";






const Trapezoid: React.FC = () => {

    const ref = useRef<HTMLDivElement>(null);

    useScrollData((scrollData) => {
        if (ref?.current?.style) {
            ref.current.style.transform = `translate3d(0px, ${scrollData.difference * -1 / 25}, 0px )`
        }
    })
    return (
        <div className={styles.trapezoid} ref={ref}></div>
    )
}

export default Trapezoid;