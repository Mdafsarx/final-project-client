import { loadStripe } from "@stripe/stripe-js";
import Title from "../Home/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PK_STRIP);

const Payment = () => {
    return (
        <div>
            <Title subTitle={'Trusted payment system'} mainTitle={'Payment'} />

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;