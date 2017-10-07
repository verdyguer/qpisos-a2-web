export class Listing {
    _id: string;
    title : string;s
    description : string;
    home_type : string;
    price       : number;
    _owner      : string;
    size        : number;
    bedrooms    : number;
    bathrooms   : number;
    location    : { 
      lat: number,
      long: number,
      accurance: number
    };
    lister_name: string;
    lister_url: string;
    images: string
}
