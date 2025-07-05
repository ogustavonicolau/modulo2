import React, { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Usuario = {
    id: number;
    firstName: string;
    lastName: string;
};

export default function Modulo3() {
    const [carregando, setCarregando] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);

    const carregarUsuarios = async () => {
        if (visivel) {
            setVisivel(false); // Oculta a lista se já estiver visível
            return;
        }

        setCarregando(true);
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsuarios(data.users); // <- importante: acessa o array correto da API
            setVisivel(true);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lista de Usuários</Text>

            <Pressable style={styles.button} onPress={carregarUsuarios}>
                <Text style={styles.buttonText}>
                    {visivel ? 'Ocultar Usuários' : 'Carregar Usuários'}
                </Text>
            </Pressable>

            {carregando && (
                <ActivityIndicator size="large" color="#0a5ca8" style={{ marginVertical: 10 }} />
            )}

            {/* Lista de usuários */}
            {visivel && usuarios.map(usuario => (
                <View key={usuario.id}>
                    <Text>{usuario.firstName} {usuario.lastName}</Text>
                </View>
            ))}

            <View style={styles.footer}>
                <Text style={styles.footerText}>Exemplo de React Native - Módulo 3</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e9ecef',
        borderRadius: 6,
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
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footer: {
        marginTop: 40,
    },
    footerText: {
        color: '#777',
        fontSize: 14,
    },
});