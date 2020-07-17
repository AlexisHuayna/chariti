import { ObjectUnsubscribedError } from 'rxjs';

export interface User {
    _id?:string;
    UserEmail?: string;
    UserName?: string;
    UserDescription?: string;
    UserNumberContact?: string;
    UserWallet?: number;
    UserStatus?: boolean;
}

export interface Project {
    UserOwnerId: string;
    ProjectName: string;
    ProjectDescription: string;
    ProjectDateInit: Date;
    ProjectDateClose: Date;
    ProjectState: boolean;
}

export interface Donation {
    UserId: string;
    ProjectId: string;
    DonationAmount: number;
    DonationDate: Date;
    DonationStatus: boolean;
}

export interface Participation {
    UserId: string;
    ProjectId: string;
    ParticipationStatus: boolean;
}
