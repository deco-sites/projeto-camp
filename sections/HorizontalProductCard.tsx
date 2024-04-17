import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "deco-sites/projeto-camp/components/ui/Button.tsx";
import { AppContext } from "deco-sites/projeto-camp/apps/site.ts";
import Image from "apps/website/components/Image.tsx";
import Loading from "deco-sites/projeto-camp/components/daisy/Loading.tsx";
import { LoadingFallback } from "deco-sites/projeto-camp/sections/Product/ProductDetails.tsx";
import VoteProduct from "deco-sites/projeto-camp/islands/VoteProduct.tsx";

export interface ProductDetail {
  image: ImageWidget;
  title: string;
  description: string;
  price: string;
}

export interface Props {
  items: ProductDetail[];
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <>
      <div class="bg-gray-200 flex flex-col md:flex-row space-y-4 mb-2 rounded p-4">
        <div class="rounded">
          <Image
            src="https://s5.static.brasilescola.uol.com.br/be/2023/08/cultura-nordeste-quadrilha.jpg"
            alt="Cultura do Nordeste: elementos, origens"
            class="w-full md:w-36 rounded"
            width={144}
          />
        </div>
        <div class="flex-1 flex justify-center items-center">
          <h3>Cultura do Nordeste: elementos, origens</h3>
          <p>
            "A cultura do Nordeste do Brasil é o conjunto de tradições e de
            manifestações artísticas e culturais que exprimem a identidade da
            sua população" Veja mais sobre "Cultura do Nordeste" em:
            https://brasilescola.uol.com.br/brasil/aspectos-culturais-regiao-nordeste.htm
          </p>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <a href="/cultura">Para saber mais</a>
        </div>
      </div>
    </>
  );
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  if (!props.items || props.items?.length === 0) {
    return (
      <>
        <div class="bg-gray-200 flex flex-col md:flex-row space-y-4 mb-2 rounded p-4">
          <div class="rounded">
            <Image
              src=""
              alt="Cultura do Nordeste: elementos, origens"
              class="w-full md:w-36 rounded bg-slate-500"
              width={144}
            />
          </div>
          <div class="flex-1 flex justify-center items-center">
            <LoadingFallback />
          </div>
          <div class="flex flex-col justify-center items-center space-y-2">
            <LoadingFallback />
          </div>
        </div>
      </>
    );
  }

  return props;
};

export default function HorizontalProductCard(prop: Props) {
  return (
    <>
      <div class="bg-secondary p-4">
        {prop.items &&
          prop.items.map((item) => (
            <div class="bg-gray-200 flex flex-col md:flex-row space-y-4 mb-2 rounded p-4">
              <div class="rounded">
                <Image
                  src={item.image}
                  alt={item.title}
                  class="w-full md:w-36 rounded"
                  width={144}
                />
                <VoteProduct />
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
