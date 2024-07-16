<script>
    export let skills = [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "Python",
        "Flask",
        "MongoDB",
        "Node-RED",
        "Docker",
        "Kafka",
        "InfluxDB",
        "Grafana",
        "AWS EC2",
        "Docker Swarm",
        "Shell Scripting",
        "MQTT",
    ];
</script>

<section id="aptitudes" class="bg-gray-200 py-12">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-4">Aptitudes y Habilidades</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            {#each skills as skill}
                <div
                    class="skill-card bg-white p-6 rounded-lg shadow-lg text-center"
                >
                    <p class="text-lg font-medium">{skill}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .skill-card:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
        background-color: #f0f0f0;
    }
</style>
