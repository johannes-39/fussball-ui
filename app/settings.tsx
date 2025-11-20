import {Platform, StyleSheet, Button, Alert, Text, View} from 'react-native';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {SettingProps} from "@/api/types";
import FormBuilder from "@/components/Forms/FormBuilder";
import {updateSetting} from "@/api/footballSlice";
import {router} from "expo-router";


export default function Settings() {
    const { settings } = useSelector((state: RootState) => state.football);
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (setting: SettingProps, value: any) => {
        dispatch(updateSetting({id: setting.id, selectedValue: value }));
    }
    return (
        <View>
            {
                settings.map((setting: SettingProps, index) => (
                    <View key={index} style={styles.stepContainer}>
                        <FormBuilder {...setting} onChange={(value) => handleChange(setting, value)}/>
                    </View>
                ))
            }
            <Button title={"startseite"} onPress={() => router.push('/')}/>
        </View>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 16,
    },
    reactLogo: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'white',
    },
});
