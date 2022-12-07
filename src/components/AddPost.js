import React, { useState } from "react";
import axios from "axios";

export default function AddPost() {
  const [etunimi, setEtunimi] = useState(null);
  const [sukunimi, setSukunimi] = useState(null);
  const [kutsumanimi, setKutsumanimi] = useState(null);
  const [syntymavuosi, setSyntymavuosi] = useState(0);
  const [paino, setPaino] = useState(0);
  const [linkki_kuvaan, setLinkki_kuvaan] = useState(null);
  const [laji, setLaji] = useState(null);
  const [saavutukset, setSaavutukset] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/posts", {
        etunimi,
        sukunimi,
        kutsumanimi,
        syntymavuosi,
        paino,
        linkki_kuvaan,
        laji,
        saavutukset,
      })
      .then((res) => {
        const palautus = res.data;
        console.log(palautus);
      });
  };
  return (
    <>
      <div className="child-div">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="field1">
              <label> Urheilijan Tiedot </label>
              <input
                placeholder="Etunimi"
                onChange={(event) => setEtunimi(event.target.value)}
              />
              <input
                placeholder="Sukunimi"
                onChange={(event) => setSukunimi(event.target.value)}
              />
              <input
                placeholder="Kutsumanimi"
                onChange={(event) => setKutsumanimi(event.target.value)}
              />
              <input
                placeholder="Syntymävuosi [YYYY]"
                onChange={(event) => setSyntymavuosi(event.target.value)}
              />
              <input
                placeholder="Paino"
                onChange={(event) => setPaino(event.target.value)}
              />
              <input
                placeholder="Linkki Kuvaan"
                onChange={(event) => setLinkki_kuvaan(event.target.value)}
              />
              <input
                placeholder="Laji"
                onChange={(event) => setLaji(event.target.value)}
              />
              <textarea
                placeholder="Saavutukset"
                onChange={(event) => setSaavutukset(event.target.value)}
              />
            </div>
            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              Tallenna Uusi Urheilija
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
