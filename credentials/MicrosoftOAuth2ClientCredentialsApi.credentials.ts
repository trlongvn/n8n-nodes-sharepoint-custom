import type { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class MicrosoftOAuth2ClientCredentialsApi implements ICredentialType {
	name = 'microsoftOAuth2ClientCredentialsApi';

	extends = ['oAuth2Api'];

	icon: Icon = 'file:icons/Microsoft.svg';

	displayName = 'Microsoft OAuth2 API (Client Credentials)';

	documentationUrl = 'microsoft';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		// Info about the tenantID
		// https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints
		// For client credentials flow, we typically use organization-specific tenant ID
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: 'https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token',
			required: true,
			placeholder: 'https://login.microsoftonline.com/your-tenant-id/oauth2/v2.0/token',
			description: 'Replace {tenant} with your Azure AD tenant ID or domain name',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'https://graph.microsoft.com/.default',
			required: true,
			description: 'The scope for the API access. For most Microsoft services, use the .default scope.',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
