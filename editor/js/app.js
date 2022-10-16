import SrcEditor from './editor.js';

document.addEventListener('DOMContentLoaded', async () => {
    const textarea = document.documentElement;
    const header = document.getElementById('header');
    const mode = document.getElementById('mode');
    const lang = document.getElementById('lang');
    const rte = document.getElementById('rte');
    const clear = document.getElementById('clear');
    const save = document.getElementById('save');
    let editor;
    const toggle = (flag) => {
        Array.from(header.getElementsByTagName('select')).forEach(item => (item.disabled = flag));
        clear.disabled = flag;
    };
    const setMode = () => mode.value ? textarea.setAttribute('class', mode.value) : textarea.removeAttribute('class');
    const init = () => {
        editor?.destroy();
        const Editor = SrcEditor;
        if(rte) {
            editor = Editor.create(rte, {
                lang: lang.value,
                mode: 'max',
                customPlugins: {
                    audio: {
                        browser: 'browser/audio.html',
                    },
                    block: {
                        api: 'api/{id}.html',
                        browser: 'browser/block.html',
                        css: 'css/app.css',
                    },
                    iframe: {
                        browser: 'browser/iframe.html',
                    },
                    image: {
                        browser: 'browser/image.html',
                    },
                    video: {
                        browser: 'browser/video.html',
                    },
                },
            });
        }
    };
    mode.addEventListener('change', setMode);
    lang.addEventListener('change', init);
    clear.addEventListener('click', () => {
        editor.setHtml('');
        window.scrollTo(0, 0);
    });
    save.addEventListener('click', () => {
        if (rte?.hidden) {
            editor.save();
            editor.destroy();
            save.textContent = 'Edit';
            toggle(true);
        } else {
            editor.load();
            save.textContent = 'Save';
            toggle(false);
        }
    });
    setMode();
    init();
    save.textContent = rte?.hidden ? 'Save' : 'Edit';
});
