function Button() {
  function handleClick(e) {
    e.preventDefault();
    alert('Le lien a été cliqué.');
  }

  return (
    <button onClick={handleClick}>
      Wesh Clique ici
    </button>
  );
}

export default Button;