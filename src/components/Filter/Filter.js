export const Filter = ({ value, onChange }) => {
  return (
    <label>
      filter by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
