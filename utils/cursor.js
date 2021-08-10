export default function cursor() {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 22}px`);
  });

  document.addEventListener('scroll', (e) => {
    cursor.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 22}px`);

  });
}
