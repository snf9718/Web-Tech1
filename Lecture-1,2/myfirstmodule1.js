exports.hello = function(fullname){ //function exported here
    console.log("Hi "+fullname+". The time is:"+new Date().getHours()+
    " Hours and "+new Date(). getMinutes()+" minutes!");
    return Date();//prints the date 
};
