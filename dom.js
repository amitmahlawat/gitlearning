class user{
    static count = 0;
    constructor(username,email,password){
        let i = 0
        this.username= username;
        this.email= email;
        this.password = password;
        
        user.count ++;
        

    }
    
    register(){
        console.log(this.username+' is now registered');
    }
    countusers(){
       return user.count;

    }
}



// let bob = new user('bob', 'bob@gmail.com', '12345');

// bob.register()
// user.countusers();



class Member extends user{
    constructor(username,email,password,memberpackage){
    super(username,email,password);
    this.package = memberpackage;
        let todayDate = new Date();
        const membershipactivetillYear = todayDate.getFullYear();
        const membershipactivetillMonth = todayDate.getMonth();
        const membershipactivetillDay = todayDate.getDay();
        this.membershipactivetilldate = new Date(
            membershipactivetillYear,
            membershipactivetillMonth,
            membershipactivetillDay
        );}
        renewMembership() {
            const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
            const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
            const membershipactivetillDay = this.membershipactivetilldate.getDay();
        
            this.membershipactivetilldate = new Date(
              membershipactivetillYear,
              membershipactivetillMonth +1, //just increase the month by 1
              membershipactivetillDay
            );}
            subscriptionActiveTill() {
                console.log(
                  this.username +
                    " is scubscribed to " +
                    this.getPackage() +
                    " uptill " +
                    this.membershipactivetilldate
                );
}
  
    getPackage(){
        return (this.package + ' package');

    }
    


    }
    
    
let mike2 = new Member('mike2','mike2@gmail.com','1232','yearly');
let mike = new Member('mike','mike@gmail.com','123','yearly');
mike2.renewMembership();
console.log(mike2.membershipactivetilldate);

