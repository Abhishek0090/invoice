import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CreateBill = () => {
    return (
        <View style={styles.container}>
            <Text>CreateBill</Text>
            <ScrollView>
                <View style={styles.inputContainer} >
                    <Text>Name</Text>
                    <TextInput placeholder='Enter Your Name' style={styles.textInput} />
                </View>
            </ScrollView>
        </View>
    )

}

export default CreateBill

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
    },
    inputContainer : {
        marginTop : 15,
        marginLeft : 15,
        marginRight : 15,
    }

})