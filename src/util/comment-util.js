

export const getIdByPath = (pathName) => {
  let elementValue = pathName.substring(1);
  return elementValue.replaceAll('/', '-')
}
