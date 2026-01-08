import type { INodeProperties } from 'n8n-workflow';

export const oldVersionNotice: INodeProperties = {
	displayName:
		'A newer version of this node type is available. Consider upgrading for improved functionality.',
	name: 'oldVersionNotice',
	type: 'notice',
	default: '',
};

export const returnAllOrLimit: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
];
