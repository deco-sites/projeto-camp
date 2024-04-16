import { ListItem } from "../../sections/BannerList.tsx";

export default function ListItems(prop: { items: ListItem[] }) {
  return (
    <ul>
      {prop.items.map((item, index) => (
        <li key={index} className={`${item.color ?? "text-gray-800"}`}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
