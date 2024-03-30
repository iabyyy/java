/*in java script a constructor gets called when an object is created using the new keyword .
*/



class student
{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
    }
    display()
    {
        document.write(this.name+"<br>");
        document.write(this.age+"<br>");
        document.write(this.email);
    }
}
let c =new student("anu",20,"anu@gmail.com");
c.display()