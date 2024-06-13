export const hideScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `0.625rem`;
};

export const displayScroll = () => {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = `0rem`;
};
