window.ICONS = {
  certificato:'stethoscope', gpsguide:'satellite', bici:'bike', cambio:'repeat',
  luogo:'map-pin', pacco:'backpack', treno:'train-front',
  durezza:'mountain', sicurezza:'shield', dotazione:'hard-hat', acqua:'droplets',
  meteo:'cloud-sun-rain', animali:'paw-print',
  emergenze:'siren', arrivo:'flag', foto:'camera', social:'megaphone',
  dovedormire:'bed-double', basecamp:'tent'
};
function icon(name, size){
  size = size || 18;
  return `<svg width="${size}" height="${size}"><use href="icons/sprite.svg#i-${name}"/></svg>`;
}
