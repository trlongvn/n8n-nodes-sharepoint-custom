# n8n-nodes-sharepoint-custom

This is an n8n community node that provides Microsoft OAuth2 authentication using **Client Credentials** grant type. This credential type is designed for server-to-server authentication scenarios and does not require a callback URL, making it ideal for Microsoft services like SharePoint, OneDrive, Outlook, and other Microsoft Graph API services.

## Key Features

- **Client Credentials Flow**: Uses the OAuth2 client credentials grant type (`grant_type=client_credentials`)
- **No Callback URL Required**: Perfect for server-to-server authentication scenarios
- **Tenant-Specific Authentication**: Supports organization-specific Azure AD tenants
- **Microsoft Services Compatible**: Works with SharePoint, OneDrive, Outlook, Microsoft Graph, and other Microsoft services

## Installation

To use this credential in your n8n instance:

1. Install via npm:
```bash
npm install n8n-nodes-sharepoint-custom
```

2. Or install directly in your n8n installation:
```bash
cd ~/.n8n/nodes
npm install n8n-nodes-sharepoint-custom
```

3. Restart n8n

## Configuration

### Prerequisites

Before configuring this credential, you need to:

1. Register an application in Azure AD (Azure Active Directory)
2. Configure API permissions for the Microsoft services you want to use
3. Create a client secret
4. Note your tenant ID

### Credential Setup

1. In n8n, go to **Credentials** → **New**
2. Search for and select **Microsoft OAuth2 API (Client Credentials)**
3. Fill in the required fields:

   - **Access Token URL**: `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`
     - Replace `{tenant}` with your Azure AD tenant ID or domain name
     - Example: `https://login.microsoftonline.com/12345678-1234-1234-1234-123456789abc/oauth2/v2.0/token`
   
   - **Client ID**: Your application (client) ID from Azure AD
   
   - **Client Secret**: Your application's client secret from Azure AD
   
   - **Scope**: The API scope you want to access
     - For Microsoft Graph: `https://graph.microsoft.com/.default`
     - For SharePoint: `https://{tenant}.sharepoint.com/.default`
     - For specific permissions: Specify the exact scope (e.g., `https://graph.microsoft.com/Sites.Read.All`)

### Example Scopes

- **Microsoft Graph (all permissions)**: `https://graph.microsoft.com/.default`
- **SharePoint**: `https://{yourtenant}.sharepoint.com/.default`
- **OneDrive**: `https://graph.microsoft.com/.default` (with Files.Read.All permission)
- **Outlook/Exchange**: `https://outlook.office365.com/.default`

## Azure AD App Registration

To set up the Azure AD application:

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations** → **New registration**
3. Configure the application:
   - Name: Choose a descriptive name (e.g., "n8n Integration")
   - Supported account types: Choose based on your needs
   - **No redirect URI is required** for client credentials flow
4. After creation, note the **Application (client) ID** and **Directory (tenant) ID**
5. Go to **Certificates & secrets** → **New client secret**
   - Create a secret and copy its value immediately (it won't be shown again)
6. Go to **API permissions** → **Add a permission**
   - Select the Microsoft service (e.g., Microsoft Graph)
   - Choose **Application permissions** (not Delegated)
   - Add the required permissions (e.g., Sites.Read.All, Files.Read.All)
7. Click **Grant admin consent** for your organization

## Differences from Standard Microsoft OAuth2

This credential differs from the standard `microsoftOAuth2Api` in n8n:

| Feature | Standard (Authorization Code) | This Package (Client Credentials) |
|---------|------------------------------|-----------------------------------|
| Grant Type | `authorization_code` | `client_credentials` |
| Callback URL | Required | Not required |
| User Context | Yes (acts on behalf of a user) | No (acts as the application) |
| Interactive Login | Required | Not required |
| Use Case | User-delegated operations | Server-to-server operations |
| Permissions | Delegated permissions | Application permissions |

## Use Cases

This credential is ideal for:

- **Automated Data Sync**: Scheduled workflows that sync data from SharePoint, OneDrive, etc.
- **Background Processing**: Server-side operations without user interaction
- **Bulk Operations**: Processing large amounts of data across Microsoft services
- **Service Integration**: Integration between n8n and Microsoft services in production environments
- **Webhook Handlers**: Processing Microsoft webhook events without user authentication

## Development

To build this package:

```bash
npm install
npm run build
```

To watch for changes during development:

```bash
npm run build:watch
```

## Compatibility

- n8n version: 0.100.0 or higher
- Node.js: 18.x or higher

## Resources

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Microsoft Identity Platform - Client Credentials Flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)
- [Microsoft Graph API Documentation](https://docs.microsoft.com/en-us/graph/)

## License

MIT

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/trlongvn/n8n-nodes-sharepoint-custom).
