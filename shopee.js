function sent(){
    
    const ba= document.getElementsByClassName('container1');
    if (ba){
        const a = document.getElementsByTagName('input')[0].value;
        const ccc =document.createElement('div');
        ccc.classList.add('message');
        ccc.innerHTML=`
            <P CLASS="page">${a}</p>
        `;
        console.log(a);
        ba[0].appendChild(ccc);
    }
};
