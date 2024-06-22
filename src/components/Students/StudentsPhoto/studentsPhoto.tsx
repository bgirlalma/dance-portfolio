import { PhotoStudentsData } from "../../../data/photostudentsdata";
import { WrappContainer, StudentsList, Image } from "./studentsPhoto.styled";

const StudentsPhoto = () => {
    return (
      <div>
        <WrappContainer>
          {PhotoStudentsData.map((photo) => (
            <StudentsList key={photo.id}>
              <Image src={photo.url} alt={photo.alt} />
            </StudentsList>
          ))}
        </WrappContainer>
      </div>
    );
};

export default StudentsPhoto;
