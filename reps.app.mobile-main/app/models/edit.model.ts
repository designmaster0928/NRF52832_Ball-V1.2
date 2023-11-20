export interface EditParams {
  title: string;
  inputs: Array<EditInputParams>;
}

export interface EditInputParams {
  title: string;
  dataId: string;
  data?: string;
}

export type EditValuesObject = Record<string, string | undefined>;
