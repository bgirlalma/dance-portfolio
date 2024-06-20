import Students from "../components/Students/students";
import styled from "styled-components";


const StudentsPageContainer = styled.div`
  padding: 0 20px 40px;
  display: flex;
  justify-content: center;
`;

const StudentsPage = () => {
    return (
        <StudentsPageContainer>
            <Students/>
         </StudentsPageContainer>
     )
}

export default StudentsPage;