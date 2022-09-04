import useSWR from "swr";
import { Hour } from "./components/Hour";
import { Events } from "./components/Events";

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR(
    "{ events { id, title, start, end } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <div className="p-4">
      <div className="p-2 max-w-xl bg-zinc-100 relative">
        <Events events={events} />
        <Hour>07:00</Hour>
        <Hour>08:00</Hour>
        <Hour>09:00</Hour>
        <Hour>10:00</Hour>
        <Hour>11:00</Hour>
        <Hour>12:00</Hour>
        <Hour>13:00</Hour>
        <Hour>14:00</Hour>
        <Hour>15:00</Hour>
        <Hour>16:00</Hour>
        <Hour>17:00</Hour>
        <Hour>18:00</Hour>
        <Hour>19:00</Hour>
        <Hour>20:00</Hour>
      </div>
    </div>
  );
}
