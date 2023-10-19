import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import OpenAI from 'openai-api';

function FormComponent({ startCamera }) {
    const [inputText, setInputText] = useState('');

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer YOUR_API_KEY_HERE'
        //     },
        //     body: JSON.stringify({
        //         prompt: inputText,
        //         max_tokens: 60,
        //         n: 1,
        //         stop: '\n'
        //     })
        // });
        // const data = await response.json();
        // console.log(data.choices[0].text);
        startCamera();
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
