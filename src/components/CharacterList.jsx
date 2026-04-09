const CharacterList = ({ characters, isLoading }) => {
  if (isLoading) return <h1 className="loading-text">loading..</h1>;

  return (
    <div className="character-list">
      {characters?.map((char) => (
        <div key={char.id} className="character-card">
          <div className="image-wrapper">
            <img src={char.image} alt={char.name} />
          </div>

          <div className="character-details">
            <h3>{char.name}</h3>
            <div className="status-info">
              <span
                className={`status-icon ${char.status.toLowerCase()}`}
              ></span>
              <span>
                {char.status} - {char.species}
              </span>
            </div>
            <p className="location-label">Origin: {char.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CharacterList;
