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

    last_name: string;
    gender: string;
    approved: boolean;
    first_name: string;
    updated_at: number;
    created_at: number;
    url: string;
    id: number;
    source: object;

    constructor(last_name: string, gender: string, approved: boolean, first_name: string, updated_at: number, created_at: number, url: string,
        id: number, source: object) {
            this.last_name = last_name;
            this.gender = gender;
            this.approved = approved;
            this.first_name = first_name;
            this.updated_at = updated_at;
            this. created_at = created_at;
            this.url = url;
            this.id = id;
            this.source = source;
            

    }
}