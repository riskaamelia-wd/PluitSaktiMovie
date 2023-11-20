import { useEffect, useState } from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import axios from "axios";
import { baseImgUrl, baseUrl, header } from "../utils/FetchApi";
import { useMediaQuery } from "react-responsive";

const Category = ({ text, img, id, navLink, apiUrl }) => {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const cardsPerPage = isMobile ? 3 : isTablet ? 4 : 6;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
//           {
//             headers: {
//               Authorization: `${header}`,
//             },
//           }
//         );
//         setData(response.data.results);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `${header}`,
          },
        });
        setData(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="pt-3 pb-3 container">
      <div className="d-flex flex-row justify-content-between mb-3">
        <h3>{text}</h3>
        <Button text={"Lebih Banyak"} iconRight={"bi bi-chevron-right ms-2"} navLink={navLink} />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start">
        {data.length > 0 ? (
          data.slice(0, cardsPerPage).map((item) => (
            <div key={item.id} className="p-2 col-4 col-md-3 col-lg-2">
              <Card
                idFilm={item.id}
                time={"1h 53m"}
                year={item.release_date}
                img={`${baseImgUrl}/${item.poster_path}`}
                title={item.title}
              />
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default Category;
