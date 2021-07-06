import React from "react";
import "./registerSuccess.css";
function RegisterSuccess() {
  return (
    <div class="container">
      <div class="row justify-content-center ro-content">
        <div class="col-12 align-items-center co-content">
          <img
            class="icon-check"
            src={require("../Greeting/righttick.gif")}
            alt="ungrezi-logo"
            width="200px"
          />
          {/* <i class="fa fa-check-circle icon-check"></i> */}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-12 align-items-center">
          <p class="para">
            Your registration has been successfully done. Please Complete the payment process so that we can able to complete your request.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
            <div class="col-12 col-sm-6 col-payg align-items-center">
                <h4 class="headerpay">Online Payment Method</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-sm-3 col-pay">
                <img src="./PaymentIcons/phonepe.png" class="imagepay" alt="Italian Trulli"/>
                <p class="parapay">Upi id: 7340234190@ybl</p>
                <p class="parapay">PhonePe No: 7340234190</p>
            </div>
            <div class="col-12 col-sm-3 col-pay">
                <img src="./PaymentIcons/paytm.png" class="imagepay" alt="Italian Trulli"/>
                <p class="parapay">Upi id: 7340234190@paytm</p>
                <p class="parapay">G-Pay No: 7340234190</p>
            </div>
            <div class="col-12 col-sm-3 col-pay">
                <img src="./PaymentIcons/gpay.png" class="imagepay" alt="Italian Trulli"/>
                <p class="parapay">Upi id: utkarshagrawal2022@oksbi</p>
                <p class="parapay">G-Pay No: 7340234190</p>
            </div>
            <div class="col-12 col-sm-3 col-pay">
                <img src="./PaymentIcons/amazonpay.png" class="imagepay" alt="Italian Trulli"/>
                <p class="parapay">Upi id: 7340234190@apl</p>
                <p class="parapay">Amazon Pay No: 7340234190</p>
            </div>
        </div>
        <div class="row row-succ">
            <div class="col-12">
                <p class="parapu">Note: After successful payment plz send your payment receipt screenshot on this no. 6377552654 </p>
            </div> 
        </div>
        <div class="row row-query">
            <div class="col-12">
                <p class="paracon">For any query plz contact:<b>6377552654</b></p>
            </div> 
        </div>
      
    </div>
  );
}

export default RegisterSuccess;