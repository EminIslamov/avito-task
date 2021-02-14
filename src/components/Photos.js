import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";

function Photos(props) {
  const photos = useSelector((state) => state.photos.items);
  const loading = useSelector((state) => state.photos.loading);

  if (loading) {
    return <div>Идет загрузка..</div>;
  }

  return (
    <div className="photos" onClick={() => props.setActive(true)}>
      {photos.map((photo) => {
        return <Photo key={photo.id} photo={photo} />;
      })}
    </div>
  );
}

export default Photos;
