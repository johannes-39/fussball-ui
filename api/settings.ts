import {SettingProps} from "@/api/types";

export const Settings: SettingProps[] = [{
    id: 2,
    label: "Benachrichtigungen",
    selectedValue: true,
    type: "toggle"
}, {
    id: 3,
    label: "Standard-Spielerbetrag",
    selectedValue: "100",
    type: "input"
},{
    id: 4,
    label: "Club-Name",
    selectedValue: "SV Poppenreuth",
    type: "input"
}
];