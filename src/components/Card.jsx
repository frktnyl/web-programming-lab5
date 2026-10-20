function Card({ children }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    backgroundColor: '#fafafa',
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;