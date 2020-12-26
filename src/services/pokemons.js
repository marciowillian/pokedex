import { httpPokedex } from '../plugins/http'

export default {
    find: () => {
        return httpPokedex.get('pokemon?limit=151&offset=0')
    },

    findImg: (url) => {
        return httpPokedex.get(url)
    }
}