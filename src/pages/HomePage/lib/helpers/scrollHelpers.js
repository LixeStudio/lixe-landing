function isMobile() {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|Tablet|tablet/i.test(
    userAgent
  );
}

export const hideScroll = () => {
  document.body.style.overflow = 'hidden';
  if (!isMobile()) {
    document.body.style.paddingRight = '0.625rem';
  }
};

export const displayScroll = () => {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '0rem';
};
