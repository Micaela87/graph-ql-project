export interface UpdateItemDTO {
    Uuid: string;
    Name: string;
    Description?: string | null;
    Price: number;
    IsDeleted: number;
    IsActive: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    ActivatedAt?: Date | null;
    DeletedAt?: Date | null;
}