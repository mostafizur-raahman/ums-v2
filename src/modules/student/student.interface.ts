export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    email: string;
    dob: string;
    contactNo: string;
    gender: string;
    address: string;
    isActive: boolean;
};
