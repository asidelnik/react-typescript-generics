import { IItemDetails } from "../../interfaces/IGenericFields";
import { IGenericItemDetailsProps } from "../../interfaces/IGenericItemDetailsProps";

export default function GenericItemDetails({ fields, data }: IGenericItemDetailsProps) {
  const itemFields: IItemDetails[] = Object.values(fields)
    .filter(c => c.itemDetails)
    .map(c => c.itemDetails as IItemDetails);

  return (
    <>
      {itemFields.map(field => {
        return (
          <div key={field.name}>
            <p>{field.label}</p>
            <p>{data[field.name]}</p>
          </div>
        )
      })}
    </>
  )
}