/**
 * Get item with passed name from localStorage
 * @param name
 * @returns {Array}
 */
export const getStorageItem = name => {
  const itemsList = localStorage.getItem(name);
  const areItemsExist = !!itemsList;

  return areItemsExist  ? JSON.parse(itemsList) : [];
};

/**
 * Generate unique data-based key
 * @param prefix
 * @returns {string}
 */
export const generateKey = (prefix = 'pre') => {
  const number = Math.random();
  const key = number.toString().slice(-6);

  return `${prefix}_${key}`;
};