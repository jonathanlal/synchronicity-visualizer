import { normalizeData } from "@/actions/normalizeData";

export default function Normalize() {
  return (
    <div className="container mx-auto mt-20">
      <form>
        <button formAction={normalizeData} type="submit">
          Normalize
        </button>
      </form>
    </div>
  );
}
