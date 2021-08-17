import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons  } from '@expo/vector-icons';


const BlogPostForm = ({navigation, onSubmit, initialValues, ButtonText}) =>{
    const {state} = useContext(Context);
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
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

             <Button title= {ButtonText}
             onPress={() => onSubmit(title, content)}
             />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    },
    ButtonText: "Save Blog Post",
}
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

export default BlogPostForm;