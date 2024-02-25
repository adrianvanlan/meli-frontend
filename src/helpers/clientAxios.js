import axios from 'axios';
import { getEnvVariables } from './getEnvVariables';

const { API_URL } = getEnvVariables();

export const clienteAxios = axios.create({
  baseURL: API_URL,
});
