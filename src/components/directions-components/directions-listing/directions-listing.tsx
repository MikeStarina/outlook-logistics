import { TDirections } from '@/utils/types';
import styles from './directions-listing.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
const cx = classNames.bind(styles);


type TProps = {
    data: TDirections[],
}



const DirectionsListing: React.FC<TProps> = ({ data }) => {

    //console.log(data)

    return (
        <section className={cx('screen')}>
            <div className={cx('screen__listing')}>
                {data && data.map(i => 
                    <Link href={`/directions/${i.type}/${i.slug}`} className={cx('screen__card')}>
                        {i.from} &rarr; {i.to}
                    </Link>
                )}
            </div>
        </section>
    )
}

export default DirectionsListing;