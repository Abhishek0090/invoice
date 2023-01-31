import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CreateBill = () => {

    const [data, setData] = useState([{
        name: '',
        address: '',
        mobile: ''
    }]);

    // const [name, setName] = useState();
    // const [address, setAddress] = useState();
    // const [mobile, setMobile] = useState();

    const handleChange = (e) => {
        e.preventDefault();

        setData((prev) => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })

    }

    return (
        <View style={styles.container}>
            <Text>CreateBill</Text>
            <ScrollView>
                <View style={styles.inputContainer} >
                    <Text>Name</Text>
                    <TextInput placeholder='Enter Your Name' style={styles.textInput} value={data.name} onChange={handleChange} name="name" />
                </View>
                <View style={styles.inputContainer} >
                    <Text>Address</Text>
                    <TextInput placeholder='Address' style={styles.textInput} value={data.address} onChange={handleChange} name="address" />
                </View>
                <View style={styles.inputContainer} >
                    <Text>Mobile No</Text>
                    <TextInput placeholder='Mobile' style={styles.textInput} value={data.mobile} onChange={handleChange} name="mobile" keyboardType='number-pad' />
                </View>
                <View>
                {data.map((data)=>{
                    return (
                        <>
                    <Text>{data.name}</Text>
                    <Text>{data.address}</Text>
                    <Text>{data.mobile}</Text>
                        </>

                    )
                })

                }
                </View>
            </ScrollView>
        </View>
    )

}

export default CreateBill

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    textInput: {
        marginTop: 4,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        marginBottom: 6
    }

})