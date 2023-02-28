
const toast = {
    style: {
        wrapper: {
            position: 'fixed',
            right: '20px',
            top: '20px',
            width: '300px',
            zIndex: '10000',
        },
        toast: {
            padding: '15px',
            backgroundColor: '#999',
            color: '#fff',
            marginBottom: '10px',
            borderRadius: '10px',
        }
    },
    show: function (text, type) {
        let wrapper = document.getElementById('toast-wrapper')
        if (wrapper===null) {
            wrapper = document.createElement('div')
            wrapper.id = 'toast-wrapper'
            for (let prop in this.style.wrapper) {
                wrapper.style[prop] = this.style.wrapper[prop]
            }
            document.body.prepend(wrapper)
         }
        switch (type) {
            case 'success':
               this.style.toast.backgroundColor = 'rgba(71, 186, 36, 0.9)'
                break;
            case 'danger':
                this.style.toast.backgroundColor = 'rgba(195, 22, 22,.9)'
                break;
            case 'warning':
                this.style.toast.backgroundColor = 'rgba(255, 184, 30, 0.9)'
                break;
            case 'info':
                this.style.toast.backgroundColor = 'rgba(30, 109, 255, 0.9)'
                break;
        }
        const div = document.createElement('div')
        div.id = 'my-toast-'+document.getElementsByClassName('my-toast').length
        div.classList.add('my-toast')
        div.classList.add(`my-toast-${type}`) 
         for (let prop in this.style.toast) {
           div.style[prop] = this.style.toast[prop]
        }

        const divText = document.createElement('div')
        divText.innerText = text
        div.prepend(divText)   
        
        wrapper.prepend(div)
        
        div.onclick = div.remove

        setTimeout(() => {
            div.remove()
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

