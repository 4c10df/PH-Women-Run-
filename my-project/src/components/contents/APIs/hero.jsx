import React, { useState, useEffect } from "react";
import axios from "axios";

const HygraphFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ca-central-1.cdn.hygraph.com/content/cm10t9se900kk07v1y9anmeel/master";

  const query = `{
    heroSection(where: {id: "cm13cwqil4e1q07u37bk6k4yi"}) {
      id
      firstSlide
      secondSlide
      schedule
      imageslide {
        url
        fileName
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.heroSection);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      {data && (
        <div key={data.id}>
          <h2>{data.firstSlide}</h2>
          <h2>{data.secondSlide}</h2>
          <p>{data.schedule}</p>
          <img src={data.imageslide.url} alt={data.imageslide.fileName} />
        </div>
      )}
    </div>
  );
};

export default HygraphFetch;
