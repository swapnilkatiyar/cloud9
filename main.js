var user = {
    userName: "swapnil",
    userAge: 25,
    userEmailId:"hello@example.com",
    printUserEmail: function(){
        console.log(this.userName);
    }
};

user.printUserEmail();