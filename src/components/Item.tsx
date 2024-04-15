

export default function Item({ item}: { item: {} }) {
  return (
    <div>
   
      {Object.entries(item).map(([key, value], i) => (
            <div key={i}>
              {key}: {i}
            </div>
          ))}
    </div>
  );
}