import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cata() {
  const { id } = useParams();
  const [categroy, setCategroy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundCategroy = data.find((c) => c.id === parseInt(id, 10));
        if (foundCategroy) {
          setCategroy(foundCategroy);
        } else {
          setError("Categroy not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching Categroy data:", err);
        setError("Error loading Categroy details");
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!categroy) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Company Details</h1>
      <h2>{categroy.name}</h2>
      <p>{categroy.description}</p>
      <p>Location: {categroy.location}</p>
    </div>
  );
}

export default Cata;
