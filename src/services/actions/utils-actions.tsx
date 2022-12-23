import React from 'react';



export const MAIN_MENU_VISIBILITY = 'MAIN_MENU_VISIBILITY';




interface IMainMenuVisibility {
    readonly type: typeof MAIN_MENU_VISIBILITY;
}

export type TUtilsActions = IMainMenuVisibility;