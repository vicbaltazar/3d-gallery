import "./style.css";

const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center">
      <div class="perspective-[1000px]">
        <div
          id="carousel"
          class="relative w-[320px] h-[220px] preserve-3d"
        >
          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/Arthur-Morgan.jpg"
              class="w-full h-full object-cover"
              alt="Foto 1"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/Arthur-cachaceiro.jpg"
              class="w-full h-full object-cover"
              alt="Foto 2"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/arthur.jpg"
              class="w-full h-full object-cover"
              alt="Foto 3"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/john.jpg"
              class="w-full h-full object-cover"
              alt="Foto 4"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/sybau.jpg"
              class="w-full h-full object-cover"
              alt="Foto 5"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/John-Marston.jpg"
              class="w-full h-full object-cover"
              alt="Foto 6"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/Kieran-Duffy.jpg"
              class="w-full h-full object-cover"
              alt="Foto 7"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/Dutch.jpg"
              class="w-full h-full object-cover"
              alt="Foto 8"
            />
          </figure>

          <figure class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/micah-belly.jpg"
              class="w-full h-full object-cover"
              alt="Foto 9"
            />
          </figure>
        </div>
      </div>
    </div>
  `;
}
