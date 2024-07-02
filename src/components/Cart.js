import { useState, useEffect } from 'react'
import Modal from './Modal'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0)

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index)
        updateCart(newCart)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                                <button className="lmj-cart-add-button" onClick={() => removeItem(index)}>Supprimer</button>
                            </div>
                        ))}
                    </ul>
                    <h3 onClick={openModal}>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Détails du panier</h2>
                <p>Nombre d'articles : {cart.length}</p>
                <p>Total : {total}€</p>
            </Modal>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart