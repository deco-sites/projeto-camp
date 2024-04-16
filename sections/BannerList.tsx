import { Quotes } from "deco-sites/projeto-camp/loaders/zenquotes.ts";
export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  title: string;
  description: string;
  items: ListItem[];
  quote?: Quotes;
}

export default function BannerList(props: Props) {
  return (
    <>
      <div class="bg-primary p-4">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        {props.description && (
          <p className="text-gray-600">{props.description}</p>
        )}
        <ul>
          {props.items.map((item, index) => (
            <li key={index} className={`${item.color ?? "text-gray-800"}`}>
              {item.text}
            </li>
          ))}
        </ul>
        {props.quote && <p>{props.quote.data[0]}</p>}
      </div>
    </>
  );
}
