import * as ActionType from './ActionType'
import * as CategoriesApi from '../api/CategoriesApi'

export const getCategoriesResponse = categories => ({
    type: ActionType.GET_ALL_CATEGORIES,
    categories
});



export function getCategories() {
    return dispatch => {
        return CategoriesApi.getAllCategories()
            .then(categories => {
                dispatch(getCategoriesResponse(categories));
            }).catch(error => {
                throw error;
            });
    };
}

