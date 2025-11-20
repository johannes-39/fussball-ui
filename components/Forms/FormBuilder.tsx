import React from 'react'
import {SettingProps} from "@/api/types";
import TextForm from "@/components/Forms/TextForm";
import ToggleForm from "@/components/Forms/ToggleForm";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",        // <-- nebeneinander!
        alignItems: "center",        // (optional) vertikal zentrieren
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 8,
    },
    labelText: {
        width: '50%',
        color: 'white',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500'
    },
    inputArea: {
        width: '50%',
    }
});
export type FormBuilderProps = SettingProps & {
    onChange: (value: any) => void
}
const FormBuilder = ({ onChange, ...props }: FormBuilderProps) => {
    let Component = null;

    if (props.type === "input") {
        Component = <TextForm {...props} onChange={onChange} />;
    }
    if (props.type === "toggle") {
        Component = <ToggleForm {...props} onChange={onChange}/>;
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.labelText}>{props.label}</Text>
            <View style={styles.inputArea}>
                {Component}
            </View>

        </View>
    );
}
export default FormBuilder
