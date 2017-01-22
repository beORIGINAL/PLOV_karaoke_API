export const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:2428/api' : '/api';
export const ENABLE_DEBUG_MODE = NODE_ENV === 'development';
export const ENABLE_INTERCEPTOR_LOGS = !ENABLE_DEBUG_MODE;
export const APP_THEME = {
	default: {
		type: 'default',
		name: 'orange',
		palette: {
			'default': '400',
			'hue-1': '100',
			'hue-2': '600',
			'hue-3': 'A100'
		}
	}
};