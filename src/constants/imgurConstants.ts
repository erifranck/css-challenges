const imgurResponseType = 'token';
export const clientID = '7aded9685366bbe';
export const callbackUrl = 'http://localhost:3000/login';
export const imgurPath = 'https://api.imgur.com'
export const imgurLoginUrl = `${imgurPath}/oauth2/authorize?response_type=${imgurResponseType}&state=&client_id=${clientID}&scope=&redirect_uri=${encodeURIComponent(callbackUrl)}`;