let user = {
    name: "Hariom",

    showName: () => {
        console.log(this.name);
    }
};

let user2 = {
    name: "Hariom",

    showName: function() {
        console.log(this.name);
    }
};

function showArrowName() {
    user.showName();
}

function showNormalName() {
    user2.showName();
}