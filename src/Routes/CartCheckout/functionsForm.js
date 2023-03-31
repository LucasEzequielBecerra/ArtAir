

export function clearForm(setUserData) {
    setUserData(
        {
            fullName: "",
            email: "",
            phone: "",
            country: "",
            targetName: "",
            numberCard: "",
            expDate: "",
            cvv: "",
        },

    );
}

export function validateForm(form) {
    let errors = {}
    let regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regPhone = /^\d+$/

    if (!form.fullName.trim()) {
        errors.fullName = "El campo 'Nombre' es requerido"
    } else if (!regName.test(form.fullName.trim())) {
        errors.fullName = "El campo 'Nombre' solo acepta letras y espacios"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    } else if (!regEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' debe llevar arroba y caracteres permitidos"
    }
    if (!form.phone.trim()) {
        errors.phone = "El campo 'Telefono' es requerido"
    } else if (!regPhone.test(form.phone.trim())) {
        errors.phone = "El campo 'Telefono' solo acepta numeros"
    }

    return errors
}

export const totalPrice = (cart) => {
    let finalPrice = 0;

    cart.forEach((prod) => {
        finalPrice += prod.quantity * prod.price
    })

    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(finalPrice.toFixed(2))
}


