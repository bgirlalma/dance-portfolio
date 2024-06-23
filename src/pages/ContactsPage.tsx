import Contacts from "../components/Contacts/contacts";
import styled from "styled-components";


const Container = styled.div`
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const ContactsPage = () => {
    return (
        <Container>
            <Contacts/>
         </Container>
     )
}

export default ContactsPage;