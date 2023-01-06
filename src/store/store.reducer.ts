import { Action } from '@ngrx/store';
import { OnBoarding } from './information';

export function addInformationReducer(state: OnBoarding[] = [], action) {
    switch (action.type) {
        case 'Monitor':
            if (action.payload.daily !== undefined) {
                return [action.payload];
            }
            return [...state, action.payload];
        default:
            return state;
    }
}