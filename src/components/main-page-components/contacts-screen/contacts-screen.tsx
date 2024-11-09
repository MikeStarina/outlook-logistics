'use client'
import React, { Suspense } from "react";
import styles from './contacts-screen.module.scss';
import classNames from 'classnames/bind';
import Image from "next/image";
import Link from "next/link";
import vk_logo_black from '../../../../public/vk_logo_black.png';
import instagram_logo_black from '../../../../public/instagram_logo_black.png';
import strela_small_logo_black from '../../../../public/strela_small_logo_black.png';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const cx = classNames.bind(styles);

// Suggestions for improvement:
// 1. The classNames import is not being used - either remove it or use cx() instead of styles.
// 2. Consider extracting contact information into a separate config file for easier maintenance
// 3. The social media links are commented out - either remove them completely or implement properly
// 4. Consider adding error boundaries around the map component
// Example implementation:
// import { ErrorBoundary } from 'react-error-boundary';
//
// Then wrap map component like:
// <ErrorBoundary fallback={<div>Error loading map. Please try again later.</div>}>
//   <YMaps>...</YMaps>
// </ErrorBoundary>
// 5. Add loading state/spinner for the map while it loads
// 6. Add alt text translations for accessibility
// 7. Consider making the phone number and email clickable with proper mailto: and tel: links
// 8. Add proper TypeScript types for the map ref
// 9. Consider extracting map configuration into constants
// 10. Add proper aria-labels for accessibility

const ContactsScreen: React.FC = () => {
   
    return (
        <section className={cx('screen')}>
            
            {/* <Suspense fallback={null}>
                    
                    <YMaps>
                        <Map defaultState={{ center: [ 59.879510, 30.397140 ], zoom: 15 }} instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width={'100%'} height={'100%'} className={styles.map}>
                            <Placemark defaultGeometry={[ 59.879510, 30.397140 ]} />
                            <ZoomControl />
                        </Map>
                    </YMaps>
                    
                </Suspense> */}
            
        </section>
    )
}

export default ContactsScreen; 