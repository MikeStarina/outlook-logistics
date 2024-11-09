import React from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styles from './breadcrumbs.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TProps = {
    params: {
        title: string;
        href?: string;
    }[];
}

const BreadcrumbsComponent: React.FC<TProps> = ({ params }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {params.map((i, id) => {
                if (i.href) {
                    return (
                        <Link href={i.href} className={cx('breadcrumbs__item', 'breadcrumbs__item--link')}>{i.title}</Link>
                    )
                } else {
                    return (<span className={cx('breadcrumbs__item')}>{i.title}</span>)
                }

            })}
        </Breadcrumbs>
    )
}

export default BreadcrumbsComponent;
