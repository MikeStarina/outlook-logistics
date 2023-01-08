import React from 'react';



export const MAIN_MENU_VISIBILITY = 'MAIN_MENU_VISIBILITY';
export const POPUP_VISIBILITY = 'POPUP_VISIBILITY';



interface IMainMenuVisibility {
    readonly type: typeof MAIN_MENU_VISIBILITY;
}
interface IPopupVisibility {
    readonly type: typeof POPUP_VISIBILITY;
}

export type TUtilsActions = IMainMenuVisibility | IPopupVisibility;