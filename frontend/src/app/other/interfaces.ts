export interface User {
    _id?: string;
    UserEmail?: string;
    UserName?: string;
    UserDescription?: string;
    UserNumberContact?: string;
    UserWallet?: number;
    UserStatus?: boolean;
}

export interface Project {
    _id?: string;
    UserOwnerId: string;
    ProjectName: string;
    ProjectDescription: string;
    ProjectDateInit: Date;
    ProjectDateClose: Date;
    ProjectState: boolean;
}

export interface Donation {
    _id?: string;
    UserId: string;
    ProjectId: string;
    DonationAmount: number;
    DonationDate: Date;
    DonationStatus: boolean;
}

export interface EmbeddedDonation {
    _id?: string;
    UserId: string;
    Project?: Project;
    DonationAmount: number;
    DonationDate: Date;
    DonationStatus: boolean;
}

export interface Participation {
    _id?: string;
    UserId: string;
    ProjectId: string;
    ParticipationStatus: boolean;
}

export interface EmbeddedParticipation {
    _id: string;
    User?: User;
    Project?: Project;
    ParticipationStatus: boolean;
}
