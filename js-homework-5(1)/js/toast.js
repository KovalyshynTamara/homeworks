// function myToast(text, type = 'success') {
//     if ( document.getElementById("my-toast")) {
//         document.getElementById("my-toast").remove()
//     }
//     const html = `
//         <div id="my-toast" class="${type}">
//             <div>${text}</div>
//         </div>`
//     document.body.insertAdjacentHTML('afterbegin', html)
    // setTimeout(function () {
    //     document.getElementById("my-toast").remove()
    // },3000)
// }

//можна переробити цю ф-цію з використанням об'єкту в якого є методи
// в об'єкт можна запхати <style> (тоді в одному файлі будуть і методи і стилі )тому використ об'єкта зручніше
//'background-color': 'rgba(71, 186, 36, 0.9)',
//палагіт для повідомок про успішн\не успішн  

const toast = {
    style: {
        position: 'fixed',
        right: '20px',
        top: '20px',
        width: '350px',
        padding: '15px',
        color: '#fff',
        'border-radius': '10px',
        'z-index': '10000',
    },
    show: function (text, type) {
        if ( document.getElementById("my-toast")) {
            document.getElementById("my-toast").remove()
        }
        let styleString = ''
        for (let prop in this.style) {
            styleString+=`${prop}:${this.style[prop]};`
        }
        switch (type) {
            case 'success':
                styleString += 'background-color: rgba(71, 186, 36, 0.9);';
                break;
            case 'danger':
                styleString += 'background-color: rgba(195, 22, 22,.9);';
                break;
            case 'warning':
                styleString += 'background-color: rgba(255, 184, 30, 0.9);';
                break;
            case 'info':
                styleString += 'background-color: rgba(30, 109, 255, 0.9);';
                break;
        }

        const html = `
            <div id="my-toast" class="toast-${type}" style="${styleString}">
                <div>${text}</div>
            </div>`;
        document.body.insertAdjacentHTML('afterbegin', html);//додав 

        setTimeout(function () {
            if (document.getElementById("my-toast")) {
                document.getElementById("my-toast").remove()//видал
            }
        },3000)
    },
    success: function (text = '') {
        this.show(text, 'success')//
    },
    danger: function (text = '') {
        this.show(text, 'danger')//
    },
    warning: function (text = '') {
        this.show(text, 'warning')//
    },
    info: function (text = '') {
        this.show(text, 'info')//
    },
}



