import { PhotoStudentsData } from "../../../data/photostudentsdata";

const StudentsPhoto = () => {
    return (<div>
        <ul>
            {PhotoStudentsData.map((photo) => (
                <li key={photo.id}></li>
            ))}
      </ul>
  </div>);
};

export default StudentsPhoto;
