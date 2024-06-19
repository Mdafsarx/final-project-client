import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosSecoure from "../../Hooks/axiosSecoure";
import useCartData from "../../Hooks/useCartData";
import useAuth from "../../Hooks/useAuth";

const CheckoutFrom = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [Error, setError] = useState('');
    const [tsId, SetTsId] = useState('')
    const [carts] = useCartData();
    const totalPrice = carts.reduce((p, c) => p + c.price, 0);
    const axiosURL = axiosSecoure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    console.log(user)





    useEffect(() => {
      if(totalPrice>0){
        axiosURL.post('/create-payment-intent', { price: totalPrice })
        .then(data => setClientSecret(data.data.clientSecret))
      }
    }, [axiosURL, totalPrice])




    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return
        const card = elements.getElement(CardElement)
        if (card === null) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment method

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayName || '',
                        email: user?.email || '',
                    },
                }
            }
        )

        if (confirmError) {
            console.log('confirmError', confirmError)
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                SetTsId(paymentIntent.id)

                // now save the payment in dataBase
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    tId: paymentIntent.id,
                    date: new Date(),
                    cardId: carts?.map(item => item?._id),
                    menuId: carts?.map(item => item?.menuId),
                    status: 'pending'
                }
                axiosURL.post('/payment', payment)
                .then(data => console.log(data.data))
            }
        }

    }


    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '30px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-sm btn-error text-white mt-4" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-xl text-red-600">{Error}</p>
                {tsId && <p className="text-green-600">your Trans id is:{tsId}</p>}
            </form>
        </div>
    );
};

export default CheckoutFrom;