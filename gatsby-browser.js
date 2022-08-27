import { init } from '@noriginmedia/norigin-spatial-navigation';

require("prism-themes/themes/prism-dracula.min.css")

if (window !== undefined) {
    init({
        visualDebug: false
    });
    
    // window.addEventListener("keypress", (evt) => {
    //     if (evt.keyCode === 461) {
    //         window.history.go(-1)
    //     }
    // })
}