# Sistema de Alerta de Catástrofes

## Objetivo do Projeto

Este projeto visa criar uma página para um sistema de alerta de catástrofes, permitindo que os usuários insiram informações e visualizem alertas e previsões meteorológicas. A interface está organizada em abas para facilitar a navegação, e o sistema é responsivo, adaptando-se a diferentes tamanhos de tela. No desktop, os cards são exibidos em colunas horizontais, enquanto em dispositivos móveis eles são exibidos em uma única coluna.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **index.html**: Estrutura básica da página.
2. **style.css**: Estilos e configurações de responsividade.
3. **script.js**: Lógica de alternância entre as abas "Alertas" e "Previsões".

---

## 1. index.html

O arquivo `index.html` contém a estrutura HTML da página, incluindo o formulário inicial e as seções de "Alertas" e "Previsões".

### Estrutura do HTML

- **Header**: Título e subtítulo da página.
- **Formulário**: Campos para nome e endereço do usuário.
- **Seção de Alertas e Previsões**: Contém duas abas, "Alertas" e "Previsões", que alternam o conteúdo exibido de acordo com a aba ativa.

### Exemplo de Código

```html
<header>
    <h1>Alerta de Catástrofes</h1>
    <p>Informações sobre segurança e abrigos em situações de emergência</p>
</header>

<main>
    <section class="form-section">
        <h2>Preencha suas Informações</h2>
        <form action="mapas.html" method="GET">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>
            <button type="submit">Pesquisar</button>
        </form>
    </section>

    <section id="alertas">
        <div class="container">
            <nav>
                <button data-tab-button="alerta" class="tab__button tab__button--is-active">Alertas</button>
                <button data-tab-button="previsao" class="tab__button">Previsões</button>
            </nav>
            <ul data-tab-id="alerta" class="tab__content tab__content--is-active">
                <!-- Cards de Alertas -->
            </ul>
            <ul data-tab-id="previsao" class="tab__content">
                <!-- Cards de Previsões -->
            </ul>
        </div>
    </section>
</main>
```
<hr>

## 2. style.css

O arquivo <i>style.css</i> define o estilo da página e a responsividade para garantir que os cards fiquem em uma única coluna em dispositivos móveis e em múltiplas colunas no desktop.

### Estilos Principais

- **Flexbox**: Utilizado para organizar os cads horizontalmente no desktop e verticalmente no mobile.
- **Media Queries**: Garantem que o layout seja adaptável a diferentes tamanhos de tela.

### Responsividade

Em telas menores que 768px, o <i>flex-direction</i> é configurado como <i>column</i>, fazendo com que os cards se alinhem verticalmente.

### Exemplo de Código

```css
.tab__content {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

li {
    width: 30%; /* Largura dos cards no desktop */
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: 10px 0;
}

@media (max-width: 768px) {
    .tab__content {
        flex-direction: column;
        align-items: center;
    }
    li {
        width: 90%; /* Largura dos cards no mobile */
    }
}
```
<hr>

## 2. style.css

O arquivo <i>script.js</i> implementa a lógica para alternar entre as abas "Alertas" e "Previsões".

### Funcionamento da Alternância de Abas

- **Eventos de Clique:**:  Cada botão de aba <i>(data-tab-button)</i> tem um evento de clique que exibe o conteúdo correspondente e esconde o conteúdo da aba inativa.
- **Classes de Ativação:**: A aba ativa recebe a classe <i>tab__button--is-active</i> para destacar visualmente a aba selecionada, enquanto o conteúdo ativo recebe a classe <i>tab__content--is-active</i>.

### Exemplo de Código

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const target = event.target.dataset.tabButton;
            const tabContent = document.querySelector(`[data-tab-id="${target}"]`);

            hideAllButtons();
            event.target.classList.add('tab__button--is-active');
            hideAllContent();
            tabContent.classList.add('tab__content--is-active');
        });
    });
});

function hideAllContent() {
    const tabContents = document.querySelectorAll('.tab__content');
    tabContents.forEach(content => content.classList.remove('tab__content--is-active'));
}

function hideAllButtons() {
    const buttons = document.querySelectorAll('.tab__button');
    buttons.forEach(button => button.classList.remove('tab__button--is-active'));
}
```

<hr>

### Estrutura de Arquivos
- **index.html:**: Estrutura HTML da página.
- **style.css:**: Arquivo de estilos.
- **script.js:**: Arquivo para alternância de abas.

### Considerações Finais
Este sistema de alerta de catástrofes é funcional e responsivo, proporcionando uma navegação intuitiva por meio de abas. O layout é otimizado para visualização em diferentes dispositivos, garantindo que o conteúdo seja exibido de forma organizada tanto em desktops quanto em dispositivos móveis.

