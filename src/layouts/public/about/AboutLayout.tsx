import { About3 } from "@/src/components/about3";
export default function AboutLayout() {
    return (
        <div className="mx-auto flex min-h-[70vh] w-full flex-col px-6 sm:px-10 ">
            <About3
                title="About Us"
                description="We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster."
                mainImage={{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg", alt: "about" }}
                secondaryImage={{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg", alt: "about" }}
                breakout={{
                    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg", alt: "logo", title: "Hundreds of blocks at Shadcnblocks.com",
                    description: "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
                    buttonText: "Discover more", buttonUrl: "https://www.shadcnblocks.com"
                }}
                companies={[{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg", alt: "Arc" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg", alt: "Descript" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg", alt: "Mercury" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg", alt: "Ramp" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg", alt: "Retool" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg", alt: "Watershed" }]}
                achievementsTitle="Our Achievements in Numbers"
                achievementsDescription="Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth."
                achievements={[
                { label: "Weekly downloads ", value: "3M+" },
                { label: "GitHub stars", value: "130K+" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Countries served", value: "190+" }]}
                contentSections={[{
                    title: "Our Vision",
                    content: "For years, the process of building custom software has remained challenging. Today, visual builders exist, but tailored solutions still require technical expertise and a lot of time. This is a problem for businesses and individuals alike.\n\nWhat if you could create custom software without writing a single line of code? What if you could build your own tools.\n\nWith our platform, you can! Our tools let you design layouts and create functionality—all without needing to code.\n\nWe believe that everyone should be able to build their own solutions, regardless of their technical background."
                },
                { title: "Our Creators", content: "Our company has been building web tools for over a decade, focusing on efficiency and user control in every project. We know that the best solutions are the ones that you can create yourself.\n\nWe initially developed these solutions for our own team, and now everyone can benefit from them too. We are proud to offer a platform that is accessible to all, regardless of technical expertise.\n\nOur team is made up of talented individuals who are passionate about creating tools that empower users to build their own solutions with ease. We are dedicated to helping you achieve your goals." }]} />
        </div>
    );
}