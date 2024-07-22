"use client"
import React, { useEffect } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';
import { feature } from 'topojson-client';

const MyGlobe = () => {
  useEffect(() => {
    const markerSvg = `<svg viewBox="-4 0 36 36">
      <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
      <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;

    // const N = 30;
    const gData = [
      { lat: 51.1657, lng: 10.4515, size: 15, color: 'red' },
      { lat: 41.8719, lng: 12.5674, size: 20, color: 'red' },
      { lat: 55.7558, lng: 37.6176, size: 25, color: 'red' },
      { lat: 20.5937, lng: 78.9629, size: 30, color: 'red' },
    ];

    const remainingCountries = gData.length;
    for (let i = 0; i < remainingCountries; i++) {
      gData.push({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 7 + Math.random() * 30,
        color: 'blue',
      });
    }

    const world = Globe()
      .width(500)
      .height(500)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundColor('rgba(0,0,0,0)')
      .htmlElementsData(gData)
      .htmlElement((d) => {
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => console.info(d);
        return el;
      })
      .showGlobe(false)
      .showAtmosphere(false)
      .enablePointerInteraction(false)
      (document.getElementById('globeViz'));

    world.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2.5 }, 0);

    setTimeout(() => {
      world.pointOfView({}, 1000);
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 2;
    }, 1000);

    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        world
          .polygonsData(feature(landTopo, landTopo.objects.land).features)
          .polygonCapMaterial(new THREE.MeshLambertMaterial({ color: '#5FC62F', side: THREE.DoubleSide }))
          .polygonSideColor(() => 'rgba(0,0,0,0)');
      });

    const globeMaterial = world.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', (texture) => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('grey');
      globeMaterial.shininess = 15;
    });

    const directionalLight = world.lights().find((light) => light.type === 'DirectionalLight');
    directionalLight && directionalLight.position.set(1, 1, 1);
  }, []);

  return <div id="globeViz"></div>;
};

export default MyGlobe;
