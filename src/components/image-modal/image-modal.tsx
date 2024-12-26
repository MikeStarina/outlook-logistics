import React, { Dispatch, SetStateAction } from "react"
import styles from './image-modal.module.scss'
import classNames from "classnames/bind"
import Image, { StaticImageData } from "next/image"
const cx = classNames.bind(styles)


export default function ImageModal ({ image, setModal, setImage }: { image: StaticImageData, setModal: Dispatch<SetStateAction<boolean>>, setImage:  Dispatch<SetStateAction<StaticImageData | null>>}) {

    return (
        <div className={cx('modal')}
            onClick={() => {
                setModal(false);
                setImage(null)
            }}
        >
            <div className={cx('modal__image-wrapper')}>
                {image && <Image src={image} alt=''></Image>}
            </div>
        </div>
    )
}
