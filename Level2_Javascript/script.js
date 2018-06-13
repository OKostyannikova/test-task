// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

const filterByExpiration = (items) => {
  const now = Date.now();
  
  return items.filter(element => {
    const date = Date.parse(element.expirationDate);
    return date > now;
  });
};