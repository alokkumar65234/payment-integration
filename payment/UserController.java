import java.io.file
import com.razorpay.RazorpayClient
// creating order for paymemt
@Postmapping("/create_order")
@RespponeBody
public String createOrder(@RequestBody Map<String,Object>data) throws Exception
{
    //.System.out.println("Hey order function ex.");
    System.out.println(data);
    int amt=Integer.parseInt(data.get("amount").toString());
   var client=new RazorpayClient("rzp_test_kmarl3AdxNajrD","mRClQWm0MUlCmnMrHZ3A1fQ4");
   JSONObject ob=new JSONObject();
   ob.put("amount", amt*100);
   ob.put("currency","INR");
   ob.put("receipt","txn_235425");
   //creating new order

   order order= client.Orders.create(ob);
   system.out.println(order)
    return "done";
}