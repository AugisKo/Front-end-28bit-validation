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
        if (typeof phone === 'number')
            return true
    }

    isValidMonthName(month) {
        let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis']
        for (let i = 0; i < monthName.length; i++) {
            if (month == monthName[i]) {
                return true
            }
        }
        console.error('ERROR: Month has to be with proper name');
        return false;
    }

    isValidWeekdayName(day) {
        let weekName = ['Monday', 'Tuesday', 'Thirsday', 'Wednesday', 'Friday', 'Sutturday', 'Sunday', 'Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis']
        for (let d = 0; d < weekName.length; d++) {
            if (day == weekName[d]) {
                return true
            }
        }
        console.error('ERROR: Day has to be with proper name');
        return false;
    }

    isValidPersonID() {
        return true;
    }

}

module.exports = Validation;