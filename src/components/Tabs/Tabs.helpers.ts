export const ID_TYPE = {
  tab: 'tab',
  panel: 'panel',
} as const;

export type IdType = (typeof ID_TYPE)[keyof typeof ID_TYPE];

export interface ElementIdParams {
  baseId: string;
  type: IdType;
  value: string;
}

export const getElementId = (params: ElementIdParams) => {
  const { baseId, type, value } = params;

  return `${baseId}-${type}-${value}`;
};
