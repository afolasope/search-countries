import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../Header';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const SingleCountry = () => {
  const { id } = useParams();

  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${id}?fullText=true`
    );
    const data = await response.json();
    setCountry(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="details-section">
        <Link to="/">
          <div className="return-btn">
            <HiOutlineArrowNarrowLeft />
            <span>Back</span>
          </div>
        </Link>

        {country.map((country, index) => {
          console.log(country);
          const {
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
            flags,
          } = country;
          console.log(currencies, languages, borders);

          // const bordersList = borders.slice(0, 3);
          // console.log(bordersList);

          return (
            <section key={index} className="details-content">
              <div className="detail-img">
                <img src={flags.svg} alt={name} />
              </div>
              <div className="detail-info">
                <h3 className="det-title">{name}</h3>
                <div className="details-container">
                  <div className="details-top">
                    <p>
                      <span className="definition">Native Name:</span>
                      {' ' + nativeName}
                    </p>
                    <p>
                      <span className="definition">Population:</span>
                      {' ' + population}
                    </p>
                    <p>
                      <span className="definition"> Region :</span>
                      {' ' + region}
                    </p>
                    <p>
                      <span className="definition">Sub Region:</span>
                      {' ' + subregion}
                    </p>
                    <p>
                      <span className="definition">Capital:</span>
                      {' ' + capital}
                    </p>
                  </div>
                  <div className="details-bottom">
                    <p>
                      <span className="definition"> Top Level Domain:</span>
                      {' ' + topLevelDomain[0]}
                    </p>
                    <p>
                      <span className="definition">Currencies:</span>
                      {currencies && `${' ' + currencies[0].name}`}
                    </p>
                    <p>
                      <span className="definition">Languages:</span>
                      {languages && `${' ' + languages[0].name}`}
                    </p>
                  </div>
                </div>

                <div className="details-border">
                  <p>
                    <span className="definition">Border Countries:</span>
                  </p>
                  {borders ? (
                    borders.slice(0, 3).map((item, index) => (
                      <p key={index} className="border">
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="border">N/A</p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default SingleCountry;
