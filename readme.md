#
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006b69', 'edgeLabelBackground':'#bbdada', 'tertiaryColor': '#dcaab9', 'primaryTextColor': 'white'}}}%%

graph LR

id1>Clique Abaixo no mapa]

```
  ```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#285570', 'edgeLabelBackground':'#777777', 'tertiaryColor': '#285570', 'primaryTextColor': 'white', 'lineColor': 'coral'}}}%%

flowchart LR;

 1:::someclass
    classDef someclass fill:#00c2cb;
    
1(AVANADE) --> 1A(AVANADE WEBSITE) 
1(Season_01) --> 1B(DIGITAL INNOVATION ONE) 
A((DECOLA  TECH)) --> 1((REACT NATIVE\n 2022))


 linkStyle 1 stroke-width:2px,fill:none,stroke:coral;
  linkStyle 2 stroke-width:2px,fill:none,stroke:coral;
  linkStyle 2 stroke-width:2px,fill:none,stroke:coral;
    linkStyle 1 stroke-width:2px,fill:none,stroke:coral;




click A "https://github.com/TeoNogueira/Decola-Tech-BootCamp"
click 1 "https://github.com/TeoNogueira/Decola-Tech-BootCamp/tree/react_native"
click 1A "https://www.avanade.com/pt-br"
click 1B "https://www.dio.me/"

```
#

![mthead](https://github.com/TeoNogueira/Decola-Tech-BootCamp/blob/react_native/gifs/MyDesign.gif)


# DIO 
# Introdução ao React Native

![image](https://github.com/TeoNogueira/Decola-Tech-BootCamp/blob/react_native/gifs/react_native.png)

# Conteúdo
- Conhecendo o React Native
  - O que é react-native?
  - O que é cross-platform?
  - Origem do RN
- Documentação:
  - Componentes
  - API
  - Comunidade (Blog)
- Setup
  - Instalação do Chocolatey
  - Node
  - Java 11 (JDK)
  - Yarn
  - Android Studio
    - Donwload android S
    - Criar um avd (Android Virtual Device)
- Criação do projeto
  - Uso do React Native CLI
  - Estrutura de pasta 
- Projeto Profile
  - View
  - Text
  - SafeAreaView
  - Image
  - Flex-box
  - Style (StyleSheet)
  - Pressable
  - Linking API
  - Add código nativo no AndroidManifest.xml para abrir link
