import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 	
    'pk_test_6QBuGwczT9KLxNllfTGQv7Yh00fUaXNtWa';

    const onToken = token => {
        console.log(token);
        alert('Pagamento feito com sucesso');
    }

    return (
        <StripeCheckout
            label='Pague agora'
            name='Lojinha'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Seu total é $${price}`}
            amount={priceForStripe}
            panelLabel='Pague agora'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;