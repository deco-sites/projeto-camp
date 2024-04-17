import { useEffect, useMemo, useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert("increment");
  }, [count]);

  const double = useMemo(() => {
    console.log("calculete double");
    return number * 2;
  }, [number]);

  return (
    <div class="p-4 rounded-xl border">
      <h2 class="text-2xl font-bold">useState hooks</h2>
      <p>Você clicou {count} vezes</p>
      <p>O valor dobrado é: {double}</p>
      <button class="btn" onClick={increment}>
        Clique Aqui
      </button>
      <input
        type="text"
        value={count}
        onInput={(e) => setNumber(Number(e.currentTarget.value))}
      />
    </div>
  );
}
