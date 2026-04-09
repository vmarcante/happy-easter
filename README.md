# Landing Page - Mensagem Especial 💝

Uma landing page especial criada para transmitir uma mensagem única, com reprodução de áudio e galeria de fotos.

## 📁 Estrutura do Projeto

```
├── index.html          # Página principal
├── style.css           # Estilos da página
├── script.js           # Funcionalidades JavaScript
├── assets/
│   ├── audio/
│   │   └── music.mp3   # Adicione seu arquivo de áudio aqui
│   └── images/
│       ├── photo1.jpg  # Adicione suas fotos aqui
│       ├── photo2.jpg
│       ├── photo3.jpg
│       └── photo4.jpg
```

## 🚀 Como Usar

### 1. Adicionar Conteúdo

**Áudio:**
- Coloque seu arquivo MP3 na pasta `assets/audio/` com o nome `music.mp3`
- Ou edite o caminho no arquivo `index.html` (linha 29)

**Fotos:**
- Adicione suas fotos na pasta `assets/images/`
- Nomeie-as como `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
- Ou edite os caminhos no arquivo `index.html` (linhas 35-46)

**Mensagem:**
- Edite o texto dentro da `<div class="message-box">` no arquivo `index.html` (linhas 18-23)
- Personalize o título na tag `<h1>` (linha 15)

### 2. Publicar no GitHub Pages

1. Crie um novo repositório no GitHub
2. Faça upload de todos os arquivos (incluindo a pasta `assets` com áudio e imagens)
3. Vá em **Settings** → **Pages**
4. Em **Source**, selecione a branch `main` e pasta `/ (root)`
5. Clique em **Save**
6. Aguarde alguns minutos e acesse o link fornecido

## ✨ Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Reprodução de Áudio**: Botão play/pause para controlar a música
- **Galeria de Fotos**: Grid responsivo com efeito hover
- **Modal de Imagens**: Clique nas fotos para visualizá-las em tamanho maior
- **Animações**: Efeitos de fade-in suaves ao carregar a página
- **Gradientes Modernos**: Visual atraente com cores vibrantes

## 🎨 Personalização

### Cores
Edite as cores no arquivo `style.css`:
- Gradiente de fundo: linhas 8-9
- Gradiente da caixa de mensagem: linha 42
- Gradiente do botão: linha 62

### Layout
- Ajuste o número de colunas da galeria modificando `grid-template-columns` na linha 100
- Modifique espaçamentos e tamanhos conforme necessário

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móveis (iOS e Android)
- ✅ Tablets e desktops

## 💡 Dicas

- Use imagens otimizadas (recomendado: máximo 1MB por foto)
- Formatos de áudio suportados: MP3, WAV, OGG
- Para melhor experiência, use fotos com proporção quadrada (1:1)

---

Feito com ❤️
