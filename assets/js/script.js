if (typeof tocbot !== 'undefined') {
  tocbot.init({
    tocSelector: '.main-content__toc',
    contentSelector: '.main-content__text',
    headingSelector: 'h1, h2, h3',
    hasInnerContainers: true,
  });
}
