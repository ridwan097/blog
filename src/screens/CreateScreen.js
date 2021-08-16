import React, {useContext, useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) =>{
    const {state} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput 
            value={title} 
            style={styles.input}
            onChangeText={(text)=>setTitle(text)}
            />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput 
            value={content}
             onChangeText={(title)=>setContent(title)}
             style={styles.input}
             />

             <Button title="Add Blog Post" 
             onPress={() => {
                 addBlogPost(title, content, () =>{
                    navigation.navigate('Index');
                 });
                }}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default CreateScreen;