


import * as fromUI from './shared/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer'
// import * as fromIngresoEgrso from './ingreso-egreso/ingreso-egreso.reducer';

export interface AppState{
    ui: fromUI.State,
    auth: fromAuth.AuthState
    // ingrsoEgreso: fromIngresoEgrso.IngresoEgresoState
    
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth: fromAuth.AuthReducer,
    // ingrsoEgreso: fromIngresoEgrso.ingresoEgresoReducer
}
