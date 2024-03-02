import MaxwidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your items delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset in our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of slaes to the preservation and restoration of nature",
  },
];

export default function Home() {
  return (
    <>
      <MaxwidthWrapper>
        <div className="py-20 mx-auto text-center flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray900 sm:text-6xl">
            Your market place for high-quality{" "}
            <span className="text-blue-600">digital assests</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalSell. Every asset in our platform is verified by
            out team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: list products */}
      </MaxwidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxwidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxwidthWrapper>
      </section>
    </>
  );
}
