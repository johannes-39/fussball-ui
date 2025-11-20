export type PlayerProps = {
    id?: number;           // optional, da beim Erstellen noch nicht vorhanden
    firstName: string;
    lastName: string;
    position: string;
    birthDate: string;     // ISO-Date String, z.B. "1990-05-01"
    club: string;
    imageUrl?: string;  // optionales Feld für die Bild-URL
    number: number;
    amount?: number;
}

export type CostProps = {
    id?: number;           // optional, da beim Erstellen noch nicht vorhanden
    playerId: number;
    amount: number;
    description?: string;
    paymentDate?: string; // ISO-Date String
}

export type SettingProps = {
    id?: number;
    label: string;
    selectedValue: string | boolean;
    type: 'dropdown' | 'toggle' | 'input';
    values?: { label: string; value: string | number }[];
}