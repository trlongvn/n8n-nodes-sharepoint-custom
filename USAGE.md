# Usage Examples

This document provides examples of how to use the Microsoft OAuth2 Client Credentials credential with various Microsoft services in n8n.

## SharePoint Example

### Get SharePoint Site Information

1. Add an **HTTP Request** node
2. Select **Microsoft OAuth2 API (Client Credentials)** as the authentication method
3. Configure the request:
   - Method: GET
   - URL: `https://graph.microsoft.com/v1.0/sites/{site-id}`
   - Authentication: Microsoft OAuth2 API (Client Credentials)

### List SharePoint Lists

```
Method: GET
URL: https://graph.microsoft.com/v1.0/sites/{site-id}/lists
```

### Upload File to SharePoint

```
Method: PUT
URL: https://graph.microsoft.com/v1.0/sites/{site-id}/drive/root:/{filename}:/content
Body: [Your file content]
```

## OneDrive Example

### List Files

```
Method: GET
URL: https://graph.microsoft.com/v1.0/drives/{drive-id}/root/children
```

### Download File

```
Method: GET
URL: https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/content
```

## Outlook/Exchange Example

### Send Email

```
Method: POST
URL: https://graph.microsoft.com/v1.0/users/{user-id}/sendMail
Body:
{
  "message": {
    "subject": "Test email",
    "body": {
      "contentType": "Text",
      "content": "This is a test email"
    },
    "toRecipients": [
      {
        "emailAddress": {
          "address": "recipient@example.com"
        }
      }
    ]
  }
}
```

### List Calendar Events

```
Method: GET
URL: https://graph.microsoft.com/v1.0/users/{user-id}/calendar/events
```

## Microsoft Teams Example

### List Teams

```
Method: GET
URL: https://graph.microsoft.com/v1.0/groups?$filter=resourceProvisioningOptions/Any(x:x eq 'Team')
```

### Send Message to Channel

```
Method: POST
URL: https://graph.microsoft.com/v1.0/teams/{team-id}/channels/{channel-id}/messages
Body:
{
  "body": {
    "content": "Hello, World!"
  }
}
```

## Required Azure AD Permissions

Make sure your Azure AD app has the appropriate **Application permissions** granted:

### SharePoint
- Sites.Read.All
- Sites.ReadWrite.All
- Sites.FullControl.All

### OneDrive
- Files.Read.All
- Files.ReadWrite.All

### Outlook/Exchange
- Mail.Send
- Mail.Read
- Calendars.Read
- Calendars.ReadWrite

### Microsoft Teams
- Team.ReadBasic.All
- Channel.ReadBasic.All
- ChannelMessage.Send

## Tips

1. **Always use Application Permissions**: Client credentials flow requires application-level permissions, not delegated permissions.

2. **Admin Consent Required**: Application permissions require admin consent in Azure AD.

3. **Use .default Scope**: For most cases, using `https://graph.microsoft.com/.default` scope will grant all consented permissions.

4. **Test with Graph Explorer**: Use [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) to test your API calls before implementing in n8n.

5. **Check API Documentation**: Always refer to the [Microsoft Graph API documentation](https://docs.microsoft.com/en-us/graph/api/overview) for the latest endpoints and required permissions.
