export class IFace {
    /* EXAMPLE DATA:
    {"last_name":"Kozatek",
    "gender":"male",
    "approved":true,
    "first_name":"Rab",
    "updated_at":1627199927.122272,
    "created_at":1627199927.122272,
    "url":"https:\/\/res.cloudinary.com\/tinyfac-es\/image\/upload\/w_1024,h_1024,c_fit\/v1627199925\/facebook\/zqsp42oro7nzxzzmbee1.jpg",
    "id":44,
    "source":{"created_at":1627199913.878633,"name":"Devin Halladay","id":45,"updated_at":1627199913.878633,"platform":"facebook"}}
    */

    // I don't need all of the provided data from the json, but I will keep some in case I want them later
    last_name: string;
    gender: string;
    first_name: string;
    url: string;

    constructor(last_name: string, gender: string, first_name: string, url: string) {
            this.last_name = last_name;
            this.gender = gender;
            this.first_name = first_name;
            this.url = url;
            

    }
}