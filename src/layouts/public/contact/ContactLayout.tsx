import { Contact7 } from "@/src/components/contact7";
export default function ContactLayout() {
    return (
        <section className="mx-auto w-full">
            <Contact7
                title="Contact Us"
                description="We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster."
                emailLabel="Email"
                emailDescription="We respond to all emails within 24 hours."
                email="saigoncodon52@gmail.com"
                officeLabel="Office"
                officeDescription="Drop by our office for a chat."
                officeAddress="1 Eagle St, Brisbane, QLD, 4000"
                phoneLabel="Phone"
                phoneDescription="We're available Mon-Fri, 9am-5pm."
                phone="+84 906 888 888"
                chatLabel="Live Chat"
                chatDescription="Get instant help from our support team."
                chatLink="Start Chat" />
        </section>
    );
}