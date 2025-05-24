 //importa diversos componentes nativos do react-native
//SafeAreaView: evita q o conteúdo fica embaixo de barras do sistema (notch do iphone)
//ScrollView: permite rolar o conteúdo verticalmente
//Text: exibe o texto na tela
//Pressable: um botão que responde ao toque
//ActivityIndicator: componente de carregamento (loading spinner)
//Modal: janela flutuante (que lembra um popup)
//View: container genérico
//StyleSheet: define os estilos CSS no JavaScript (CSS-in-JS)
//useState: importação do hook useState do react para controlar estados locais (como abrir e fechar Modal)
 
 import {
    SafeAreaView, ScrollView, Pressable, Text, ActivityIndicator, Modal, View, StyleSheet
 } from "react-native"

 import {
    useState
 } from "react"

 export default function modulo2 () {
    const [modalVisible, setModalVisible] = useState(false);
    return ( 
    <SafeAreaView style={styles.container}> 
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}> Bem Vindo </Text>
            <Pressable onePress={()=> setModalVisible(true)} style={styles.button}> 
                <Text style={styles.buttonText}> Abrir Modal </Text>
            </Pressable>
            <Modal>
                <View>
                    <View> 
                        <Text> </Text>
                        <Pressable>
                            <Text> </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <ActivityIndicator>

        </ScrollView>
    </SafeAreaView>
    const styles = StyleSheet.create ({
        
        //container: ocupa toda a tela
        //content: espaçamento interno ao conteúdo rolável
        //title: com fonte maior e espaçamento
        //button: botão com margem inferior para separação
        //buttonText: cor azul para o texto do botão
        //modalOverlay: fundo escuro semi transparente para o modal
        //modalContent: caixa branca com cantos arredondados do modal
        //modalButton: botão de fechar com margem acima

        content: {
            padding:20
        },
        container: {
            flex:1
        },
        button: {
            marginBottom:20
        },
        buttonText: {
            color:'blue'
        },
        title: {
            fontSize:24,
            marginBottom:20
        },
        modalOverlay: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#0000099'
        },
        modalContent: {
            backgroundColor:'white',
            padding:20,
            borderRadius:15
        },
        modalButton: {
            marginTop:15
        },

    });
)
 }