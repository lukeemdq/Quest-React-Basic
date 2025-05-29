

const alertLabel = ({label}) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label= 'Clique Aqui'}) => {
    return (
        <button onClick={() => alertLabel({label})}>{label}</button>
    )
}

export default Button