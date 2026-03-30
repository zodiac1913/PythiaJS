import sharp from 'sharp';

await sharp('src/ui/pic/PythiaJS.png')
  .composite([{
    input: Buffer.from([255, 255, 255, 51]), // white with 20% opacity (51/255)
    raw: { width: 1, height: 1, channels: 4 },
    tile: true,
    blend: 'dest-in'
  }])
  .toFile('src/ui/pic/PythiaJS-bg.png');

console.log('Created PythiaJS-bg.png with 20% opacity');
