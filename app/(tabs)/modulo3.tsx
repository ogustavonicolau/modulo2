import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
type Usuario = {id: number,
    name: string,
};
export default function modulo3() {
    const [carregando, setCarregando] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);
    const carregarUsuarios = async () => {
        //Se ja esta visível, colapsa a lista
        if (visivel) {
            setVisivel(false);
            return;
        }
        setCarregando(true);
        try{const response = await fetch ('https://jsonplaceholder.typicod.com/users'); 
            const data = await response.json ();
            setUsuarios (data);
            setVisivel (true);  //Torna a lista visível após carregar
        } catch (error) {
            console.error('erro ao carregar usuarios', error);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <ScrollView contentContainerStyle = {styles.container}> 
        <Text style = {styles.title}> </Text>
        <Pressable onPress = {carregarUsuarios} style = {styles.button}>
            <Text style = {styles.buttonText}> Carregar Usuários </Text>
             </Pressable>
        </ScrollView>

    )
}
const styles = StyleSheet.create ({
    container: {
        flexGrow:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

});

