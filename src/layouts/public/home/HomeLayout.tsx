import CtaSection from "./CtaSection";
import FeaturesSection from "./FeaturesSection";
import Section from "./Section";
import ShowcaseSection from "./ShowcaseSection";

export default function HomeLayout() {
    return (
        <>
            <Section />
            <FeaturesSection />
            <ShowcaseSection />
            <CtaSection />
        </>
    );
}
