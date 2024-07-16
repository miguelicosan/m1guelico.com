<section id="contacto" class="bg-gray-200 py-12">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-4">Contacto</h2>
        <form
            action="#"
            method="post"
            class="bg-white p-6 rounded-lg shadow-lg"
        >
            <div class="mb-4">
                <label for="name" class="block text-lg font-medium"
                    >Nombre</label
                >
                <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-lg font-medium"
                    >Correo Electrónico</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-lg font-medium"
                    >Mensaje</label
                >
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                class="bg-blue-900 text-white px-6 py-2 rounded-md"
                >Enviar</button
            >
        </form>
    </div>
</section>
