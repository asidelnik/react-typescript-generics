import { IFormField } from "./IGenericFields";


export interface IUsePostServerData {
  formFields: IFormField[];
  requestUrl: string;
  onSubmitCloseModal: () => void;
}
