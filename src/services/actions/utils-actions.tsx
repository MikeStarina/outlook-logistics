export const MAIN_MENU_VISIBILITY = 'MAIN_MENU_VISIBILITY';
export const POPUP_VISIBILITY = 'POPUP_VISIBILITY';
export const DROPDOWN_VISIBILITY = 'DROPDOWN_VISIBILITY';
export const RESET_DROPDOWN_VISIBILITY = 'RESET_DROPDOWN_VISIBILITY';


interface IDropdownVisibility {
    readonly type: typeof DROPDOWN_VISIBILITY;
    payload: boolean,
    direction: string
}

interface IResetDropdownVisibility {
    readonly type: typeof RESET_DROPDOWN_VISIBILITY;
}


interface IMainMenuVisibility {
    readonly type: typeof MAIN_MENU_VISIBILITY;
}
interface IPopupVisibility {
    readonly type: typeof POPUP_VISIBILITY;
}

export type TUtilsActions = IMainMenuVisibility | IPopupVisibility | IDropdownVisibility | IResetDropdownVisibility;