function changeFont(font) {
    document.getElementById(`content`).style.fontFamily =font.value;
    }
    
    const changeZize = (size) => {
    document.getElementById(`content`).style.fontSize =size.value;
    }
    
    const r3set = () => { 
    document.getElementById(newLocal).style.fontSize=`8px`;
    document.getElementById(`content`).style.fontFamily=`Arial`;
    }
    