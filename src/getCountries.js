import React from 'react';
import { Link } from 'react-router-dom';

const GetCountries = ({ countries }) => {
  return (
    <>
      <section className="country-cards">
        {countries
          .map(({ name, flag, population, region, capital, id }, index) => {
            // console.log(name);
            return (
              <article className="card" key={index}>
                <Link to={`/single-country/${name}`}>
                  <div className="card-img-container">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="card-details">
                    <h3>{name}</h3>
                    <p>
                      <span className="info"> Population:</span> {population}
                    </p>
                    <p>
                      <span className="info"> Region:</span>
                      {region}
                    </p>
                    <p>
                      <span className="info">Capital: </span>
                      {capital}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default GetCountries;
