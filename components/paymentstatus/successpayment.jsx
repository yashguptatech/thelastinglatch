import React from "react";
import Image from "next/image";
import SuccessImg from "../../public/images/success.png";

export default function SuccessPayment() {
    return (
        <React.Fragment>
            <div className="mb-3">
                <Image
                    src={SuccessImg}
                    alt="success-image"
                    sizes="100vw"
                    style={{
                        height: '100%',
                        width: 'auto',
                        objectFit: 'cover'
                    }}
                    className="max-h-[150px]"
                />
            </div>
            <h1 className="text-3xl font-semibold mb-3">Payment Success!!!</h1>
            <p className="font-medium text-center">
                We are thrilled to inform you that your payment has been successfully processed.
            </p>
            <p className="mb-4 text-center">
                Your chosen package features are now being prepared and will be delivered to you promptly.
                We understand the importance of timely service and are committed to
                ensuring that your experience with us is nothing short of exceptional.
            </p>
        </React.Fragment>
    )
}