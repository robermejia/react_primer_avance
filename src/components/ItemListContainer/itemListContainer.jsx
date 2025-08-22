const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      {/* Aquí puedes agregar la lista de productos en el futuro */}
    </section>
  );
};

export default ItemListContainer;