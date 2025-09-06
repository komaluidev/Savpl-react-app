import CardList from "../components/CardList";


const InvoiceList = () =>{
const farms = [
  {
    name: "Customer Name",
    date: "Due Date",
    total: "total",
  },
  {
    name: "Sunny Orchard",
    date: "15 Aug 2025",
    total: "₹8,500",
  },
  {
    name: "Blueberry Fields",
    date: "20 Jul 2025",
    total: "₹15,200",
  },
   {
    name: "Customer Name",
    date: "Due Date",
    total: "total",
  },
];


    return(
   <CardList
      title="Invoice List"
      data={farms}
      fields={["name", "date", "total"]}
    />
  );
    
}


export default InvoiceList;