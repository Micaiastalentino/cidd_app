# CIDD - Cacau Inteligente: Diagnóstico de Doenças

## Introdução
Bem-vindo ao **CIDD** (Cacau Inteligente: Diagnóstico de Doenças), um aplicativo inovador desenvolvido em **React Native** que utiliza técnicas de inteligência artificial para identificar doenças em plantas de cacau na região amazônica. Com base em um modelo de aprendizagem profunda, o CIDD classifica as principais doenças do cacau, como **Vassoura de Bruxa** e **Podridão Parda**, através de imagens capturadas em tempo real pelo usuário.

---

## Funcionalidades
- **Diagnóstico Rápido**: Capture imagens de frutos de cacau e receba diagnósticos instantâneos, classificando as imagens como "Fruto Saudável", "Podridão Parda" ou "Vassoura de Bruxa".
- **Análise Gráfica**: Visualize gráficos que detalham a classificação da fruta.
- **Informações Adicionais**: Se uma doença for detectada, o aplicativo fornece informações sobre as causas e as melhores práticas para o manejo.

---

## Materiais e Métodos
O modelo foi treinado utilizando dados coletados de três fontes:
1. Imagens de fazendas na cidade de **Davao**, Filipinas.
2. Dados da Universidade Autônoma de Bucaramanga, Colômbia.
3. Imagens de lavouras nas cidades de **Paragominas**, **Benevides** e **Tomé-Açu**, Pará, Brasil.
4. O repositório contendo a API utilizada no CIDD pode ser encontrada em [https://github.com/larian3/API_CIDD].

**Tecnologias Utilizadas**:
- **Linguagens e Bibliotecas**: Python, Keras, TensorFlow, Matplotlib, OpenCV.
- **Ambiente de Desenvolvimento**: Spyder, executado em uma CPU Intel Core i5 com 8 GB de RAM.
- **Aplicativo Móvel**: Criado usando React Native e Expo Go, com backend em Flask.

---

## Resultados
- **Modelo de Aprendizado Profundo**: O modelo foi treinado com **504.163** parâmetros, alcançando uma precisão de **93%** e um recall de **92,8%**.
- **Matriz de Confusão**: A matriz de confusão mostra a performance do modelo com dados de teste, com aproximadamente **530 imagens**.

---

## Considerações Finais
O CIDD é uma ferramenta eficaz para ajudar agricultores a identificar e manejar doenças do cacau, contribuindo para a sustentabilidade e produtividade das lavouras na Amazônia.

---

## Como Contribuir
Se você gostaria de contribuir para o projeto, sinta-se à vontade para abrir um **issue** ou enviar um **pull request**. Sua colaboração é bem-vinda!



