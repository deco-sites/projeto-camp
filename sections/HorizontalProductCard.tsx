import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "deco-sites/projeto-camp/components/ui/Button.tsx";

export interface ProductDetail {
  image: ImageWidget;
  title: string;
  description: string;
  price: string;
}

export interface Props {
  items: ProductDetail[];
}

export default function HorizontalProductCard(prop: Props) {
  return (
    <>
      <div class="bg-secondary p-4">
        {prop.items &&
          prop.items.map((item) => (
            <div class="bg-gray-200 flex flex-col md:flex-row space-y-4 mb-2 rounded p-4">
              <div class="rounded">
                <img src={item.image} alt="" class="w-full md:w-36 rounded" />
              </div>
              <div class="flex-1 flex justify-center items-center">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div class="flex flex-col justify-center items-center space-y-2">
                <span class="font-bold">$ {item.price}</span>
                <Button>Comprar</Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
