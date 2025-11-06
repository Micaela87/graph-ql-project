import { Decimal } from "@prisma/client/runtime/library";

export interface DeleteItemDTO {
    Uuid: string;
    Name: string;
    Description?: string | null;
    Price: Decimal;
    IsDeleted: number;
    IsActive: number;
    CreatedAt: Date;
    UpdatedAt: null;
    ActivatedAt: null;
    DeletedAt: Date;
}