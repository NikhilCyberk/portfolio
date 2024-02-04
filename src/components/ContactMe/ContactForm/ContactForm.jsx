import "./ContactForm.css"

export default function ContactForm() {
    return (
        <div className="contact-form-contant">
            <form action="">
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lasttname" placeholder="Last Name" />

                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" rows={3}></textarea>

                <button>SEND</button>
            </form>

        </div>
    )
}