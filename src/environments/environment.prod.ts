/**
 * @license
 */
export const environment = {
    production: true,
    //GOOGLE MAP
    googleApiKey: window["env"]["APP_MAP_API_KEY"] || '',
    //MARKETPLACE | BTB | STANDARD
    mode: 'STANDARD',
    //API URL
    apiUrl: window["env"]["APP_BASE_URL"] || 'https://niche.evizi.com/services',
    shippingApi: window["env"]["APP_SHIPPING_URL"] || 'https://niche.evizi.com/services',
    client: {
        language: {
            default: window["env"]["APP_DEFAULT_LANGUAGE"] || 'en',
            array: [
                'fr',
                'en'
            ],
        },
    }
};
