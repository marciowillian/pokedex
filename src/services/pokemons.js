import { httpPokedex } from '../plugins/http'

export default {
    find: () => {
        return httpPokedex.get('')
    }
}