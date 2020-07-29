export enum PopupActions {
    SET_POPUP_MODE= '[PopupActions] set popup mode'
}

export const SetPopupModeAct = (mode: boolean) => {
    return {
        type: PopupActions.SET_POPUP_MODE,
        mode,
    }
}
