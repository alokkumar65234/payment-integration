// first resquset to server to create order 
const paymentStart = () =>{
    console.log("payment started..");
    let amount = $("#payment_field") .val();
    console.log(amount);
    if(amount == "" ||amount==null){
        alert("amount is required !!");
        return;
    }
    //code...
    //i am using ajax to send request on server to create order
    $.ajax(
        {
            url='/create/order',
            data:JSON.stringify({amount:amount,info:'order_request'}),
            contentType:'application/json',
            type:'POST',
            datatype:'json',
            success:function(responce){
                //invoked when succes
                console.log(response);
                if (response.status=="created"){
                    //open payment form
                let options = {
                    key:"rzp_test_kmarl3AdxNajrD",
                    amount: response.amount,
                    currency: "INR",
                    name:"smart contact Manager",
                    description:"Donation",
                    Image:"alok.jpg.jpg",
                    order_id:response.id,
                    handler:function(response){
                        console.log(response.razorpay_payment_id);
                        console.log(response.razorpay_order_id);
                        console.log(razorpay_signature);
                        console.log("payment succesful!!");
                        alert("comgrates !! payment succesfull!!");
                    },
                    




                },


                } ;               },
            error:function(error){
                //invoked when error
                console.log(error)
                alert ("something went wrong!!")
            }

        }
    )
};
