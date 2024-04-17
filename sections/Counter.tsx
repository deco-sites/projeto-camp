import Counter from "deco-sites/projeto-camp/islands/Counter-State.tsx";
import CounterSignal from "deco-sites/projeto-camp/islands/Counter-Signal.tsx";

export default function CounterSection() {
  return (
    <div class="p-16">
      <Counter />
      <CounterSignal />
    </div>
  );
}
