<script>
    const skills = [
        {
            title: "Desarrollo Frontend",
            image: "/img/desarrollo-frontend.webp",
            description:
                "Transforma tus ideas en experiencias digitales impresionantes con Figma y nuestras tecnologías reactivas favoritas: Svelte, HTML, CSS, Bootstrap y Tailwind CSS. Diseños que capturan la atención y funcionalidad que enamora.",
        },
        {
            title: "Desarrollo Backend",
            image: "/img/desarrollo-backend.webp",
            description:
                "Construye la columna vertebral de tus aplicaciones con nuestras habilidades en SQL Server, MongoDB, API REST Flask y Java. Despliega soluciones escalables y seguras en AWS EC2 para un rendimiento óptimo.",
        },
        {
            title: "Big Data",
            image: "/img/big-data.webp",
            description:
                "Desbloquea el poder de los datos masivos con nuestras herramientas avanzadas: Docker Compose, Kubernetes, IoT, MQTT, Node-RED, Hadoop, Spark, Kafka, Hive, Elasticsearch, Grafana y Kibana. Soluciones que transforman datos en decisiones estratégicas.",
        },
        {
            title: "Inteligencia Artificial",
            image: "/img/inteligencia-artificial.webp",
            description:
                "Potencia tus proyectos con Inteligencia Artificial utilizando Keras, TensorFlow, Scikit-Learn, PySpark, Numpy y Pandas. Crea modelos que predicen el futuro y algoritmos que automatizan tareas complejas.",
        },
    ];
</script>

<section id="aptitudes" class="relative bg-gray-200 py-12 overflow-hidden">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-4">Habilidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each skills as skill}
                <div class="skill-card bg-white rounded-lg shadow-lg overflow-hidden relative">
                    <div class="relative h-56 overflow-hidden">
                        <div class="absolute inset-0 bg-cover bg-center skill-background" style="background-image: url({skill.image});"></div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">{skill.title}</h3>
                        <p class="text-lg text-justify">{skill.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .rounded-lg {
        border-radius: 0.75rem;
    }

    .shadow-lg {
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .skill-background {
        background-size: cover;
        background-position: center;
    }

    .bg-gradient-to-b {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
</style>
