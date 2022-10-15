const isSearchValid = (search: string) => {
  return search.length >= 3 || search === "";
};

export { isSearchValid };
