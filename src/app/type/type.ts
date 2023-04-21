export interface IListOrganizations {
    id: number,
    fullName: string;
    shortName: string;
    taxpayerIdentificationNumber: number;
    taxRegistrationReasonCode: number; 
    founder: string;
    address: string;
    phoneNumber: number;
    branch?: string;
    officeAddress: string;
}