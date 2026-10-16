// Test fixture only, not the production loader FE-02.
for (const frame of document.querySelectorAll('iframe[data-widget-origin]')) {
    const origin = frame.dataset.widgetOrigin;
    const installation = frame.dataset.installation;
    const operation = frame.dataset.operation;
    window.addEventListener('message', (event) => {
        if (
            event.origin !== origin ||
            event.source !== frame.contentWindow ||
            event.data?.type !== 'gotov:prototype:ready' ||
            typeof event.data.nonce !== 'string' ||
            !/^[a-f0-9]{32}$/.test(event.data.nonce)
        )
            return;
        frame.contentWindow.postMessage(
            {
                type: 'gotov:prototype:init',
                nonce: event.data.nonce,
                installation,
                operation,
            },
            origin,
        );
    });
    frame.src = `${origin}/widget-prototype`;
}

// A visible mount/unmount control for the separately installed v1 loader.
const toggleV1 = document.getElementById('toggle-v1-example');
const dynamicV1 = document.getElementById('dynamic-v1-example');
const templateV1 = document.getElementById('v1-example-template');
if (toggleV1 && dynamicV1 && templateV1 instanceof HTMLTemplateElement) {
    toggleV1.addEventListener('click', () => {
        const expanded = toggleV1.getAttribute('aria-expanded') === 'true';
        dynamicV1.replaceChildren(...(expanded ? [] : [templateV1.content.cloneNode(true)]));
        toggleV1.setAttribute('aria-expanded', String(!expanded));
        toggleV1.textContent = expanded ? 'Добавить каталог' : 'Убрать каталог';
    });
}
