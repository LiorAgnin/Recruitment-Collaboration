export interface Applicant {
    Id?: number;
    FirstName?:string;
    LastName?:string;
    Experience?: number;
    City?: string;
    Email?: string;
    Phone?: string;
    Age?: number;
    Gender?: string;
    CV?: any[];
    Position?: string;
    Skills?: string[];
    IsActive?:boolean;
}

