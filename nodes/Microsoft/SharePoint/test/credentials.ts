export const credentials = {
	microsoftSharePointOAuth2Api: {
		grantType: 'clientCredentials',
		accessTokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
		clientId: 'CLIENT_ID',
		clientSecret: 'CLIENT_SECRET',
		scope: 'openid offline_access https://mydomain.sharepoint.com/.default',
		authentication: 'body',
		oauthTokenData: {
			token_type: 'Bearer',
			scope: 'https://mydomain.sharepoint.com/.default',
			expires_in: 4763,
			access_token: 'ACCESSTOKEN',
		},
		subdomain: 'mydomain',
		baseUrl: 'https://mydomain.sharepoint.com/_api/v2.0',
	},
};
