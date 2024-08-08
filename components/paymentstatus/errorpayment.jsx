import React from "react";
import Image from "next/image";
import ErrorImg from "../../public/images/error.png";

export default function ErrorPayment() {
    return (
        <React.Fragment>
            <div className="mb-3">
                <Image
                    src={ErrorImg}
                    alt="error-image"
                    sizes="100vw"
                    style={{
                        height: '100%',
                        width: 'auto',
                        objectFit: 'cover'
                    }}
                    className="max-h-[150px]"
                />
            </div>
            <h1 className="text-3xl font-semibold mb-3">Payment Failed!!!</h1>
            <p className="font-medium text-center">
                We regret to inform you that your payment was unsuccessful. We understand that this may be disappointing, and we apologize for any inconvenience caused.
            </p>
            <p className="mb-4 text-center">
                If you have encountered any issues during the payment process, we recommend checking your
                payment details and trying again. Alternatively, please contact our support team for further
                assistance.
                We are here to help resolve any issues you may be experiencing.
            </p>
        </React.Fragment>
    )
}