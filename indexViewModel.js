function IndexViewModel() {
    const self = this

    self.name = ko.observable("").extend({
        required: true,
        minLength: 4,
        validation: {
            message: 'Please enter at least 5 characters',
            validator: value => value.length >= 5
        }
    })
    self.birthDate = ko.observable("").extend({
        required: true
    })
    self.job = ko.observable("").extend({
        required: true
    })

    
    self.handleSubmit = () => {
        let errors = ko.validation.group(this)
        if (errors().length > 0) return errors.showAllMessages()

        const payload = {
            name: self.name(),
            birthDate: self.birthDate(),
            job: self.job()
        }

        console.log('payload:')
        console.log(payload)
    }
}

ko.applyBindings(new IndexViewModel())