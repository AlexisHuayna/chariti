import { ObjectUnsubscribedError } from 'rxjs';

export interface UserInterface{
    UserEmail: string;
    UserName: string;
    UserDescription: string;
    UserNumberContact: string;
    UserWallet: number;
    UserStatus: boolean;
}

export interface ProjectInterface{
    UserOwnerId: string;
    ProjectName: string;
    ProjectDescription: string;
    ProjectDateInit: Date;
    ProjectDateClose: Date;
    ProjectState: boolean;
}

export interface DonationInterface{
    UserId: string;
    ProjectId: string;
    DonationAmount: number;
    DonationDate: Date;
    DonationStatus: boolean;
}

export interface ParticipationInterface{
    UserId: string;
    ProjectId: string;
    ParticipationStatus: boolean;
}