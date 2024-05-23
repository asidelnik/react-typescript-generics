import { FieldsData } from './IGenericFields';
import { IDataUnion } from './IUnion';

export interface IPageMetaData {
  name: string;
  itemsLabel: string;
  detailsLabel: string;
  addLabel: string;
  getItemsUrl: string;
  getItemDetailsUrl: string;
  fields: FieldsData<IDataUnion>;
}
