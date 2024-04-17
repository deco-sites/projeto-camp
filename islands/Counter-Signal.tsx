import { effect, useSignal } from "@preact/signals";

export default function CounterSignal() {
  const count = useSignal(0);

  const increment = () => {
    count.value++;
  };

  effect(() => {
    alert("Você clicou " + count.value + " vezes");
  });

  return (
    <div class="p-4 rounded-xl border">
      <h2 class="text-2xl font-bold">useSignal hooks</h2>
      <p>Você clicou {count} vezes</p>
      <button class="btn" onClick={increment}>
        Clique Aqui
      </button>
    </div>
  );
}
