const event = {
    name : "birthday party",
    guestList: ['yash', 'rajat', 'niishi'],
    printGuestList() {
        console.log('Guest are iinvited in today ' + this.name);
        this.guestList.forEach((g) => {
            console.log(g + 'is attending ' + this.name);
        })
    }
}

event.printGuestList();