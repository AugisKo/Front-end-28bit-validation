class Validation {

    isValidFirstName(firstName) {
        if (!this.isValidMessage(firstName)) {
            console.error('ERROR: First Name has to be a text');
            return false;
        }
        if (firstName.length < 2) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (!this.isValidMessage(lastName)) {
            console.error('ERROR: Last Name has to be a text');
            return false;
        }
        if (lastName.length < 2) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());

        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            console.error('ERROR: Message has to be a text');
            return false;
        }
        return true;
    }

    isValidPhoneNumber() {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }

}

module.exports = Validation;