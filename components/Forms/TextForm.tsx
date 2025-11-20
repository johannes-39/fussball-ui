import React from 'react'
import {SettingProps} from "@/api/types";
import {StyleSheet, TextInput} from "react-native";
import {FormBuilderProps} from "@/components/Forms/FormBuilder";
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        color: "white"
    },
});
const TextForm = ({...props}: FormBuilderProps) => {
    return (
        <TextInput
            style={styles.input}
            value={String(props.selectedValue)}
            onChangeText={props.onChange}
            placeholder="https://example.com/image.jpg"
        />
    )
}
export default TextForm
