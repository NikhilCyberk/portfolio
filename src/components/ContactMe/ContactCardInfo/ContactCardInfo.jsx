import './ContactCardInfo.css'

export default function ContactCardInfo({ icoUrl, text }) {
    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={icoUrl} alt={text} />
            </div>
            <p>{text}</p>

        </div>
    )
}