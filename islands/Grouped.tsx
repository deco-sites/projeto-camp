import { effetc, signal } from "@preact/signals";

export interface Person {
  firstName: string;
  lastName: string;
}

const person = signal<Personal>({
  firstName: "John",
  lastName: "Doe",
});

effetc(() => {
  console.log("Grouped Lastname", person.value.lastName);
});

export default function Nested() {
  const increment = () => {
    userCount.value++;
  };

  return (
    <div class="p-4 rounded-xl border">
      <h2 class="text-2xl font-bold">Signals</h2>
      <p>Você clicou {userCount.value} vezes</p>
      <button class="btn" onClick={increment}></button>
    </div>
  );
}
