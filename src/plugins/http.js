import axios from 'axios'
import { baseApiUrlApiPokedex } from '../config'

export const httpPokedex = axios.create({
    baseURL: baseApiUrlApiPokedex
})