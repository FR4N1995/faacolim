if (document.querySelector('#mapa')) {
    // alert('Hola desde mapa.js');

    const lat = 20.13457489013672;
    const lgn = -101.1939697265625;
    const zoom = 5;


    const map = L.map('mapa').setView([lat, lgn], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lgn]).addTo(map)
        .bindPopup(`
            <h2 class="mapa_heading">Faacolim</h2>
            <p class="mapa__texto">sucursal de hilo Moroleón </p>
        `)
        .openPopup();
    L.marker([19.562040328979492, -98.90575408935547]).addTo(map)
        .bindPopup(`
            <h2 class="mapa_heading">Faacolim</h2>
            <p class="mapa__texto">sucursal de hilo chinconcuac </p>
        `)
        .openPopup();


}