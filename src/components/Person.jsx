export default function Person({ image, name, age }) {
  return (
    <>
      <div className="person">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </div>
    </>
  );
}
