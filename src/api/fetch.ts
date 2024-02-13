import axios from "axios";
import store from "../store/store";

const DOMAIN = 'https://logger.itmegastar.com'

export async function getData<TResponse>(path: string): Promise<TResponse> {
    try {
        if (store.state.authorization.login && store.state.authorization.password) {
            const res = await axios.get<TResponse>(`${DOMAIN}${path}`, {
                auth: {
                    username: store.state.authorization.login,
                    password: store.state.authorization.password
                }
            })
            store.commit('setError', false)
            return res.data;
        } else {
            throw new Error('no validate user');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}