import axios from 'axios';

import {apiURL} from '../Helpers/Globals'

export default axios.create({
	baseURL: apiURL
})