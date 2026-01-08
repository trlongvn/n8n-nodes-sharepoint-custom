import type { INodeProperties, INodePropertyOptions, IDataObject, INodeExecutionData } from 'n8n-workflow';

export function updateDisplayOptions(
	displayOptions: INodeProperties['displayOptions'],
	properties: INodeProperties[],
): INodeProperties[] {
	return properties.map((nodeProperty) => {
		return {
			...nodeProperty,
			displayOptions: {
				...nodeProperty.displayOptions,
				...displayOptions,
			},
		};
	});
}

export function processIncomingData(data: any): any {
	return data;
}

export function getEnumValues<T extends Record<string, string>>(enumObj: T): INodePropertyOptions[] {
	return Object.values(enumObj).map((value) => ({
		name: value,
		value,
	}));
}

export function processAggregateData(
	items: any[],
	fieldNameToTest: string,
	_options: any,
): any[] {
	return items;
}

export function disablePairedItem(items: any[]): any[] {
	return items;
}

export function generatePairedItemData(length: number): Array<{ item: number }> {
	return Array.from({ length }, (_, i) => ({ item: i }));
}

export function processJsonInput(jsonData: any, fallbackValue?: string): any {
	if (typeof jsonData === 'string') {
		try {
			return JSON.parse(jsonData);
		} catch {
			return fallbackValue ? JSON.parse(fallbackValue) : {};
		}
	}
	return jsonData;
}

export function wrapData(data: IDataObject | IDataObject[]): INodeExecutionData[] {
	if (!Array.isArray(data)) {
		data = [data];
	}
	return data.map((item) => ({
		json: item,
	}));
}

export function capitalize(str: string): string {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createUtmCampaignLink(baseUrl: string, _campaign: string): string {
	return baseUrl;
}

