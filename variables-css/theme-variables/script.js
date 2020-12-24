

const changeThemeButtons = document.querySelectorAll('[name=theme]');

const rootStyles = document.documentElement.style;

const lightTheme = {

    '--bg-color'        : '#eee',
    '--bg-color-2'      : '#fff',
    '--text-color'      : '#53575A',
    '--accent-color'    : '#007BDF',
    '--font'            : "'Open Sans', sans-serif"
}

const darkTheme = {

    '--bg-color'        : '#53575A',
    '--bg-color-2'      : '#282D31',
    '--text-color'      : '#eee',
    '--accent-color'    : '#FF3C32',
    '--font'            : "'Lato', sans-serif"
}



for(let button of changeThemeButtons){
    button.addEventListener('change', e => {
        console.log(e.target.id);
        if(e.target.id === 'dark'){
changeTheme(darkTheme);
        }else if (e.target.id === 'light'){
            changeTheme(lightTheme);

        }
    })
}

const changeTheme = theme => {
    let cssVars = Object.keys(theme);
    console.log(cssVars);
    
    for(let cssVar  of cssVars){
        rootStyles.setProperty(cssVar,theme[cssVar]);
    }
}

