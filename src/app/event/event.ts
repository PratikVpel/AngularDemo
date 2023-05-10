export class Event {
    events:string;
    participantName:string;
    address:string;
    email:string;
    contactNo:number;
    eventDate:string;
    gender:string;

    constructor(events:string="",participantName:string="",address:string="",email:string="",contactNo:number=0,eventDate:string="",gender:string="")
    {
        this.events = events;
        this.participantName = participantName;
        this.address = address;
        this.email = email;
        this.contactNo = contactNo;
        this.eventDate = eventDate;
        this.gender = gender;
    }


}
