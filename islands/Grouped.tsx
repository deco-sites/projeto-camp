import { effect, signal } from "@preact/signals";
import { userCount } from "deco-sites/projeto-camp/sdk/userCount.ts";

export interface Person {
  firstName: string;
  lastName: string;
}

const person = signal<Person>({
  firstName: "John",
  lastName: "Doe",
});

effect(() => {
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
