import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:3001/posts")
          .then((res) => {
            setData(res.data.posts);
            console.log(res.data.posts);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div className="child-div">
      {!loading && (
        <div>
          <h2>Urheilijat</h2>
          <br></br>
          <table border="1px">
            <thead>
              <tr>
                <th align="left">ID</th>
                <th align="left">Etunimi</th>
                <th align="left">Sukunimi</th>
                <th align="left">Kutsumanimi</th>
                <th align="left">Syntymävuosi</th>
                <th align="left">Paino</th>
                <th align="left">Linkki Kuvaan</th>
                <th align="left">Laji</th>
                <th align="left">Saavutukset</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td align="left">{item.ID} </td>
                  <td align="left">{item.Etunimi} </td>
                  <td align="left">{item.Sukunimi}</td>
                  <td align="left">{item.Kutsumanimi}</td>
                  <td align="left">{item.Syntymavuosi}</td>
                  <td align="left">{item.Paino}</td>
                  <td align="left">{item.linkki_kuvaan}</td>
                  <td align="left">{item.Laji}</td>
                  <td align="left">{item.Saavutukset}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
