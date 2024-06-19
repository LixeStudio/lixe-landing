export const getOffsets = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  const offsetX = Math.round((x / e.target.offsetWidth) * 100) + '%';
  const offsetY = Math.round((y / e.target.offsetHeight) * 100) + '%';
  return { offsetX, offsetY };
};
