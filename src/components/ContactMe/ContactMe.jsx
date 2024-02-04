import ContactCardInfo from "./ContactCardInfo/ContactCardInfo"
import ContactForm from "./ContactForm/ContactForm"
import "./ContactMe.css"

export default function ContactMe() {
    return (
        <section className="contact-container">
            <h5> Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactCardInfo
                        icoUrl="https://raw.githubusercontent.com/tandpfun/skill-icons/de91fca307a83d75fc5b1f6ce24540454acead41/icons/Gmail-Dark.svg"
                        text="knikhil128@gmail.com"
                    />

                    <ContactCardInfo
                        icoUrl="https://raw.githubusercontent.com/tandpfun/skill-icons/de91fca307a83d75fc5b1f6ce24540454acead41/icons/Github-Dark.svg"
                        text="https://github.com/NikhilCyberk"
                    />
                </div>
                <div style={{ flex: 2 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}