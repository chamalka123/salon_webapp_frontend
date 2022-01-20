import React,{useState, useEffect} from "react";
import axios from "axios";
import "./customerList.css";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import jsPDF from "jspdf";

export default function CustomerList() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
       function getCustomer() {
           axios.get("http://localhost:8070/customer/").then((res) =>{
               setCustomer(res.data);
               console.log(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getCustomer();
    }, [customer]);


    function deleteCustomer(_id){
        axios.delete("http://localhost:8070/customer/delete/"+_id).then((res)=>{
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err)=>{
            alert(err)
        });
        setCustomer(customer.filter((customer) =>customer.custId !== _id))

    }

    function createPdf(pdfBody) {

        var doc = new jsPDF();
        var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
        doc.autoTable({
            didDrawPage: function (data) {

                // Header
                doc.setFontSize(14);
                var fileTitle = "Customer";
                var img = ''; 
                doc.text(fileTitle, 30, 60);
                doc.addImage(img, 'JPEG', 550, 10, 40, 40);

                // Footer
                var pageSize = doc.internal.pageSize;
                //jsPDF 1.4+ uses getHeight, <1.4 uses .height
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

                doc.autoTable({
                    html: '#customerList',
                    startY: pageHeight - 250,
                    theme: 'grid'
                });

                var str = "Page " + doc.internal.getNumberOfPages()
                // Total page number plugin only available in jspdf v1.0+
                if (typeof doc.putTotalPages === 'function') {
                    str = str + " of " + totalPagesExp;
                }
                doc.setFontSize(10);
                doc.text(str, data.settings.margin.left, pageHeight - 10);
            },
            margin: {
                bottom: 60, //this decides how big your footer area will be
                top: 40 //this decides how big your header area will be.
            }
        });
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            doc.putTotalPages(totalPagesExp);
        }

        doc.save('Customer List.pdf'); //this downloads a copy of the pdf in your local instance.
    };


    return (
    <div className="allcustomer">
        <h1>All Customer Details</h1>
        <table class="cus-table" id="customerList">
            <thead>
                <tr className="cus-tr">
                <th clasName="cus-th" scope="col">custId</th>
                <th clasName="cus-th" scope="col" id="custHeader"> name</th>
                <th clasName="cus-th" scope="col" id="custHeader">age</th>
                <th clasName="cus-th" scope="col" id="custHeader">sex</th>
                <th clasName="cus-th" scope="col" id="custHeader">Date_of_birth</th>
                <th clasName="cus-th" scope="col" id="custHeader">Email_address</th>
                <th clasName="cus-th" scope="col" id="custHeader">Phone_number</th>
                </tr>
            </thead>
           
            {customer.map((customer) => (
        
                <tr className="cus-tr">
                    <td clasName="cus-td" >{customer.custId}</td>
                    <td clasName="cus-td" >{customer.name}</td>
                    <td clasName="cus-td" >{customer.age}</td>
                    <td clasName="cus-td" >{customer.sex}</td>
                    <td clasName="cus-td" >{customer.Date_of_birth}</td>
                    <td clasName="cus-td" >{customer.Email_address}</td>
                    <td clasName="cus-td" >{customer.Phone_number}</td>
                    
                    
                    <div class="btn">
                    &nbsp;
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteCustomer(customer._id)}>Delete</button>
                    </div>

                </tr> 
               
            ))}

     
        </table>

        <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => createPdf()}
      >
        <PictureAsPdfIcon />
        Download Balance Sheet
      </button>

    </div>
    )
}