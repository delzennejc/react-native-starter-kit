import { getRequest } from '../helpers/api.helpers'

export const getUsers = () => getRequest('/users/')
