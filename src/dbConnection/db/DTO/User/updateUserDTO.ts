export interface UpdateUserDTO {
    Uuid: string;
    FirstName: string;
    LastName: string;
    Email: string; // Has unique constraint
    Password: string;
    IsActive: number;
    IsDeleted: number; // Logical deletion

    // DateTime to register operations on table
    CreatedAt: Date;
    ActivatedAt?: Date;
    UpdatedAt: Date;
    DeletedAt?: Date; // Only for logical deletion
}