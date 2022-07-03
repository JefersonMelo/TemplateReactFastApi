function defineApiUrl() {
	if(window.location.origin.indexOf('localhost') === -1){
		return window.location.origin;
	}	
	return 'http://localhost:8999';
}

export const appVersion = '1.0.0';
export const appName = 'Template';
export const webURL = window.location.origin;
export const apiURL = `${defineApiUrl()}/api`;
export const showAllLogMessages = false;
export const customWarningsAndErrors = true;
