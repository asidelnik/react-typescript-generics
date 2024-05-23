import { IItemDetails } from "../../interfaces/IGenericFields";
import { IGenericItemDetailsProps } from "../../interfaces/IGenericItemDetailsProps";

export default function GenericItemDetails({ fields, data }: IGenericItemDetailsProps) {
  const itemFields: IItemDetails[] = Object.values(fields)
    .filter(c => c.itemDetails)
    .map(c => c.itemDetails as IItemDetails);

  return (
    <>
      <section className="item-details">
        {itemFields.map(field => {
          return (
            <div key={field.name}>
              <p className="label">{field.label}</p>
              <p className="value">{data[field.name]}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}