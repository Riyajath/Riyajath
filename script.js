window.addEventListener('mousemove', moveLayers);

function moveLayers(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const layer1 = document.getElementById('layer1');
  const layer2 = document.getElementById('layer2');
  const layer3 = document.getElementById('layer3');

  // Adjust the translate values based on your desired effect
  const layer1Dx = mouseX * 0.01;
  const layer1Dy = mouseY * 0.01;
  const layer2Dx = mouseX * 0.02;
  const layer2Dy = mouseY * 0.02;
  const layer3Dx = mouseX * 0.03;
  const layer3Dy = mouseY * 0.03;

  layer1.style.transform = `translate(${layer1Dx}px, ${layer1Dy}px)`;
  layer2.style.transform = `translate(${layer2Dx}px, ${layer2Dy}px)`;
  layer3.style.transform = `translate(${layer3Dx}px, ${layer3Dy}px)`;
}
