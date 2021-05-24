class Validation {

    isValidFirstName(firstName) {
        if (!this.isValidMessage(firstName)) {
            console.error('ERROR: First Name has to be a text');
            return false;
        }
        if (firstName.length < 2) {
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]) {
            return false;
        }
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
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
        //console.error('ERROR: Email address has wrong format');
        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            console.error('ERROR: Message has to be a text');
            return false;
        }
        return true;
    }

    isValidPhoneNumber(phone) {
        // var str = phone;
        // if (str.charAt(1) === '+') { str = str.slice(0) };
        // if (typeof str === 'number' && str.length === 11) {
        //    return true
        //}
    }

    isValidMonthName(month, lang) {
        const monthName = {
            en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            lt: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        }
        if (!monthName[lang].includes(month)) {
            console.error('ERROR: Not proper month name');
            return false;
        }
        return true;
    }

    isValidWeekdayName(day, lang) {
        const weekdayName = {
            en: ['Monday', 'Tuesday', 'Thirsday', 'Wednesday', 'Friday', 'Sutturday', 'Sunday'],
            lt: ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'],
        }
        if (!weekdayName[lang].includes(day)) {
            console.error('ERROR: Not proper weekday name');
            return false;
        }
        return true;
    }

    isValidPersonID() {
        return true;
    }

}

module.exports = Validation;

/*

''+parseInt('+2148562erfds'.slice(1)) === '+2148562erfds'.slice(1)

isValidLastName(lastName) {
    const errors = [];
    const nonEmptyString = [...error, ...this.isValidMessage(lastName)]    // [], ['ERROR']

    if (lastName.length < 2) {
        errors.push('per trumpas')
    }

    return errors;
}*/