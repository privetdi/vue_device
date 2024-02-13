import { createStore } from "vuex";
import IDevice from '../api/type'

interface IAuthorization {
    login: string | null;
    password: string | null;
}
interface IRootState {
    authorization: IAuthorization;
    devices: IDevice[] | null
    isError: boolean
}

const store = createStore<IRootState>({
    state: {
        authorization: {
            login: null,
            password: null
        },
        devices: null,
        isError: true

    },
    mutations: {
        setAuthorization(state, value: IAuthorization) {
            state.authorization = value
            state.isError = false
        },
        setDevice(state, value: IDevice[]) {
            state.devices = value
        },
        setError(state, error: boolean) {
            state.isError = error
        }
    }
})

export default store