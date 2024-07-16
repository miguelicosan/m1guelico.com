<script>
    export let articles = [
        {
            title: "Artículo 1",
            summary: "Resumen del artículo.",
            image: "https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg",
        },
        {
            title: "Artículo 2",
            summary: "Resumen del artículo.",
            image: "https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg",
        },
        {
            title: "Artículo 3",
            summary: "Resumen del artículo.",
            image: "https://img.freepik.com/vector-gratis/fondo-monocromatico-blanco-estilo-papel_52683-66443.jpg",
        },
    ];
</script>

<section id="blog" class="py-12">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-4">
            Últimos Artículos y Colaboraciones
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each articles as article}
                <article
                    class="card bg-cover bg-center bg-gradient-to-b p-6 rounded-lg shadow-lg"
                    style="background-image: url('{article.image}');"
                >
                    <h3 class="text-2xl font-semibold mb-2 text-white">
                        {article.title}
                    </h3>
                    <p class="text-lg text-white">{article.summary}</p>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .card:hover {
        transform: scale(1.05);
        transition: transform 0.3s;
    }
</style>
