
import StudentsPhoto from "./StudentsPhoto/studentsPhoto";
import VideoStudents from "./StudentsVideo/video";
import { StudentsContainer } from './students.styled'

const Students = () => {
    return (
        <StudentsContainer>
            <VideoStudents />
            <StudentsPhoto />
        </StudentsContainer>
     )
}

export default Students;