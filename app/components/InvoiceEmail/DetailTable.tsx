import { Row, Column ,Section, Heading, Text} from "@react-email/components";

interface Detail {
    id: number;
    label: string;
    value: string;
  }
  
  interface DetailTableProps {
    title: string;
    text: string;
    details: Detail[];
  }



const DetailTable = ({ title, text ,details }: DetailTableProps)=>{
    return(
        <Section className="my-6" style={{borderTop: "1px solid #CBD5E1"}}>
            <Heading className="my-4 font-semibold">
           {title}
            </Heading>
           {text &&  <Text className="-mt-4 ">{text}</Text>}
               
          <div className="rounded-lg  p-6 py-2" style={{backgroundColor:"#F6F8FB"}}>
            {details.map((detail) => (
        <Row className="border-b last:border-none" key={detail.id}>
          <div className="flex justify-between align-center">
          <Column className="text-sm py-2 text-[#434343]">{detail.label}</Column>
          <Column className="text-sm py-2 font-semibold text-[#0A0A0A]">{detail.value}</Column>
          </div>
        </Row>
      ))}
      </div>
        </Section>
        
    );
}

export default DetailTable;