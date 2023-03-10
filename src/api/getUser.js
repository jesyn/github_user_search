export const getUser = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  return await response.json();
};
