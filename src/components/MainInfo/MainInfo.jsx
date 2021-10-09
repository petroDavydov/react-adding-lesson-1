

const MainInfo = ({ title, currency = "USD", options }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{currency}</p>
      <ul>
        {options.map(({ namePeriod, titlePeriod, sum }) => (
          <li key={namePeriod}>
            <span>{titlePeriod}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <button type="button">Add</button>
    </section>
  );
};

export default MainInfo;
