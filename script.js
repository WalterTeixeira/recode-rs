document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            console.log(botao.target.dataset.tabButton)
            const target = botao.target.dataset.tabButton;
            const aba = window.document.querySelector(`[data-tab-id = ${target}]`);

            hiddenButton();
            botao.target.classList.add('tab__button--is-active');
            hiddenContent();
            aba.classList.add('tab__content--is-active');
        });
    };
});

function hiddenContent() {
    const tab = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('tab__content--is-active');
    };
};

function hiddenButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('tab__button--is-active');
    };
};