let pBell = `<g>
<path d="M0 0h24v24H0z" fill="none" class="style-scope yt-icon" data-darkreader-inline-fill="" style="--darkreader-inline-fill:none;"></path>
<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" class="style-scope yt-icon"></path>
</g>`

let nBell = `<g class="style-scope yt-icon">
<path d="M0 0h24v24H0z" fill="none" data-darkreader-inline-fill="" style="--darkreader-inline-fill:none;" class="style-scope yt-icon"></path>
<path d="M12.1,21.5 C11,21.5 10.1,20.6 10.1,19.5 L14.1,19.5 C14.1,20.6 13.2,21.5 12.1,21.5 Z M17.8493827,18.5 L4.1,18.5 L4.1,17.5 L6.1,15.5 L6.1,10.5 C6.1,9.28787069 6.34383266,8.14803693 6.80191317,7.17284768 L4,4.3 L5.3,3 L8.39345122,6.17176644 C8.80987992,6.58774655 9.3,7.1 9.3,7.1 L21.1,19.2 L19.8,20.5 L17.8493827,18.5 Z M8.37723023,8.78804618 C8.20156515,9.32818052 8.1,9.91409026 8.1,10.5 L8.1,16.5 L15.8987654,16.5 L8.37723023,8.78804618 Z M18.1,13.7 L16.1,11.6 L16.1,10.5 C16.1,8 14.6,6 12.1,6 C11.6,6 11.2,6.1 10.8,6.2 L9.3,4.7 C9.7,4.5 10.1,4.3 10.6,4.2 L10.6,3.5 C10.6,2.7 11.3,2 12.1,2 C12.9,2 13.6,2.7 13.6,3.5 L13.6,4.2 C16.5,4.9 18.1,7.4 18.1,10.5 L18.1,13.7 Z" class="style-scope yt-icon"></path>
</g>`

let aBell = `<g class="style-scope yt-icon">
<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" class="style-scope yt-icon"></path>
</g>`



function btnClick(){
    if (document.getElementById('btn').style.color == 'white'){
        document.getElementById('btn').style.color = '#aaa29a';
        document.getElementById('btn').style.width = '170px';
        document.getElementById('btn').style.backgroundColor = '#303030';
        document.getElementById('btn').innerHTML = 'UNSUBSCRIBE';
        document.getElementById('bell').style.width = '55px';
    } else {
        document.getElementById('btn').style.color = 'white';
        document.getElementById('btn').style.backgroundColor = '#c00';
        document.getElementById('btn').innerHTML = 'SUBSCRIBE';
        document.getElementById('bell').style.width = '0px';
        if (document.getElementById('menu').style.opacity == 1){
            document.getElementById('menu').style.opacity = 0;
            setTimeout(() => {  document.getElementById('menu').style.display = 'none'; }, 450)
        }
    }
}

function bellClick(){
    if (document.getElementById('menu').style.opacity == 0){
        document.getElementById('menu').style.display = 'block';
        setTimeout(() => {  document.getElementById('menu').style.opacity = 1, 150; }, 10)
    } else {
        document.getElementById('menu').style.opacity = 0;
        setTimeout(() => {  document.getElementById('menu').style.display = 'none'; }, 450)
    }
}

function choiceClick(num){
    if (num == 1){
        document.getElementById('bell').innerHTML = aBell;
    } else if (num == 2){
        document.getElementById('bell').innerHTML = pBell;
    } else if (num == 3){
        document.getElementById('bell').innerHTML = nBell;
    }
    bellClick()
}