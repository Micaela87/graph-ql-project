import { Decimal } from "@prisma/client/runtime/library";

export interface CreateItemDTO {
    Name: string;
    Description?: string | null;
    Price: Decimal;
    IsDeleted: number;
    IsActive: number;
    CreatedAt: Date;
    UpdatedAt?: Date | null;
    ActivatedAt?: Date | null;
    DeletedAt?: Date | null;
}