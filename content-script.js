
setTimeout(() => {
    // document.addEventListener('DOMNodeInserted', function () {
    //     try {
    //         const elements = document.querySelectorAll('[aria-owns]');
    //         elements.forEach(element => {
    //             element.removeAttribute('aria-owns');
    //         });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // });

    function callback() {
        try {
            const elements = document.querySelectorAll('[aria-owns]');
            elements.forEach(element => {
                element.removeAttribute('aria-owns');
            });
        } catch (e) {
            console.error(e);
        }
    }

    function retry () {
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
    
        const targetNode = document.getElementsByTagName("html")?.[0];
        const config = { attributes: true, childList: true, subtree: true };
    
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
    retry();
}, 100);
