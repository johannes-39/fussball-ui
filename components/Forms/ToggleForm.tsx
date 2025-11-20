import React from 'react'
import {Switch} from "react-native";
import {SettingProps} from "@/api/types";
import {FormBuilderProps} from "@/components/Forms/FormBuilder";

const ToggleForm = ({...props}: FormBuilderProps) => {
    return (
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={props.selectedValue as boolean ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={props.selectedValue as boolean}
            onValueChange={props.onChange}
        />
    )
}
export default ToggleForm
