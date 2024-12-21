export interface PhoneData {
    color?: string;
    capacity?: string;
    "capacity GB"?: number;
}

export interface Phone {
    id: string;
    name: string;
    data: PhoneData | null;
}