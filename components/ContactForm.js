ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className={'contactForm'}>
                <div className={'firstRowContactForm'}>
                    <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName} />
                </div>
                <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName} />
                <div className={'secondRowContactForm'}>
                    <input type={'email'} placeholder={'Email'} value={this.props.contact.email} />
                <button type={'submit'}>Dodaj kontakt</button>
                </div>
            </form>
        )
    },
})

