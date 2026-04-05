const CharacterList = ({ characters, isLoading }) => {
  if (isLoading) return <h1 className="loading-text">loading..</h1>;

  return (
    <div className="character-list">
      {characters?.map((char) => (
        <div key={char.id} className="character-card">
          <img src={char.image} alt={char.name} />
          <h1>{char.name}</h1>
          <p>{char.status}</p>
        </div>
      ))}
    </div>
  );
};
export default CharacterList;
