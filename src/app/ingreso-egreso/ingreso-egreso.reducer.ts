
import * as fromIngresoEgreso from './ingreso-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AppState } from '../app.reducer';


export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

export interface AppState extends AppState{
    ingrsoEgreso: IngresoEgresoState;
}

const estadoInicial: IngresoEgresoState = {
    items: []
}

export function ingresoEgresoReducer( state = estadoInicial, actions: fromIngresoEgreso.acciones): IngresoEgresoState{
    switch (actions.type){
        case fromIngresoEgreso.SET_ITEMS:
            return {
                items: [
                    ...actions.items.map(item=>{
                        return {
                            ...item
                        }
                })
                ]
            }
        case fromIngresoEgreso.UNSET_ITEMS:
            return {
                items: []
            }
        default: 
            return state;
    }
}