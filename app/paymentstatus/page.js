import ErrorPayment from '@/components/paymentstatus/errorpayment';
import SuccessPayment from '@/components/paymentstatus/successpayment';
import Link from 'next/link';
import React from 'react'
import BackarrowImg from "../../public/images/back-arrow.svg";
import { notFound } from 'next/navigation';

const PaymentStatus = async ({ params, searchParams }) => {
    const { sessionId } = searchParams || {};
    if (!sessionId) {
        return notFound();
    }
    let status = "",
        verifyPaymentError = "",
        home_url = "";
    try {
        const paymentStatusResp = await fetch(`http://23.21.208.224/api/v1/payments/${sessionId}/status`, {
            cache: 'no-store'
        });

        const paymentData = await paymentStatusResp.json() || {};
        if (paymentData?.status) {
            status = paymentData.status,
                home_url = paymentData?.home_url;
        } else {
            verifyPaymentError = true;
        }
    } catch (e) {
        verifyPaymentError = true;
        status = "failed";
    }

    return (
        <section id="payment-success-container">
            <div className='text-center w-full min-h-[50vh] py-[40px]'>
                {/* <h2>Payment Status</h2> */}
                <div className="md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1220px] mx-auto
            px-[12px] py-[30px] lg:py-[40px] flex justify-center">
                    <div className="flex flex-col justify-center items-center w-full lg:w-[80%]">
                        {status && status !== "paid" && <SuccessPayment />}
                        {(status || verifyPaymentError) && status !== "paid" && <ErrorPayment />}
                        {(home_url) && <Link href={home_url} target="_parent" className="" >
                            <button className="flex items-center justify-center bg-secondary py-3 px-6 rounded-lg border border-secondary hover:text-heading duration-300 ease-out hover:bg-background">
                                <img src={BackarrowImg.src} className="me-2 w-5" />
                                Back to Home Page
                            </button>
                        </Link>}
                        {(verifyPaymentError) && <Link href="https://socialseed.net/" target="_parent" className="" >
                            <button className="flex items-center justify-center bg-secondary py-3 px-6 rounded-lg border border-secondary hover:text-heading duration-300 ease-out hover:bg-background">
                                <img src={BackarrowImg.src} className="me-2 w-5" />
                                Back to Home Page
                            </button>
                        </Link>}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PaymentStatus