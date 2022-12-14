import { DATA_REQUEST,
    DATA_SUCCESS,
    dataDispatchTypes,
    IContact,
    createDispatchType,
    CREATE_SUCCESS,
    EDIT_SUCCESS,
    editDispatchType,
    DELETE_SUCCESS,
    deleteSuccess} from "../actions/dataActionsTypes";


export interface  dataReduserI{
    contacts?: IContact[]
    loading: boolean,
}
type dispatchType = dataDispatchTypes | createDispatchType | editDispatchType | deleteSuccess
const initialDataState: dataReduserI = {
    loading: false,
};

export function dataReduser(state: dataReduserI = initialDataState, action :dispatchType): dataReduserI {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DATA_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            };

        case CREATE_SUCCESS:
            return {
                ...state,
                contacts: state?.contacts?.concat(action.payload)
            };

        case EDIT_SUCCESS:
            return {
                ...state,
                contacts:  state?.contacts?.map((item: IContact )=>action.payload.id === item.id? {...state.contacts,  ...action.payload}: item)
            };

        case DELETE_SUCCESS:
            return {
                ...state,
                contacts:  state?.contacts?.filter((item: IContact) => item.id !== action.payload)
            };

        default:
            return state
    }
};

