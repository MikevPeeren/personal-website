import HomeIcon from "@/components/icons/HomeIcon";
import MailBox from "@/components/icons/MailBox";
import NextLink from "@/components/NextLink";

export default function NotFound() {
  return (
    <div className="flex flex-col px-6 md:px-32 pt-48 gap-28 min-h-screen">
      <div className="text-center items-center justify-center flex flex-col gap-8">
        <h2 className="max-w-max text-6xl">Oops, let&apos;s bring you back</h2>
        <h3 className="text-2xl">
          It&apos;s 404: The page you&apos;re looking for got lost in space
        </h3>
        <div className="flex flex-row gap-6">
          <NextLink
            redirectHref="/"
            linkText="Homepage"
            variant="secondary"
            icon={<HomeIcon />}
          />
          <NextLink
            redirectHref="/contact"
            linkText="Contact"
            variant="secondary"
            icon={<MailBox />}
          />
        </div>
      </div>
    </div>
  );
}
