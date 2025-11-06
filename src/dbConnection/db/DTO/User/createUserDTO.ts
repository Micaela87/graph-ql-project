export interface CreateUserDTO {
    FirstName: string;
    LastName: string;
    Email: string; // Has unique constraint
    Password: string;
    IsActive: number;
    IsDeleted: number; // Logical deletion

    // DateTime to register operations on table
    CreatedAt: Date;
    ActivatedAt: Date | null;
    UpdatedAt: Date | null;
    DeletedAt: Date | null; // Only for logical deletion
}