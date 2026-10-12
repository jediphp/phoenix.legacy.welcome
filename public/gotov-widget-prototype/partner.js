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
