export interface DeleteUserDTO {
    Uuid: string;
    FirstName: string;
    LastName: string;
    Email: string; // Has unique constraint
    Password: string;
    IsActive: number;
    IsDeleted: number; // Logical deletion

    // DateTime to register operations on table
    CreatedAt: Date;
    ActivatedAt: null;
    UpdatedAt: null;
    DeletedAt: Date; // Only for logical deletion
}