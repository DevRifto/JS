class Devoloper {
  name;
  profation = "web devoloper";
  location;
  constructor(name,location){
    this.name = name;
    this.location = location;
  }
  active(time) {
    console.log(`I am ${time} Active`);
  }
  course(courseName) {
    console.log(`I am Doing ${courseName} Course`);
  }
}
const Rifato = new Devoloper('Abdullah Al Miraz', 'Dhaka');
console.log(Rifato);
// Rifato.active("Full Time");
// Rifato.course("Programing Hero");
