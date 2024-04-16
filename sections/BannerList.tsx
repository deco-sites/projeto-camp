import { Quotes } from "deco-sites/projeto-camp/loaders/zenquotes.ts";
import ListItens from "../components/banner/ListItems.tsx";
import Rating from "deco-sites/projeto-camp/components/daisy/Rating.tsx";
import { Section } from "deco/blocks/section.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { AppContext } from "deco-sites/projeto-camp/apps/site.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  img: ImageWidget;
  html: HTMLWidget;
  section: Section;
  title: string;
  description: string;
  items: ListItem[];
  quote?: Quotes;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return <div className="text-red-800">Error: {error?.message}</div>;
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  if (!props.quote || props.quote?.data.length === 0) {
    return { ...props, quote: { data: "Opsss" } };
  }

  return props;
};

export default function BannerList(props: Props) {
  return (
    <>
      <div class="bg-primary p-4">
        <Image src={props.img} width={600} height={500} />
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
        {props.section && <props.section.Component {...props.section} />}
        <button {...usePartialSection({ props: { title: "PARTIAL" } })}>
          Click me
        </button>
        <Rating maxRating={5} />
        <h1 className="text-2xl font-bold">{props.title}</h1>
        {props.description && (
          <p className="text-gray-600">{props.description}</p>
        )}
        <ListItens items={props.items} />
        {props.quote && <p>{props.quote.data[0]}</p>}
      </div>
    </>
  );
}
