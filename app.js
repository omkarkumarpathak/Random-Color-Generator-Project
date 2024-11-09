const getColor=()=>{
    //hex code
    const randomNum=Math.floor(Math.random()*1215);
    const ranCode='#'+randomNum.toString(16);
    document.querySelector(".code").innerText=ranCode;
    document.body.style.backgroundColor=ranCode;
}
getColor();

