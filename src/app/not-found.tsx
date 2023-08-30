import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="bg-gradient-to-r from-[#FFC94B] via-[#f9a66c] to-[#F17A7E] bg-clip-text font-extrabold text-transparent">
        Page not Found
      </h2>

      <Link href="/blog" title="blog" className="font-bold text-white">
        Return Home
      </Link>
    </div>
  );
}
