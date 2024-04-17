import { effect, useSignal } from "@preact/signals";

export default function VoteProduct() {
  const voted = useSignal(false);
  const totalVotes = useSignal(0);

  const handleClick = () => {
    totalVotes.value++;
    voted.value = true;
  };

  effect(() => {
    console.log("Total de votos: " + totalVotes.value);
  });

  const color = voted.value ? "text-[#4CAF50]" : "text-[#A0AEC0]";

  return (
    <div>
      <div onClick={handleClick} class={`cursor-pointer ${color} flex`}>
        <span>{totalVotes.value}</span>
        {voted.value
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
              <path d="M9 10h.01" />
              <path d="M15 10h.01" />
              <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
          )
          : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-smile"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
              <path d="M8 13a4 4 0 1 0 8 0" />
            </svg>
          )}
      </div>
    </div>
  );
}
