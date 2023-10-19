import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

function FormComponent({ startCamera }) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('inputText', inputText);
        const response = await axios.post('http://192.168.4.23:3000/callOpenAI', {
            messages: [
                { role: "system", content: "You are a magic mirror. The user will tell you something they are feeling insecure about and you will respond with motivational messages to help cheer them up." },
                { role: "user", content: inputText }
            ]
        })
            .then(response => {
                const openAIResponse = response.data;
                console.log(openAIResponse.message);

                startCamera();
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code outside of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>What would you like to hear encouragement about?</Text>
            <TextInput
                style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                value={inputText}
                onChangeText={setInputText} />
            <Button title="Summon the magic mirror" onPress={handleSubmit} />
        </View>
    );
}

export default FormComponent;
