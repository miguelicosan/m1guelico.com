<script>
    export let projects = [
      { title: "Proyecto 1", description: "Descripción breve del proyecto." },
      { title: "Proyecto 2", description: "Descripción breve del proyecto." },
      { title: "Proyecto 3", description: "Descripción breve del proyecto." }
    ];
  </script>
  
  <section id="proyectos" class="py-12 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-4 text-primary">Últimos Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
          <div class="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 class="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
            <p class="text-lg text-primary">{project.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  