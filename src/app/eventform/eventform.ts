export class Eventform {
    events:String;
    participantName: String;
    address:String;
    email:String;
    contactNo:number;
    eventDate:String;
    newsLetter:Boolean;
    constructor(events:String="",participantName: String="",address:String="",email:String="",contactNo:number=0,eventDate:String="",newsLetter:Boolean=true)
    {
        this.events = events;
        this.participantName = participantName;
        this.address = address;
        this.email = email;
        this.contactNo = contactNo;
        this.eventDate = eventDate;
        this.newsLetter = newsLetter;
    }
}
