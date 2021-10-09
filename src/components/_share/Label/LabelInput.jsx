const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
  cbOnChange,
}) => {
  return (
    <label>
     {title &&  <p>{title}</p>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={cbOnChange}
      />
    </label>
  );
};

export default LabelInput;
