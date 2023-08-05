export default () => {
    const main = document.querySelector('.main')
    const root = document.querySelector(':root')

    if(main.dataset.theme === "dark") {
        root.style.setProperty('--bg-1', '#f0f2fa')
        root.style.setProperty('--bg-2', '#5e5863')
        root.style.setProperty('--bg-3', 'transparent')
        root.style.setProperty('--color-1', '#000')
        root.style.setProperty('--transparent', '#5e5863')
        
        main.dataset.theme = "light"
    } else {
        root.style.setProperty('--bg-1', '#131314')
        root.style.setProperty('--bg-2', '#39353b')
        root.style.setProperty('--bg-3', '#39353b')
        root.style.setProperty('--color-1', '#fff')
        root.style.setProperty('--transparent', 'transparent')

        main.dataset.theme = "dark"
    }
}