console.log("WECOME IN ADDRESSBOOK IN JS")
class AddressBookContact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName,lastName,address,city,state,zip,phone,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    get firstName(){return this._firstName;}
    set(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(firstName))
        this._firstName=firstName;
        else throw 'Firstname is invalid';
    }
    get lastName(){return this._lastName;}
    set (lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(lastName))
        this._lastName=lastName;
        else throw 'Lastname is invalid';
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        this._address = address;
        else throw 'Address is invalid';
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        this._city=city;
        else throw 'City name is invalid';
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        this._state=state;
        else throw 'State name is invalid';
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw 'Zip is invalid';
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw 'Phone number is invalid';
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        this._email=email;
        else throw 'Email pattern not valid';
    }

    toString()
    {
        return "\nFirstName:"+this.firstName+" ,LastName:"+this.lastName+" ,Address:"+this.address+" ,City:"+this.city+" ,State:"+this.state+" Zip:"+this.zip+" ,Phone:"+this.phone+",Email:"+this.email;
    }
}


/*- Ability to create a New Address Book array and add new Contacts to it */

let addressArr = new Array();
try
{
    let address1 = new AddressBookContact("Sudhanshu","Yadav","Pitampua","Delhi","New Delhi",110008,88888888,"sudhanshu@gmail.com");
    let address2= new AddressBookContact("subbo","yadav","patel nagar","delhi","new delhi",442203,1234567891,"ok@gmail.com");  
    addressArr.push(address1); //push record array
    addressArr.push(address2);

    console.log(addressArr); //print
}
catch(ex)
{
    console.error(ex);
}

/* Ability to find existing contact person using their name and edit it */
function SearchName(addressbook)
{
    if(addressbook.firstName=="Sudhanshu") return addressbook;
}
let searchResult =addressArr.find(SearchName);
console.log("Result after searching:-  "+searchResult);

/*  Ability to find a person with name delete it from the array */

function DeleteAddress(addressbook)
{
    let resultAddress = SearchName(addressbook);
    var index= addressArr.indexOf(resultAddress);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")