export interface Applicant {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    Experience?: number;
    City?: string;
    Email?: string;
    Phone?: string;
    Age?: number;
    Gender?: string;
    CvId?: number;
    Position?: string;
    Skills?: string[];
    IsActive?:boolean;
}