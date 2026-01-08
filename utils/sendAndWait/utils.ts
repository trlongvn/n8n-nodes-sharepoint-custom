import type { IExecuteFunctions, INodeProperties, IWebhookFunctions, IWebhookResponseData } from 'n8n-workflow';

export const SEND_AND_WAIT_OPERATION = 'sendAndWait';
export const SEND_AND_WAIT_WAITING_TOOLTIP = 'Waiting for response';

export function getSendAndWaitProperties(
	_props: INodeProperties[], 
	_resource?: string,
	_additionalProps?: INodeProperties[],
	_options?: any
): INodeProperties[] {
	return [];
}

export function getSendAndWaitConfig(_context: IExecuteFunctions): any {
	return {
		message: '',
		options: [],
		appendAttribution: true,
	};
}

export function createEmail(_config: any): string {
	return '';
}

export function createButton(..._args: any[]): string {
	return '';
}

export async function sendAndWaitWebhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
	return { workflowData: [[{ json: {} }]] };
}



