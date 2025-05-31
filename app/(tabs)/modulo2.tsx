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
    ActivityIndicator, Modal,
    Pressable,
    SafeAreaView, ScrollView,
    Text,
    View
} from "react-native";

 import {
    useState
} from "react";

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
            <ActivityIndicator/>

        </ScrollView>
    </SafeAreaView> 
    );
    
 };